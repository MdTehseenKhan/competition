"use client"
import { useState } from "react"
import { Button, Input, Textarea } from "@material-tailwind/react"
import { toast } from "react-hot-toast"

const ContactForm = () => {
  const [contact, setContact] = useState(() => ({
    name: "",
    email: "",
    message: "",
  }))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setContact((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    fetch("/api/contact", {
      method: "PATCH",
      body: JSON.stringify({
        name: contact.name,
        email: contact.email,
        message: contact.message,
      }),
    })
      .then((res) => {
        setContact({ name: "", email: "", message: "" })
        toast.success("Successfully Sent!")
      })
      .catch((e) => {
        toast.error("Something went wrong!")
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-gray-900 text-lg mb-1 font-medium">Get in Touch</h2>

      <p className="leading-relaxed mb-5 text-gray-600">
        We work in diversified fields of technology and provide state of the art solutions to national and international
        industries
      </p>

      <div className="relative mb-4">
        <Input label="Name" name="name" required value={contact.name} onChange={handleChange} />
      </div>

      <div className="relative mb-4">
        <Input label="Email" name="email" required type="email" value={contact.email} onChange={handleChange} />
      </div>

      <div className="relative mb-4 space-y-4">
        <Textarea label="Message" name="message" value={contact.message} onChange={handleChange} />

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
