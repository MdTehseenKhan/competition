import { About, Banner, Faq, Sponsors, Team } from "@/sections"

export default async function Home() {
  return (
    <main>
      <Banner />

      <Sponsors />

      <About />

      <Team />

      <section>Events</section>

      <Faq />
    </main>
  )
}
