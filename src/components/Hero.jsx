import { useRef } from "react"
import Section from "./Section"
import { curve } from "../assets"

const Hero = () => {
  const parallaxRef = useRef()
  return (
    <Section className='pt-[12rem] -mt-[5.25rem]'
    customPaddings    
    id='hero'
    >
      <div
      className="container relative"
      ref={parallaxRef}
      >
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">Talent in Tech: Your Next Team 
          <span className="inline-block relative">
          Member
          <img src={curve} alt="Curve"
          className="absolute top-full left-0 w-full xl-mt-2"
          />
          </span>
          </h1>
        </div>
      </div>
    </Section>
  )
}

export default Hero