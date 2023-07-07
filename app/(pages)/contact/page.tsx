import Image from "next/image"

import { ContactUs } from "@/sections"

export default function Contact() {
  return (
    <main>
      <div className="relative w-full h-96 lg:h-[500px]">
        <Image src="/images/contact.jpg" alt="Contact" fill className="object-cover object-center" />
      </div>

      <ContactUs />
    </main>
  )
}
