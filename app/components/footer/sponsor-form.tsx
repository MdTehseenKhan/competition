"use client"
import { Button, Input } from "@material-tailwind/react"
import { useState } from "react"
import { toast } from "react-hot-toast"

const SponsorForm = () => {
  const [email, setEmail] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    fetch("/api/become-sponsor", {
      method: "post",
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => {
        // console.log(res)
        if (res.status === 422) return toast.error("Email Already Exists!")

        toast.success("Request Submitted Successfully!")
        setEmail("")
      })
      .catch((e) => {
        toast.error((e as Error).message)
      })
  }

  return (
    <>
      <h2 className="font-medium text-gray-900 tracking-widest text-sm mb-5">BECOME A SPONSOR</h2>

      <form onSubmit={handleSubmit} id="become-sponsor">
        <div className="w-full md:w-72 flex flex-col justify-center gap-3">
          <Input label="Email" type="email" name="email" required value={email} onChange={handleChange} />

          <Button type="submit" className="bg-primary w-full md:w-auto">
            Join
          </Button>
        </div>
      </form>
    </>
  )
}

export default SponsorForm
