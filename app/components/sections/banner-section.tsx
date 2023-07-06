"use client"
import Image from "next/image"
import Link from "next/link"

import { Button, Carousel } from "@material-tailwind/react"
import { carousel } from "@/constants"

const Banner = () => {
  return (
    <section>
      <Carousel className="h-[600px]" autoplay loop>
        {carousel?.map(({ image, title, description, link }, i) => (
          <div
            key={i + title}
            className="
              relative 
              h-full 
              w-full
            "
          >
            <Image src={image} alt={title} fill className="object-cover" />

            <div
              className="
                absolute 
                inset-0 
                grid 
                h-full 
                w-full 
                place-items-center 
                bg-black/75
              "
            >
              <div className="w-3/4 text-center text-white md:w-1/2">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">{title}</h2>

                <p className="mb-12 opacity-80 text-sm">{description}</p>

                <div className="flex flex-wrap justify-center gap-2">
                  <a href="#become-sponsor">
                    <Button size="lg" color="white">
                      Become a Sponsor
                    </Button>
                  </a>

                  <Link href={link}>
                    <Button size="lg" color="white" variant="text">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default Banner
