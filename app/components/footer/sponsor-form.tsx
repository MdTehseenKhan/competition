"use client"
import { postSponsorData } from "@/actions"
import { Button, Input } from "@material-tailwind/react"

const SponsorForm = () => {
  return (
    <>
      <h2 className="font-medium text-gray-900 tracking-widest text-sm mb-5">BECOME A SPONSOR</h2>

      <form action={postSponsorData} id="become-sponsor">
        <div className="w-full md:w-72 flex flex-col justify-center gap-3">
          <Input label="Email" type="email" name="email" required className="" />

          <Button type="submit" className="bg-primary w-full md:w-auto">
            Join
          </Button>
        </div>
      </form>
    </>
  )
}

export default SponsorForm
