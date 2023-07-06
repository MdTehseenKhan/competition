import Image from "next/image"

import { ContactUs } from "@/sections"

export default function Contact() {
  return (
    <main>
      <div className="relative w-full h-96">
        <Image src="/images/contact.jpg" alt="Contact" fill className="object-cover object-top" />
      </div>

      <ContactUs />
    </main>
  )
}
