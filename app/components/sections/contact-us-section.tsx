import { ContactForm, Container } from "@/components"
import { contactDetails } from "@/constants"

const ContactUs = () => {
  const { mapLink, address, email, phone } = contactDetails
  return (
    <section className="text-gray-600">
      <Container className="py-20 flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0 opacity-50"
            title="map"
            loading="lazy"
            src={mapLink}
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">{address}</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0 space-y-4">
              <h2 className="font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a href={email} className="text-blue-500 leading-relaxed">
                {email}
              </a>

              <h2 className="font-semibold text-gray-900 tracking-widest text-xs">PHONE</h2>
              <a href={"tel:" + phone} className="leading-relaxed">
                {phone}
              </a>
            </div>
          </div>
        </div>

        <div
          className="
            lg:w-1/3 
            md:w-1/2 
            flex 
            flex-col 
            md:ml-auto 
            w-full 
            md:py-8 
            mt-8 
            md:mt-0
          "
        >
          <ContactForm />
        </div>
      </Container>
    </section>
  )
}

export default ContactUs
