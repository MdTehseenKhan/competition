import { Container, EventCard } from "@/components"
import { events } from "@/constants"

const AllEvents = () => {
  return (
    <section>
      <Container className="py-10">
        <div className="mb-10">
          <h1 className="sm:text-3xl text-2xl font-bold mb-2 text-gray-900">Ongoing Events</h1>
          <div className="h-1 w-20 bg-blue-500 rounded" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
          {events
            ?.filter((e) => e.type === "ongoing")
            ?.map((data, i) => (
              <EventCard key={i} data={data} />
            ))}
        </div>
      </Container>

      <Container className="py-10">
        <div className="mb-10">
          <h1 className="sm:text-3xl text-2xl font-bold mb-2 text-gray-900">Upcoming Events</h1>
          <div className="h-1 w-20 bg-blue-500 rounded" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
          {events
            ?.filter((e) => e.type === "upcoming")
            ?.map((data, i) => (
              <EventCard key={i} data={data} />
            ))}
        </div>
      </Container>

      <Container className="py-10">
        <div className="mb-10">
          <h1 className="sm:text-3xl text-2xl font-bold mb-2 text-gray-900">Past Events</h1>
          <div className="h-1 w-20 bg-blue-500 rounded" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
          {events
            ?.filter((e) => e.type === "past")
            ?.map((data, i) => (
              <EventCard key={i} data={data} />
            ))}
        </div>
      </Container>
    </section>
  )
}

export default AllEvents
