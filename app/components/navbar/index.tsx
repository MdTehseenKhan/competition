"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"

import { HiBars3, HiXMark } from "react-icons/hi2"
import { Button, IconButton, Navbar, Collapse, MobileNav } from "@material-tailwind/react"

import { menuItems } from "@/constants"

const Nav = () => {
  const [openNav, setOpenNav] = useState(false)
  const pathname = usePathname()

  const toggleOpenNav = () => setOpenNav((p) => !p)
  const handleCloseNav = () => setOpenNav(false)

  const logo = (
    <Link href="/" className="relative w-12 h-12 mr-4">
      <Image src="/images/rcai-logo.png" alt="Logo" fill className="object-contain" />
    </Link>
  )

  const navList = (
    <div className="mb-4 flex flex-col gap-2 md:mb-0 md:flex-row md:items-center">
      {menuItems?.map(({ title, link }, i) => (
        <Link
          key={i + title}
          href={link}
          onClick={handleCloseNav}
          className={`
            px-4 py-2 rounded-lg
            ${pathname == link ? "bg-primary text-white md:bg-transparent md:text-black font-bold" : ""}
          `}
        >
          {title}
        </Link>
      ))}
    </div>
  )

  return (
    <Navbar className="sticky top-0 text-black bg-white sm py-2 px-5 md:px-10 lg:px-12 z-10">
      <div className="flex items-center justify-between text-blue-gray-900">
        {logo}

        <div className="flex items-center gap-8">
          <div className="hidden md:block">{navList}</div>

          <Button className="hidden md:inline-block bg-primary px-4 py-2">Join Us</Button>

          <IconButton
            variant="text"
            className="md:hidden h-10 w-10 p-1 rounded-lg hover:bg-white/30 transition"
            onClick={toggleOpenNav}
          >
            {openNav ? <HiXMark className="h-full w-full" /> : <HiBars3 className="h-full w-full" />}
          </IconButton>
        </div>
      </div>

      <MobileNav open={openNav} className="md:hidden">
        <div className="py-4">
          {navList}
          <Button variant="gradient" size="sm" className="bg-black font-bold px-4 py-2 flex w-full">
            Join us
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  )
}

export default Nav
