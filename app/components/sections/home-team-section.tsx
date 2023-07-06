"use client"
import Image from "next/image"

import { team } from "@/constants"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

const Team = () => {
  return (
    <div
      className="
        pl-10 
        md:pl-20 
        py-20
      "
    >
      <div className="mb-6">
        <h1 className="sm:text-3xl text-2xl font-bold mb-2 text-gray-900">Our Team</h1>
        <div className="h-1 w-20 bg-blue-500 rounded" />
      </div>

      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          },
          540: {
            slidesPerView: 2.3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.3,
            spaceBetween: 40,
          },
        }}
        grabCursor
      >
        {team?.map(({ image, name, designation }, i) => (
          <SwiperSlide key={name + i}>
            <div className="rounded-lg overflow-hidden">
              <div className="relative w-full h-56 bg-gray-200">
                <Image src={image} alt={name} fill className="object-contain" />
              </div>

              <div className="text-base lg:text-lg text-gray-900 p-5">
                {name}
                <p className="text-gray-600 text-sm">{designation}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Team
