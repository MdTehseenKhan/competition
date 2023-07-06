import { EventProps } from "@/app/constants/events"
import Image from "next/image"

const EventCard = ({ data }: { data: EventProps }) => {
  const { image, name, date, venue, description } = data

  return (
    <div className="flip-card text-gray-600 w-full h-96">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="relative w-full aspect-video">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <div className="p-5">
            <h1 className="text-2xl mb-5 font-bold tracking-tighter text-gray-900">{name}</h1>
            <h3 className="text-sm mb-2">
              DATE: <span>{date}</span>
            </h3>
            <h3 className="text-sm ">
              VENUE: <span>{venue}</span>
            </h3>
          </div>
        </div>
        <div className="flip-card-back p-5 grid place-items-center">
          <p className="text-white">
            <h2 className="font-bold mb-3 text-2xl">Description:</h2>
            <p className="text-sm">{description}</p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default EventCard
