'use client'

import { useEffect, useRef } from 'react'

interface SplashCursorProps {
  color?: string
  backColor?: string
  speed?: number
  densityDissipation?: number
  velocityDissipation?: number
  splatRadius?: number
  pressureIterations?: number
}

export default function SplashCursor({
  color = '#ffffff',
  backColor = '#000000',
  speed = 0.5,
  densityDissipation = 4,
  velocityDissipation = 3,
  splatRadius = 0.2,
  pressureIterations = 4,
}: SplashCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', {
      alpha: true,
      premultipliedAlpha: true,
      antialias: true,
    })
    if (!gl) return

    const isMobile = window.innerWidth < 768
    const SIM_RESOLUTION = isMobile ? 128 : 256
    const DYE_RESOLUTION = isMobile ? 256 : 512

    class WebGLFluid {
      gl: WebGLRenderingContext
      simWidth: number
      simHeight: number
      dyeWidth: number
      dyeHeight: number
      density: Framebuffer[] = []
      velocity: Framebuffer[] = []
      pressure: Framebuffer[] = []
      divergence: Framebuffer | null = null
      curl: Framebuffer | null = null
      updatePrograms: Program[] = []
      splatProgram: Program | null = null
      divergenceProgram: Program | null = null
      curlProgram: Program | null = null
      vorticityProgram: Program | null = null
      pressureProgram: Program | null = null
      gradientSubtractProgram: Program | null = null
      displayProgram: Program | null = null
      advectionProgram: Program | null = null
      lastMouseMove = 0
      lastInteraction = 0
      mouseX = 0
      mouseY = 0
      prevMouseX = 0
      prevMouseY = 0
      supportsLinearFloat = false
      quadBuffer: WebGLBuffer | null = null
      quadVAO: WebGLVertexArrayObjectOES | null = null

      constructor(gl: WebGLRenderingContext) {
        this.gl = gl
        this.simWidth = SIM_RESOLUTION
        this.simHeight = SIM_RESOLUTION
        this.dyeWidth = DYE_RESOLUTION
        this.dyeHeight = DYE_RESOLUTION
        this.init()
      }

      init() {
        if (!this.gl) return
        const gl = this.gl

        const ext1 = gl.getExtension('OES_texture_float')
        const ext2 = gl.getExtension('OES_texture_half_float')
        const ext3 = gl.getExtension('OES_texture_float_linear')
        const ext4 = gl.getExtension('OES_texture_half_float_linear')
        this.supportsLinearFloat = !!(ext3 || ext4)

        if (!ext1 && !ext2) {
          console.warn('Float textures not supported')
          return
        }

        const halfFloat = (gl as any).HALF_FLOAT_OES || 0x8d61
        const texType = ext1 ? gl.FLOAT : halfFloat
        const textureConfig: TextureConfig = { type: texType, filter: this.supportsLinearFloat ? gl.LINEAR : gl.NEAREST }

        this.density = this.createDoubleFBO(texType, textureConfig)
        this.velocity = this.createDoubleFBO(texType, textureConfig)
        this.pressure = this.createDoubleFBO(texType, textureConfig)
        this.divergence = this.createFBO(texType, textureConfig)
        this.curl = this.createFBO(texType, textureConfig)

        this.updatePrograms = []
        for (let i = 0; i < pressureIterations; i++) {
          this.updatePrograms.push(this.compileShader(UPDATE_SHADER))
        }

        this.splatProgram = this.compileShader(SPLAT_SHADER)
        this.divergenceProgram = this.compileShader(DIVERGENCE_SHADER)
        this.curlProgram = this.compileShader(CURL_SHADER)
        this.vorticityProgram = this.compileShader(VORTICITY_SHADER)
        this.pressureProgram = this.compileShader(PRESSURE_SHADER)
        this.gradientSubtractProgram = this.compileShader(GRADIENT_SUBTRACT_SHADER)
        this.displayProgram = this.compileShader(DISPLAY_SHADER)
        this.advectionProgram = this.compileShader(ADVECTION_SHADER)

        this.quadBuffer = gl.createBuffer()!
        gl.bindBuffer(gl.ARRAY_BUFFER, this.quadBuffer)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

        const extVAO = gl.getExtension('OES_vertex_array_object')
        if (extVAO) {
          this.quadVAO = extVAO.createVertexArrayOES()!
          extVAO.bindVertexArrayOES(this.quadVAO)
          gl.bindBuffer(gl.ARRAY_BUFFER, this.quadBuffer)
          gl.enableVertexAttribArray(0)
          gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)
        }
      }

      createFBO(texType: number, config: TextureConfig): Framebuffer {
        const gl = this.gl
        const fbo = gl.createFramebuffer()!
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo)

        const texture = gl.createTexture()!
        gl.bindTexture(gl.TEXTURE_2D, texture)
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.dyeWidth, this.dyeHeight, 0, gl.RGBA, texType, null)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, config.filter)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, config.filter)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)

        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0)

        return { fbo, texture, width: this.dyeWidth, height: this.dyeHeight }
      }

      createDoubleFBO(texType: number, config: TextureConfig): Framebuffer[] {
        return [this.createFBO(texType, config), this.createFBO(texType, config)]
      }

      compileShader(source: string): Program {
        const gl = this.gl
        const vertexShader = gl.createShader(gl.VERTEX_SHADER)!
        gl.shaderSource(vertexShader, VERTEX_SHADER)
        gl.compileShader(vertexShader)

        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)!
        gl.shaderSource(fragmentShader, source)
        gl.compileShader(fragmentShader)

        const program = gl.createProgram()!
        gl.attachShader(program, vertexShader)
        gl.attachShader(program, fragmentShader)
        gl.linkProgram(program)

        return { program, uniforms: this.getUniforms(program, source) }
      }

      getUniforms(program: WebGLProgram, source: string): Record<string, WebGLUniformLocation> {
        const gl = this.gl
        const uniforms: Record<string, WebGLUniformLocation> = {}
        const regex = /uniform\s+\w+\s+(\w+)/g
        let match
        while ((match = regex.exec(source)) !== null) {
          const location = gl.getUniformLocation(program, match[1])
          if (location) uniforms[match[1]] = location
        }
        return uniforms
      }

      blit(program: Program) {
        const gl = this.gl
        gl.useProgram(program.program)

        const extVAO = gl.getExtension('OES_vertex_array_object')
        if (extVAO && this.quadVAO) {
          extVAO.bindVertexArrayOES(this.quadVAO)
        } else {
          gl.bindBuffer(gl.ARRAY_BUFFER, this.quadBuffer)
          gl.enableVertexAttribArray(0)
          gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)
        }

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      }

      splat(x: number, y: number, dx: number, dy: number) {
        if (!this.splatProgram) return
        const gl = this.gl
        const program = this.splatProgram

        gl.useProgram(program.program)
        gl.uniform1i(program.uniforms['u_target'], 0)
        gl.uniform1f(program.uniforms['aspect_ratio'], canvas!.width / canvas!.height)
        gl.uniform1f(program.uniforms['radius'], splatRadius / 100.0)
        gl.uniform2f(program.uniforms['point'], x / canvas!.width, 1 - y / canvas!.height)
        gl.uniform2f(program.uniforms['color'], dx, dy)

        gl.bindFramebuffer(gl.FRAMEBUFFER, this.velocity[0].fbo)
        gl.activeTexture(gl.TEXTURE0)
        gl.bindTexture(gl.TEXTURE_2D, this.velocity[1].texture)
        this.blit(program)

        gl.uniform2f(program.uniforms['color'], dx, dy)
        gl.bindFramebuffer(gl.FRAMEBUFFER, this.density[0].fbo)
        gl.activeTexture(gl.TEXTURE0)
        gl.bindTexture(gl.TEXTURE_2D, this.density[1].texture)
        this.blit(program)
      }

      step() {
        if (!this.advectionProgram || !this.divergenceProgram || !this.curlProgram || !this.vorticityProgram || !this.pressureProgram || !this.gradientSubtractProgram || !this.displayProgram) return

        const gl = this.gl
        const dt = Math.min((performance.now() - this.lastInteraction) / 1000, 0.016)

        // Advection
        gl.uniform1f(this.advectionProgram.uniforms['dt'], dt)
        gl.uniform1f(this.advectionProgram.uniforms['dissipation'], velocityDissipation)
        this.renderProgram(this.advectionProgram, this.velocity, this.velocity)

        gl.uniform1f(this.advectionProgram.uniforms['dt'], dt)
        gl.uniform1f(this.advectionProgram.uniforms['dissipation'], densityDissipation)
        this.renderProgram(this.advectionProgram, this.density, this.density)

        // Vorticity
        this.renderProgram(this.curlProgram, [this.velocity[0]], [this.curl!])
        this.renderProgram(this.vorticityProgram, [this.velocity[0], this.curl!], [this.velocity[0]])

        // Divergence
        this.renderProgram(this.divergenceProgram, [this.velocity[0]], [this.divergence!])

        // Pressure
        gl.uniform1f(this.pressureProgram.uniforms['pressureIterations'], pressureIterations)
        for (let i = 0; i < pressureIterations; i++) {
          gl.uniform1i(this.pressureProgram.uniforms['pressureIteration'], i)
          this.renderProgram(this.pressureProgram, [this.pressure[0], this.divergence!], this.pressure)
        }

        // Gradient subtract
        this.renderProgram(this.gradientSubtractProgram, [this.pressure[0], this.velocity[0]], this.velocity)

        // Display
        this.renderProgram(this.displayProgram, [this.density[0]], null)
      }

      renderProgram(program: Program, inputs: Framebuffer[], output: Framebuffer[] | Framebuffer | null) {
        if (!program) return
        const gl = this.gl

        if (output) {
          if (Array.isArray(output)) {
            gl.bindFramebuffer(gl.FRAMEBUFFER, output[0].fbo)
          } else {
            gl.bindFramebuffer(gl.FRAMEBUFFER, output.fbo)
          }
        } else {
          gl.bindFramebuffer(gl.FRAMEBUFFER, null)
        }

        inputs.forEach((input, i) => {
          gl.activeTexture(gl.TEXTURE0 + i)
          gl.bindTexture(gl.TEXTURE_2D, input.texture)
          gl.uniform1i(program.uniforms[`u_${i === 0 ? 'velocity' : i === 1 ? 'source' : i === 2 ? 'divergence' : i === 3 ? 'curl' : 'pressure'}`], i)
        })

        this.blit(program)

        if (output && Array.isArray(output)) {
          const temp = output[0]
          output[0] = output[1]
          output[1] = temp
        }
      }
    }

    const fluid = new WebGLFluid(gl)

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas!.width = window.innerWidth * dpr
      canvas!.height = window.innerHeight * dpr
      canvas!.style.width = `${window.innerWidth}px`
      canvas!.style.height = `${window.innerHeight}px`
      gl!.viewport(0, 0, canvas!.width, canvas!.height)
    }

    resize()
    window.addEventListener('resize', resize)

    const mouseMove = (e: MouseEvent) => {
      const now = performance.now()
      if (now - fluid.lastMouseMove < 16) return
      fluid.lastMouseMove = now
      fluid.lastInteraction = now

      const rect = canvas!.getBoundingClientRect()
      fluid.prevMouseX = fluid.mouseX
      fluid.prevMouseY = fluid.mouseY
      fluid.mouseX = e.clientX - rect.left
      fluid.mouseY = e.clientY - rect.top

      const dx = fluid.mouseX - fluid.prevMouseX
      const dy = fluid.mouseY - fluid.prevMouseY

      if (Math.abs(dx) > 0 || Math.abs(dy) > 0) {
        const intensity = 0.8
        fluid.splat(fluid.mouseX, fluid.mouseY, dx * intensity, dy * intensity)
        fluid.splat(fluid.mouseX, fluid.mouseY, dx * intensity, dy * intensity)
      }
    }

    const touchMove = (e: TouchEvent) => {
      e.preventDefault()
      const touch = e.touches[0]
      const now = performance.now()
      if (now - fluid.lastMouseMove < 16) return
      fluid.lastMouseMove = now
      fluid.lastInteraction = now

      const rect = canvas!.getBoundingClientRect()
      fluid.prevMouseX = fluid.mouseX
      fluid.prevMouseY = fluid.mouseY
      fluid.mouseX = touch.clientX - rect.left
      fluid.mouseY = touch.clientY - rect.top

      const dx = fluid.mouseX - fluid.prevMouseX
      const dy = fluid.mouseY - fluid.prevMouseY

      if (Math.abs(dx) > 0 || Math.abs(dy) > 0) {
        const hex = color.replace('#', '')
        const intensity = 0.6
        fluid.splat(fluid.mouseX, fluid.mouseY, dx * intensity, dy * intensity)
        fluid.splat(fluid.mouseX, fluid.mouseY, dx * intensity, dy * intensity)
      }
    }

    canvas.addEventListener('mousemove', mouseMove)
    canvas.addEventListener('touchmove', touchMove, { passive: false })

    // Initial splat in center to show something
    setTimeout(() => {
      fluid.splat(canvas!.width / 2, canvas!.height / 2, 5, -3)
    }, 100)

    const animate = () => {
      fluid.step()
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', mouseMove)
      canvas.removeEventListener('touchmove', touchMove)
    }
  }, [color, densityDissipation, velocityDissipation, splatRadius, pressureIterations])

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        id="fluid-canvas"
        className="w-full h-full"
        style={{ background: backColor, opacity: 0.5 }}
      />
    </div>
  )
}

// Shaders
const VERTEX_SHADER = `
  attribute vec2 a_position;
  varying vec2 v_texCoord;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_texCoord = a_position * 0.5 + 0.5;
  }
`

const DISPLAY_SHADER = `
  precision mediump float;
  varying vec2 v_texCoord;
  uniform sampler2D u_velocity;
  void main() {
    vec4 color = texture2D(u_velocity, v_texCoord);
    gl_FragColor = color;
  }
`

const SPLAT_SHADER = `
  precision mediump float;
  varying vec2 v_texCoord;
  uniform sampler2D u_target;
  uniform float aspect_ratio;
  uniform float radius;
  uniform vec2 point;
  uniform vec2 color;
  void main() {
    vec2 texCoord = v_texCoord;
    vec2 delta = texCoord - point;
    float dist = length(delta * vec2(aspect_ratio, 1.0));
    float w = exp(-dist * dist / radius);
    vec4 base = texture2D(u_target, texCoord);
    gl_FragColor = base + w * vec4(color, 1.0);
  }
`

const ADVECTION_SHADER = `
  precision mediump float;
  varying vec2 v_texCoord;
  uniform sampler2D u_velocity;
  uniform sampler2D u_source;
  uniform float dt;
  uniform float dissipation;
  void main() {
    vec2 coord = v_texCoord;
    vec2 vel = texture2D(u_velocity, coord).xy;
    vec2 prevCoord = coord - vel * dt;
    vec4 result = texture2D(u_source, prevCoord);
    result *= exp(-dissipation * dt);
    gl_FragColor = result;
  }
`

const DIVERGENCE_SHADER = `
  precision mediump float;
  varying vec2 v_texCoord;
  uniform sampler2D u_velocity;
  uniform vec2 texelSize;
  void main() {
    vec2 offset = 1.0 / vec2(textureSize(u_velocity, 0));
    vec2 vL = texture2D(u_velocity, v_texCoord - vec2(offset.x, 0.0)).xy;
    vec2 vR = texture2D(u_velocity, v_texCoord + vec2(offset.x, 0.0)).xy;
    vec2 vB = texture2D(u_velocity, v_texCoord - vec2(0.0, offset.y)).xy;
    vec2 vT = texture2D(u_velocity, v_texCoord + vec2(0.0, offset.y)).xy;
    float div = 0.5 * (vR.x - vL.x + vT.y - vB.y);
    gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
  }
`

const CURL_SHADER = `
  precision mediump float;
  varying vec2 v_texCoord;
  uniform sampler2D u_velocity;
  void main() {
    vec2 offset = 1.0 / vec2(textureSize(u_velocity, 0));
    float vL = texture2D(u_velocity, v_texCoord - vec2(offset.x, 0.0)).y;
    float vR = texture2D(u_velocity, v_texCoord + vec2(offset.x, 0.0)).y;
    float vB = texture2D(u_velocity, v_texCoord - vec2(0.0, offset.y)).x;
    float vT = texture2D(u_velocity, v_texCoord + vec2(0.0, offset.y)).x;
    float curl = vR - vL - vT + vB;
    gl_FragColor = vec4(curl, 0.0, 0.0, 1.0);
  }
`

const VORTICITY_SHADER = `
  precision mediump float;
  varying vec2 v_texCoord;
  uniform sampler2D u_velocity;
  uniform sampler2D u_curl;
  uniform vec2 texelSize;
  void main() {
    vec2 offset = 1.0 / vec2(textureSize(u_curl, 0));
    float curlL = texture2D(u_curl, v_texCoord - vec2(offset.x, 0.0)).x;
    float curlR = texture2D(u_curl, v_texCoord + vec2(offset.x, 0.0)).x;
    float curlB = texture2D(u_curl, v_texCoord - vec2(0.0, offset.y)).x;
    float curlT = texture2D(u_curl, v_texCoord + vec2(0.0, offset.y)).x;
    vec2 curlGrad = vec2(curlR - curlL, curlT - curlB);
    float curl = texture2D(u_curl, v_texCoord).x;
    vec2 force = curlGrad * vec2(1.0, -1.0);
    float len = length(force);
    force = len > 0.0 ? force / len : vec2(0.0);
    float vorticity = curl;
    vec2 vel = texture2D(u_velocity, v_texCoord).xy;
    gl_FragColor = vec4(vel + force * vorticity * 0.125, 0.0, 1.0);
  }
`

const PRESSURE_SHADER = `
  precision mediump float;
  varying vec2 v_texCoord;
  uniform sampler2D u_pressure;
  uniform sampler2D u_divergence;
  uniform float pressureIterations;
  uniform int pressureIteration;
  void main() {
    vec2 offset = 1.0 / vec2(textureSize(u_pressure, 0));
    float pL = texture2D(u_pressure, v_texCoord - vec2(offset.x, 0.0)).x;
    float pR = texture2D(u_pressure, v_texCoord + vec2(offset.x, 0.0)).x;
    float pB = texture2D(u_pressure, v_texCoord - vec2(0.0, offset.y)).x;
    float pT = texture2D(u_pressure, v_texCoord + vec2(0.0, offset.y)).x;
    float div = texture2D(u_divergence, v_texCoord).x;
    float pressure = (pL + pR + pB + pT - div) * 0.25;
    gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
  }
`

const GRADIENT_SUBTRACT_SHADER = `
  precision mediump float;
  varying vec2 v_texCoord;
  uniform sampler2D u_pressure;
  uniform sampler2D u_velocity;
  void main() {
    vec2 offset = 1.0 / vec2(textureSize(u_pressure, 0));
    float pL = texture2D(u_pressure, v_texCoord - vec2(offset.x, 0.0)).x;
    float pR = texture2D(u_pressure, v_texCoord + vec2(offset.x, 0.0)).x;
    float pB = texture2D(u_pressure, v_texCoord - vec2(0.0, offset.y)).x;
    float pT = texture2D(u_pressure, v_texCoord + vec2(0.0, offset.y)).x;
    vec2 grad = vec2(pR - pL, pT - pB) * 0.5;
    vec2 vel = texture2D(u_velocity, v_texCoord).xy;
    gl_FragColor = vec4(vel - grad, 0.0, 1.0);
  }
`

const UPDATE_SHADER = `
  precision mediump float;
  varying vec2 v_texCoord;
  uniform sampler2D u_velocity;
  uniform float dt;
  uniform float dissipation;
  void main() {
    vec2 vel = texture2D(u_velocity, v_texCoord).xy;
    vec4 result = vec4(vel * exp(-dissipation * dt), 0.0, 1.0);
    gl_FragColor = result;
  }
`

interface Framebuffer {
  fbo: WebGLFramebuffer
  texture: WebGLTexture
  width: number
  height: number
}

interface TextureConfig {
  type: number
  filter: number
}

interface Program {
  program: WebGLProgram
  uniforms: Record<string, WebGLUniformLocation>
}
