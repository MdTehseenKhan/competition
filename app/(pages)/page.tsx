import { About, Banner, Events, Faq, Sponsors, Team } from "@/sections"

export default async function Home() {
  return (
    <main>
      <Banner />

      <Sponsors />

      <About />

      <Team />

      <Events />

      <Faq />
    </main>
  )
}
