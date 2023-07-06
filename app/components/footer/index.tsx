"use client"
import Link from "next/link"
import { IconButton } from "@material-tailwind/react"

import { Container, Logo } from "@/components"
import { menuItems, socials } from "@/constants"
import SponsorForm from "./sponsor-form"

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 text-center md:text-left">
      <Container>
        <div className="pt-16 flex gap-10 sm:gap-0 flex-wrap">
          <div className="w-full md:w-1/2 p-5">
            <SponsorForm />
          </div>

          <div className="w-full md:w-1/2 p-5 flex flex-col gap-2 items-center md:items-start">
            <h2 className="font-medium text-gray-900 tracking-widest text-sm">EXPLORE</h2>

            <nav className="inline-flex gap-5 mb-2">
              {menuItems?.map(({ title, link }, i) => (
                <Link key={i + link} href={link} className="hover:scale-110 hover:text-gray-900 transition">
                  {title}
                </Link>
              ))}
            </nav>

            <h2 className="font-medium text-gray-900 tracking-widest text-sm">SOCIALS</h2>

            <div className="flex">
              {socials?.map(({ link, Icon }, i) => (
                <a key={i + link} href={link} target="_blank">
                  <IconButton
                    variant="text"
                    className="inline-flex items-center justify-center text-gray-600 hover:text-gray-900"
                  >
                    <Icon className="w-5 h-5" />
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="py-5 flex gap-4 flex-col items-center justify-center sm:justify-start sm:flex-row">
          © 2023 All Rights Reserved — Research Center AI
          <div className="flex sm:ml-auto">
            <Logo />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
