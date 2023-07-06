"use client"
import { useState } from "react"
import { useScroll } from "framer-motion"

import { Toaster } from "react-hot-toast"
import { ThemeProvider } from "@material-tailwind/react"
import { Footer, Navbar, ScrollToTop } from "@/components"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  scrollY.on("change", () => {
    if (scrollY.get() <= 300 && isScrolled) return setIsScrolled(false)
    if (scrollY.get() >= 300 && !isScrolled) setIsScrolled(true)
  })

  return (
    <ThemeProvider>
      <Toaster />

      {isScrolled && <ScrollToTop />}

      <Navbar />

      {children}

      <Footer />
    </ThemeProvider>
  )
}

export default MainLayout
