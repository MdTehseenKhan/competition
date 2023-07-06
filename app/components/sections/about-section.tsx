"use client"
import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components"
import { Button } from "@material-tailwind/react"

const About = () => {
  return (
    <section className="text-gray-600">
      <Container className=" flex flex-col md:flex-row md:items-center py-10 gap-10">
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

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
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
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-bold mb-2">Our Team</h2>
              <p className="leading-relaxed text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quis animi minima fugit eos non
                reprehenderit sequi cupiditate placeat saepe similique nisi repudiandae repellendus culpa obcaecati
                numquam, blanditiis odit. Tempore!
              </p>
              <Link className="mt-3 text-blue-500 inline-flex items-center" href="/about#team">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-bold mb-2">Ongoing Development</h2>
              <p className="leading-relaxed text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, consequuntur, corporis distinctio
                voluptates quisquam iste labore quae voluptatem dolorem veritatis modi necessitatibus voluptate tempora
                accusantium tempore at facere architecto eos?
              </p>
              <Link className="mt-3 text-blue-500 inline-flex items-center" href="/about#ongoing">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
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
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
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
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-bold mb-2">Past Products</h2>
              <p className="leading-relaxed text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, sit quas. Placeat culpa amet totam
                quod. A veniam, quis, praesentium, aut quasi placeat corrupti nesciunt qui tenetur reiciendis quae!
                Nemo.
              </p>
              <Link className="mt-3 text-blue-500 inline-flex items-center" href="/about#past">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto mb-10 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-bold mb-2">History</h2>
              <p className="leading-relaxed text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum magni, alias nulla exercitationem autem
                unde minus? Perferendis, ipsam! Rem praesentium odit dicta odio porro, repudiandae fuga? Error dolorum
                ut facilis.
              </p>
              <Link className="mt-3 text-blue-500 inline-flex items-center" href="/about#history">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
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
            </div>
          </div>
        </div>
      </section>

      <hr className="w-11/12 mx-auto" />
    </section>
  )
}

export default About
