"use client"
import Image from "next/image"
import { Carousel } from "@material-tailwind/react"

import { events } from "@/constants"
import { Container } from "@/components"

const EventHeader = () => {
  return (
    <section>
      <Container className="pb-10">
        <Carousel className="h-[450px]" autoplay loop>
          {events
            ?.filter((e) => e.type === "upcoming")
            .slice(0, 5)
            ?.map(({ image, name }, i) => (
              <div
                key={i + name}
                className="
              relative 
              h-full 
              w-full
            "
              >
                <Image src={image} alt={name} fill className="object-cover" />
              </div>
            ))}
        </Carousel>
      </Container>
    </section>
  )
}

export default EventHeader
