"use client"
import { useState } from "react"

import { HiBars3, HiXMark } from "react-icons/hi2"
import { Button, IconButton, Navbar, Collapse } from "@material-tailwind/react"

import { Logo } from "@/components"
import NavList from "./nav-list"

const Nav = () => {
  const [openNav, setOpenNav] = useState(false)

  const toggleOpenNav = () => setOpenNav((p) => !p)
  const handleCloseNav = () => setOpenNav(false)

  return (
    <header className="sticky top-0 z-10">
      <Navbar className="rounded-none text-gray-900 py-2 lg:max-w-none">
        {/* Desktop Nav */}
        <div className="flex justify-between">
          <Logo />

          <div className="flex items-center gap-8">
            <div className="hidden md:block">
              <NavList />
            </div>

            <a href="#become-sponsor">
              <Button className="hidden md:inline-flex bg-primary">Join Us</Button>
            </a>

            <IconButton variant="text" className="md:hidden text-3xl rounded-lg text-gray-900" onClick={toggleOpenNav}>
              {openNav ? <HiXMark /> : <HiBars3 />}
            </IconButton>
          </div>
        </div>

        {/* Mobile Nav */}
        <Collapse open={openNav} className="overflow-hidden">
          <div className="py-4 md:hidden">
            <NavList handleCloseNav={handleCloseNav} />

            <a href="#become-sponsor">
              <Button size="sm" className="bg-gray-900 text-left w-full mt-4 md:mt-0">
                Join Us
              </Button>
            </a>
          </div>
        </Collapse>
      </Navbar>
    </header>
  )
}

export default Nav
