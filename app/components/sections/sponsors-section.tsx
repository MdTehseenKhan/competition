import { sponsors } from "@/constants"

const Sponsors = () => {
  return (
    <section className="bg-gray-900">
      <div className="py-8 overflow-x-hidden">
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
            <div key={i + img} className="h-5 aspect-video">
              <img src={img} alt={"image" + i} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sponsors
