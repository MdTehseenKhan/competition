import { About, Banner, Faq } from "@/sections"

export default async function Home() {
  return (
    <main className="bg-red-500">
      <Banner />

      <About />

      <section>Events</section>

      <Faq />
    </main>
  )
}
