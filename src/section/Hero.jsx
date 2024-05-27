import { arrowRight } from "../assets/icons"
import { useState } from "react"
import { bigShoe1 } from "../assets/images"
import Button from "../componant/Button"
import { shoes, statistics } from "../constants"
import ShoeCard from "../componant/ShoeCard"


const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)



  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen
    gap-10 max-container">

      <div className="relative xl:w-2/5 flex flex-col justify-center
      items-start w-full max-xl:padding-x pt-28">

        <p className="text-xl font-montserrat text-coral-red">Our Summer Collectoion</p>
        <h1 className="mt-10 font-planquin text-8xl max-sm:text-[70]: max-sm:leading-[80px]
        font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10
          pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block 
          mt-3">Nike
          </span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8
         mt-6 mb-10 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort,
          and innovation for your active life.
        </p>
        < Button label='shop Now'
          iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20
         gap-20">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray ">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center
      xl:min-h-screen mx-xl:py-40 bg-primary bg-hero bg-cover">
        <img
        src={bigShoeImg} alt="shoe colletion"
        width={610}
        height={500}
        className="relative h-auto max-w-full z-1" />

        <div className="flex sm:gap-6 gap-4
        absolute -bottom-[5%] sm:left-[10%]
        max-sm:px-6">
          {shoes.map((shoe)=>(
            <div key={shoe}>
              <ShoeCard 
              imgURL={shoe}
              changeBigShoeImage =
              { (shoe) => setbigShoeImg(shoe) }
              bigShoeImg= {bigShoeImg}
              />
            </div>
          ))}
        </div>

      </div>


    </section>
  )
}

export default Hero