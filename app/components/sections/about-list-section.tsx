import Link from "next/link"
import { Container } from "@/components"

const AboutList = () => {
  const circle =
    "sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0"

  const icons = {
    user: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="sm:w-16 sm:h-16 w-10 h-10"
        viewBox="0 0 24 24"
      >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx={12} cy={7} r={4} />
      </svg>
    ),
    stats: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="sm:w-16 sm:h-16 w-10 h-10"
        viewBox="0 0 24 24"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    scissor: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="sm:w-16 sm:h-16 w-10 h-10"
        viewBox="0 0 24 24"
      >
        <circle cx={6} cy={6} r={3} />
        <circle cx={6} cy={18} r={3} />
        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
      </svg>
    ),
  }

  return (
    <section>
      <Container className="py-20 text-gray-600">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className={circle}>{icons.user}</div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-bold mb-2">Our Team</h2>
            <p className="leading-relaxed text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quis animi minima fugit eos non
              reprehenderit sequi cupiditate placeat saepe similique nisi repudiandae repellendus culpa obcaecati
              numquam, blanditiis odit. Tempore!
            </p>
            <Link className="mt-3 text-blue-500 inline-flex items-center" href="/about#team">
              Learn More &#10140;
            </Link>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 order-2 md:order-first">
            <h2 className="text-gray-900 text-lg title-font font-bold mb-2">Ongoing Development</h2>
            <p className="leading-relaxed text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, consequuntur, corporis distinctio
              voluptates quisquam iste labore quae voluptatem dolorem veritatis modi necessitatibus voluptate tempora
              accusantium tempore at facere architecto eos?
            </p>
            <Link className="mt-3 text-blue-500 inline-flex items-center" href="/about#ongoing">
              Learn More &#10140;
            </Link>
          </div>
          <div className={circle}>{icons.stats}</div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
            {icons.scissor}
          </div>

          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-bold mb-2">Past Products</h2>
            <p className="leading-relaxed text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, sit quas. Placeat culpa amet totam
              quod. A veniam, quis, praesentium, aut quasi placeat corrupti nesciunt qui tenetur reiciendis quae! Nemo.
            </p>
            <Link className="mt-3 text-blue-500 inline-flex items-center" href="/about#past">
              Learn More &#10140;
            </Link>
          </div>
        </div>

        <div className="flex items-center lg:w-3/5 mx-auto mb-10 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 order-2 md:order-first">
            <h2 className="text-gray-900 text-lg title-font font-bold mb-2">History</h2>
            <p className="leading-relaxed text-base">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum magni, alias nulla exercitationem autem
              unde minus? Perferendis, ipsam! Rem praesentium odit dicta odio porro, repudiandae fuga? Error dolorum ut
              facilis.
            </p>
            <Link className="mt-3 text-blue-500 inline-flex items-center" href="/about#history">
              Learn More &#10140;
            </Link>
          </div>
          <div className={circle}>{icons.user}</div>
        </div>
      </Container>
    </section>
  )
}

export default AboutList
