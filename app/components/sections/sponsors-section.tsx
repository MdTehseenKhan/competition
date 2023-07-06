import { sponsors } from "@/constants"
import { Container } from "@/components"
import Image from "next/image"

const Sponsors = () => {
  return (
    <section className="bg-gray-900">
      <div className="py-5 overflow-x-hidden">
        <div
          className="
          relative 
          flex 
          gap-16
          items-center 
          animate-scroll
        "
        >
          {sponsors?.map((img, i) => (
            <div key={i + img} className="relative w-36 aspect-video">
              <Image src={img} alt={"image" + i} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sponsors
