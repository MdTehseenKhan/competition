"use client"
import { useState } from "react"

import { HiBars3, HiXMark } from "react-icons/hi2"
import { Button, IconButton, Navbar, Collapse } from "@material-tailwind/react"

import { Container, Logo } from "@/components"
import NavList from "./nav-list"

const Nav = () => {
  const [openNav, setOpenNav] = useState(false)

  const toggleOpenNav = () => setOpenNav((p) => !p)
  const handleCloseNav = () => setOpenNav(false)

  return (
    <Navbar className="sticky top-0 text-gray-900 bg-white py-2 z-10">
      <Container>
        {/* Desktop Nav */}
        <div className="flex items-center justify-between text-blue-gray-900">
          <Logo />

          <div className="flex items-center gap-8">
            <div className="hidden md:block">
              <NavList />
            </div>

            <Button className="hidden md:inline-flex bg-primary px-4 py-2">Join Us</Button>

            <IconButton
              variant="text"
              className="md:hidden h-10 w-10 p-1 rounded-lg hover:bg-white/30 transition"
              onClick={toggleOpenNav}
            >
              {openNav ? <HiXMark className="h-full w-full" /> : <HiBars3 className="h-full w-full" />}
            </IconButton>
          </div>
        </div>

        {/* Mobile Nav */}
        <Collapse open={openNav} className="md:hidden overflow-hidden">
          <div className="py-4">
            <NavList handleCloseNav={handleCloseNav} />

            <Button variant="gradient" size="sm" className="bg-gray-900 font-bold px-4 py-2 flex w-full">
              Join Us
            </Button>
          </div>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default Nav
