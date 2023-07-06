"use client"

import { Toaster } from "react-hot-toast"
import { ThemeProvider } from "@material-tailwind/react"
import { Footer, Navbar } from "@/components"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <Toaster />
      {/*  */}
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default MainLayout
