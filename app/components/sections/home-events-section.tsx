"use client"
import Link from "next/link"
import { Button } from "@material-tailwind/react"

import { Container, EventCard } from "@/components"
import { events } from "@/constants"

const HomeEvents = () => {
  return (
    <section>
      <Container className="py-10">
        <div className="mb-6">
          <h1 className="sm:text-3xl text-2xl font-bold mb-2 text-gray-900">Events</h1>
          <div className="h-1 w-20 bg-blue-500 rounded" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
          {events?.slice(0, 3)?.map((data, i) => (
            <EventCard key={i} data={data} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/events">
            <Button size="lg" className="bg-primary">
              Read More
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default HomeEvents
