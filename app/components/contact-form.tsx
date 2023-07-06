"use client"
import { Button, Input, Textarea } from "@material-tailwind/react"

const ContactForm = () => {
  return (
    <form
      className="
        lg:w-1/3 
        md:w-1/2 
        flex 
        flex-col 
        md:ml-auto 
        w-full 
        md:py-8 
        mt-8 
        md:mt-0
      "
    >
      <h2 className="text-gray-900 text-lg mb-1 font-medium">Get in Touch</h2>

      <p className="leading-relaxed mb-5 text-gray-600">
        We work in diversified fields of technology and provide state of the art solutions to national and international
        industries
      </p>

      <div className="relative mb-4">
        <Input label="Name" name="name" required />
      </div>

      <div className="relative mb-4">
        <Input label="Email" name="email" required type="email" />
      </div>

      <div className="relative mb-4 space-y-4">
        <Textarea label="Message" name="message" />

        <Button type="submit" className="bg-primary w-full">
          Submit
        </Button>
        <p className="text-xs text-gray-500 mt-3">
          Share your thoughts with us, our team actively review your messages.
        </p>
      </div>
    </form>
  )
}

export default ContactForm