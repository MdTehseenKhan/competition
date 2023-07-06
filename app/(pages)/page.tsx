import { About, Banner, Faq } from "@/sections"

export default async function Home() {
  return (
    <main>
      <Banner />

      <About />

      <section>Events</section>

      <Faq />
    </main>
  )
}
