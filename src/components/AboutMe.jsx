import Section from './Section'
import { smallSphere, stars } from '../assets'
import Heading from './Heading'
import { LeftLine, RightLine } from './design/Pricing'
import SingleCard from './SingleCard'

const AboutMe = () => {
  return (
    <Section
    crosses
    id='about'
    className='overflow-hidden'
    >
      <div className='container relative z-2'>
        <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
          <img src={smallSphere} 
          className='relative z-1'
          width={255}
          height={255}
          alt="Spheres" />
        <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'> 
          <img src={stars}
          width={950}
          height={400}
          alt="Stars" />
        </div>
        </div>
        <Heading
        tag='Exploring My Story'
        title="About Md Enayetur Rahman"
        />
        <div className='relative'>
          <SingleCard/>
          <LeftLine/>
          <RightLine/>
        </div>
        <div className='flex justify-center mt-20'>
          <a className='text-lg font-grotesk font-semibold tracking-widest uppercase border-b '
          href='https://www.linkedin.com/in/md-enayetur-rahman/'
          target='_blank'
          >Explore my LinkedIn profile</a>
        </div>
      </div>
    </Section>
    
  )
}

export default AboutMe