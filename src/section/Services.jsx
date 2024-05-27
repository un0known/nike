import { services } from "../constants"
import ServiceCard from "../componant/ServiceCard"

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap
    gap-9 ">

      {services.map( (chaii) => (
        <ServiceCard key={chaii.label} {...chaii} />
      ))}

    </section>
  )
}

export default Services