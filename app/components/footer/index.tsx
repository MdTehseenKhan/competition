"use client"
import Link from "next/link"
import { Button, IconButton, Input } from "@material-tailwind/react"

import { Container, Logo } from "@/components"
import { menuItems, socials } from "@/constants"

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600">
      <Container>
        <div className="py-20 flex flex-wrap md:text-left text-center">
          <div className="w-full sm:w-1/2">
            <h2 className="font-medium text-gray-900 tracking-widest text-sm mb-3">BECOME A SPONSOR</h2>

            <div className="w-full md:w-72 inline-flex justify-center mb-3 mr-3">
              <Input label="Email" />
            </div>
            <Button className="px-4 py-2 bg-primary w-full md:w-auto">Submit</Button>
          </div>

          <div className="w-full sm:w-1/2 p-5">
            <h2 className="font-medium text-gray-900 tracking-widest text-sm mb-3">EXPLORE</h2>

            <nav className="inline-flex flex-col gap-2">
              {menuItems?.map(({ title, link }, i) => (
                <Link key={i + link} href={link} className="hover:scale-110 hover:text-gray-900 transition">
                  {title}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="py-5 flex gap-4 flex-col items-center justify-center sm:justify-start sm:flex-row">
          <Logo />
          Research Center AI
          {/*  */}
          <p className="text-sm sm:ml-6">© 2023 — RCAI</p>
          {/*  */}
          <div className="flex sm:ml-auto">
            {socials?.map(({ link, Icon }, i) => (
              <a key={i + link} href={link} target="_blank">
                <IconButton variant="text" className="inline-flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </IconButton>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
