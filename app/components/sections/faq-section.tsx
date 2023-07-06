"use client"
import { useState } from "react"
import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react"

import { Container } from "@/components"
import { accordions } from "@/constants"

const Faq = () => {
  const [open, setOpen] = useState(0)

  const handleOpen = (id: number) => {
    setOpen(open === id ? 0 : id)
  }
  return (
    <section className="bg-white">
      <Container
        className="
          py-10 
          flex 
          flex-col 
          items-center
        "
      >
        {accordions?.map(({ title, description }, id) => (
          <Accordion
            //
            key={id + title}
            open={open === id + 1}
            icon={<Icon isOpen={open === id + 1} />}
            className="max-w-3xl group"
          >
            <AccordionHeader onClick={() => handleOpen(id + 1)}>{title}</AccordionHeader>
            <AccordionBody>{description}</AccordionBody>
          </Accordion>
        ))}
      </Container>
    </section>
  )
}

function Icon({ isOpen }: { isOpen?: boolean }) {
  return (
    <div className="relative w-5 h-5">
      <i
        className={`
          absolute 
          left-0 
          top-1/2 
          -translate-y-1/2 
          w-5 
          h-0.5 
          bg-blue-gray-700 
          group-hover:bg-blue-gray-900
          transition
          ${isOpen && "rotate-180 bg-blue-gray-900"}
        `}
      ></i>
      <i
        className={`
          absolute 
          top-0 
          left-1/2 
          -translate-x-1/2 
          h-5 
          w-0.5 
          bg-blue-gray-700 
          group-hover:bg-blue-gray-900
          transition
          ${isOpen && "rotate-90 bg-blue-gray-900"}
        `}
      ></i>
    </div>
  )
}

export default Faq
