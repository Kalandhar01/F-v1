import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function emailTemplate(name: string, email: string, projectType: string, message: string) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="520" cellpadding="0" cellspacing="0" style="max-width:520px;width:100%;">

          <tr>
            <td align="center" style="padding-bottom:36px;">
              <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>
                  <td style="background:linear-gradient(135deg,#6366f1,#818cf8);padding:2px;border-radius:50%;">
                    <table cellpadding="0" cellspacing="0" style="background:#0a0a0a;border-radius:50%;">
                      <tr>
                        <td style="width:40px;height:40px;text-align:center;vertical-align:middle;font-size:18px;font-weight:800;color:#818cf8;letter-spacing:-1px;">N</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <p style="margin:14px 0 0;font-size:13px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#525252;">Portfolio Contact</p>
            </td>
          </tr>

          <tr>
            <td style="background:#141414;border:1px solid #1f1f1f;border-radius:16px;padding:36px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:20px;font-weight:700;color:#fafafa;">New Project Inquiry</p>
                    <p style="margin:4px 0 0;font-size:13px;color:#525252;">A potential client has reached out through your portfolio.</p>
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;border-top:1px solid #1f1f1f;padding-top:28px;">
                <tr>
                  <td>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:16px;background:#18181b;border-radius:12px;">
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width:24px;vertical-align:top;">
                                <table cellpadding="0" cellspacing="0" style="width:8px;height:8px;border-radius:50%;background:#818cf8;margin-top:4px;"><tr><td></td></tr></table>
                              </td>
                              <td>
                                <p style="margin:0;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#818cf8;">Client</p>
                                <p style="margin:4px 0 0;font-size:14px;color:#e4e4e7;">${name}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:10px;">
                      <tr>
                        <td width="50%" style="padding-right:5px;vertical-align:top;">
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="padding:16px;background:#18181b;border-radius:12px;">
                                <table width="100%" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td style="width:24px;vertical-align:top;">
                                      <table cellpadding="0" cellspacing="0" style="width:8px;height:8px;border-radius:50%;background:#818cf8;margin-top:4px;"><tr><td></td></tr></table>
                                    </td>
                                    <td>
                                      <p style="margin:0;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#818cf8;">Email</p>
                                      <p style="margin:4px 0 0;font-size:13px;color:#e4e4e7;">${email}</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                        <td width="50%" style="padding-left:5px;vertical-align:top;">
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="padding:16px;background:#18181b;border-radius:12px;">
                                <table width="100%" cellpadding="0" cellspacing="0">
                                  <tr>
                                    <td style="width:24px;vertical-align:top;">
                                      <table cellpadding="0" cellspacing="0" style="width:8px;height:8px;border-radius:50%;background:#818cf8;margin-top:4px;"><tr><td></td></tr></table>
                                    </td>
                                    <td>
                                      <p style="margin:0;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#818cf8;">Project</p>
                                      <p style="margin:4px 0 0;font-size:13px;color:#e4e4e7;">${projectType}</p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:10px;">
                      <tr>
                        <td style="padding:16px;background:#18181b;border-radius:12px;">
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width:24px;vertical-align:top;">
                                <table cellpadding="0" cellspacing="0" style="width:8px;height:8px;border-radius:50%;background:#818cf8;margin-top:4px;"><tr><td></td></tr></table>
                              </td>
                              <td>
                                <p style="margin:0;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:#818cf8;">Message</p>
                                <p style="margin:6px 0 0;font-size:13px;color:#a1a1aa;line-height:1.7;">${message}</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td align="center" style="padding-top:28px;">
              <p style="margin:0;font-size:11px;color:#525252;">NEXUS · Coimbatore, Tamilnadu</p>
              <p style="margin:4px 0 0;font-size:10px;color:#3f3f46;">This inquiry was submitted from your portfolio website.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export async function POST(request: Request) {
  try {
    const { name, email, projectType, message } = await request.json()

    if (!name || !email || !projectType || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const smtpPass = process.env.SMTP_PASSWORD
    if (!smtpPass) {
      console.log('Contact form data (SMTP not configured):', { name, email, projectType, message })
      return NextResponse.json({ success: true, note: 'Email not sent. Set SMTP_PASSWORD env var to enable.' })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kalandars2004@gmail.com',
        pass: smtpPass,
      },
    })

    await transporter.sendMail({
      from: `"${name}" <kalandars2004@gmail.com>`,
      to: 'kalandars2004@gmail.com',
      subject: `Portfolio Inquiry — ${name} (${projectType})`,
      html: emailTemplate(name, email, projectType, message),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
