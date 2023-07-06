import { AboutList } from "@/sections"

export default function About() {
  return (
    <main>
      <>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="/images/about/hero.jpg"
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl  mb-4 font-bold text-gray-900">About Us</h1>
              <p className="mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique distinctio ipsam, quae modi maxime a
                placeat soluta at quisquam totam molestias praesentium. Magni dignissimos doloremque saepe est, ipsum
                sequi repellendus.
              </p>
            </div>
          </div>
        </section>

        <hr className="w-11/12 mx-auto" />

        <AboutList />

        <hr className="w-11/12 mx-auto" />

        <section className="text-gray-600 body-font" id="team">
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Our Team</h1>
                <div className="h-1 w-20 bg-blue-500 rounded" />
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum recusandae, aut repellendus odio
                perferendis aspernatur. Nulla, veniam id ex esse vel illum architecto, assumenda numquam sapiente sint
                quas ipsum suscipit.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="/images/about/team1.jpg"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-bold text-lg text-gray-900">Holden Caulfield</h2>
                    <h3 className="text-gray-500 mb-3">UI Developer</h3>
                    <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="/images/about/team2.jpg"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-bold text-lg text-gray-900">Alper Kamu</h2>
                    <h3 className="text-gray-500 mb-3">Designer</h3>
                    <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="/images/about/team3.jpg"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-bold text-lg text-gray-900">Atticus Finch</h2>
                    <h3 className="text-gray-500 mb-3">UI Developer</h3>
                    <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src="/images/about/team4.jpg"
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-bold text-lg text-gray-900">Henry Letham</h2>
                    <h3 className="text-gray-500 mb-3">Designer</h3>
                    <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="w-11/12 mx-auto" />
        <section className="text-gray-600 body-font" id="ongoing">
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Ongoing Development</h1>
                <div className="h-1 w-20 bg-blue-500 rounded" />
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum recusandae, aut repellendus odio
                perferendis aspernatur. Nulla, veniam id ex esse vel illum architecto, assumenda numquam sapiente sint
                quas ipsum suscipit.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/about/ongoing1.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-bold title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-4">Chichen Itza</h2>
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti veritatis expedita.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/about/ongoing2.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-bold title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-4">Colosseum Roma</h2>
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti veritatis expedita.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/about/ongoing3.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-bold title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-4">Great Pyramid of Giza</h2>
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti veritatis expedita.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/about/ongoing4.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-bold title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-4">San Francisco</h2>
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti veritatis expedita.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="w-11/12 mx-auto" />
        <section className="text-gray-600 body-font" id="past">
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Past Products</h1>
                <div className="h-1 w-20 bg-blue-500 rounded" />
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum recusandae, aut repellendus odio
                perferendis aspernatur. Nulla, veniam id ex esse vel illum architecto, assumenda numquam sapiente sint
                quas ipsum suscipit.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/about/past1.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-bold title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-4">Chichen Itza</h2>
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti veritatis expedita.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/about/past2.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-bold title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-4">Colosseum Roma</h2>
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti veritatis expedita.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/about/past3.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-bold title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-4">Great Pyramid of Giza</h2>
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti veritatis expedita.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/about/past4.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-bold title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-4">San Francisco</h2>
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti veritatis expedita.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="w-11/12 mx-auto" />
        <section className="text-gray-600 body-font" id="past">
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">Field of Application</h1>
                <div className="h-1 w-20 bg-blue-500 rounded" />
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum recusandae, aut repellendus odio
                perferendis aspernatur. Nulla, veniam id ex esse vel illum architecto, assumenda numquam sapiente sint
                quas ipsum suscipit.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/services/service1.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-bold title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-4">Artificial Intelligence</h2>
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti veritatis expedita.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/services/service2.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-bold title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-4">IoT (Internet of Things)</h2>
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti veritatis expedita.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/services/service3.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-bold title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-4">Machine Learning</h2>
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti veritatis expedita.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/services/service4.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-bold title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-4">PCB Programming</h2>
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti veritatis expedita.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/services/service5.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-bold title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-4">Embedded Systems</h2>
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti veritatis expedita.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/services/service6.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-bold title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-4">Product Design</h2>
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti veritatis expedita.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/services/service7.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-bold title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-4">Web Development</h2>
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti veritatis expedita.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src="/images/services/service8.jpg"
                    alt="content"
                  />
                  <h3 className="tracking-widest text-blue-500 text-xs font-bold title-font">SUBTITLE</h3>
                  <h2 className="text-lg text-gray-900 font-bold title-font mb-4">Desktop &amp; Mobile Apps</h2>
                  <p className="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deleniti veritatis expedita.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="w-11/12 mx-auto" />
        <section className="text-gray-600 body-font" id="history">
          <div className="container px-5 py-20 mx-auto">
            <div className="flex flex-wrap w-full mb-20">
              <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">History</h1>
                <div className="h-1 w-20 bg-blue-500 rounded" />
              </div>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum recusandae, aut repellendus odio
                perferendis aspernatur. Nulla, veniam id ex esse vel illum architecto, assumenda numquam sapiente sint
                quas ipsum suscipit.
              </p>
            </div>
            <p className="w-full leading-relaxed text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt reprehenderit deserunt aperiam soluta
              nesciunt at fugit libero. Possimus, enim! Molestias maxime nemo qui ratione aperiam repellendus mollitia
              tempore sed accusamus. Repellat quidem omnis laudantium consequuntur non nisi ducimus, amet doloribus
              molestias nobis eius natus, labore repellendus reiciendis. Officiis architecto dignissimos ducimus maxime
              nisi provident aspernatur quia quas consequuntur, sequi culpa? Suscipit ad voluptatibus quibusdam esse,
              perspiciatis magnam sequi qui autem vel ullam unde aliquam alias nemo tempore incidunt velit quis delectus
              quam, eaque aliquid iusto possimus. Illo dolores perspiciatis voluptates! Possimus, maxime dolores! Ullam
              atque odio totam eos aliquam aspernatur temporibus accusantium magnam similique distinctio velit rem
              blanditiis, debitis excepturi nulla corrupti laudantium neque deleniti facilis. Nesciunt saepe rerum iure.
              Quasi odit minima quo officiis facere velit non aliquid voluptatem. Blanditiis hic laborum ut, magnam
              optio impedit praesentium eveniet in officia, veniam quod asperiores magni corporis incidunt culpa et
              alias!
            </p>
          </div>
        </section>
      </>
    </main>
  )
}
