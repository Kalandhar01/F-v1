import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import { MapPin } from "lucide-react"
import { siteConfig } from "@/constants"
import Image from "next/image"

const footerColumns = [
  {
    title: "Pages",
    links: [
      { title: "Home", href: "/#hero" },
      { title: "Services", href: "/#services" },
      { title: "Work", href: "/#work" },
      { title: "Why Us", href: "/#why-us" },
      { title: "FAQ", href: "/#faq" },
      { title: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { title: "Web Development", href: "/#services" },
      { title: "UI/UX Design", href: "/#services" },
      { title: "SaaS Development", href: "/#services" },
      { title: "E-Commerce", href: "/#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Digital Consulting", href: "/#services" },
      { title: "Start a project", href: "/#contact" },
      { title: "View our work", href: "/#work" },
    ],
  },
  {
    title: "Contact",
    links: [
      { title: siteConfig.email, href: `mailto:${siteConfig.email}` },
      { title: "Start a project", href: "/#contact" },
      { title: "Share a brief", href: `mailto:${siteConfig.email}` },
      { title: "View project work", href: "/#work" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-transparent px-4 sm:px-8 py-12 sm:py-20 text-neutral-400">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:gap-12 text-sm sm:flex-row sm:px-8">
        <div className="relative z-10 max-w-sm">
          <a
            href="/#hero"
            className="group relative z-20 mr-0 mb-4 flex items-center gap-3 py-1 text-sm font-normal text-white transition-all duration-300 hover:scale-[1.03] hover:drop-shadow-[0_0_22px_rgba(99,102,241,0.55)] md:mr-4"
          >
            <Image
              src={siteConfig.assets.logoFooter}
              alt={siteConfig.name}
              width={168}
              height={112}
              className="h-12 w-auto object-contain transition-all duration-300"
            />
            <span className="flex flex-col">
              <span className="font-semibold tracking-tight text-white">{siteConfig.name}</span>
              <span className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-indigo-200/45">
                {siteConfig.tagline}
              </span>
            </span>
          </a>
          <p className="mt-4 max-w-xs leading-6 text-neutral-400">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex max-w-xs items-start gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 backdrop-blur-sm">
            <MapPin className="mt-0.5 size-4 shrink-0 text-indigo-300" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                Location
              </p>
              <p className="mt-1 leading-5 text-neutral-300">
                {siteConfig.location}
              </p>
            </div>
          </div>
          <div className="mt-6 text-neutral-500">
            Copyright {siteConfig.name} {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>

        <div className="relative z-10 grid w-full grid-cols-2 items-start gap-6 sm:gap-10 sm:w-auto sm:shrink-0 lg:grid-cols-4">
          {footerColumns.map((column) => (
            <div
              key={column.title}
              className="flex w-full flex-col justify-center space-y-4"
            >
              <p className="font-bold text-neutral-200 transition-colors hover:text-white">
                {column.title}
              </p>
              <ul className="list-none space-y-4 text-neutral-400 transition-colors">
                {column.links.map((link) => (
                  <li key={link.title} className="list-none">
                    <a
                      className="transition-colors hover:text-white"
                      href={link.href}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 sm:mt-14 h-20 sm:h-32 md:h-44 lg:h-60 w-full max-w-6xl">
        <TextHoverEffect text="DREAMDIGITAL" duration={6.5} align="center" automatic />
      </div>
    </footer>
  )
}
