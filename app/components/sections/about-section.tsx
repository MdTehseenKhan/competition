"use client"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@material-tailwind/react"

import { Container } from "@/components"
import { AboutList } from "@/sections"

const About = () => {
  return (
    <section className="text-gray-600">
      <Container className=" flex flex-col md:flex-row md:items-center py-20 gap-10">
        <div className="md:w-1/2">
          <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-gray-900">About Us</h1>
          <p className="mb-8 leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique distinctio ipsam, quae modi maxime a
            placeat soluta at quisquam totam molestias praesentium. Magni dignissimos doloremque saepe est, ipsum sequi
            repellendus...
          </p>
          <Link href="/about">
            <Button size="lg" className="bg-primary">
              Read More
            </Button>
          </Link>
        </div>

        <div className="relative md:w-1/2 aspect-video">
          <Image className="object-cover rounded-lg shadow-md" src="/images/about/hero.jpg" alt="hero" fill />
        </div>
      </Container>

      <hr className="w-11/12 mx-auto" />

      <AboutList />

      <hr className="w-11/12 mx-auto" />
    </section>
  )
}

export default About
