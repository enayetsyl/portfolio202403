import { useRef } from "react";
import Section from "./Section";
import { curve } from "../assets";
import hero from '../assets/hero.jpg'
import Button from "./Button";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "../constants";
import Notification from "./Notification";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import Generating from "./Generating";
import CompanyLogo from "./CompanyLogo";

const Hero = () => {
  const parallaxRef = useRef();
  return (
    <Section className="pt-[12rem] -mt-[5.25rem]" customPaddings id="hero">
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="parent h1 mb-12">
            <span className="one">Talent in Tech: </span> 
            {/* <span className="two">in</span>{" "}
            <span className="three">Tech:</span>{" "} */}
            <span className="four">Your Next Team</span>{" "}
            {/* <span className="five">Next</span> <span className="six">Team</span> */}
            <span className="inline-block relative ">
              <span className="seven">Member</span>
              <img
                src={curve}
                alt="Curve"
                className="eight absolute top-full left-0 w-full xl-mt-2"
              />
            </span>
          </h1>
          <p className="h6 max-w-3xl mx-auto mb-6 text-n-1 lg:mb-8">
          Empower Your Team with Top-tier Talent in Web Development. Let&apos;s Connect and Elevate Your Projects Together!
          </p>
          <Button href='#mern' white>Explore My MERN Projects</Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={hero}
                  className="w-full scale-[1.9] translate-y-[8%] md:scale-[1.6] md:-translate-y-[10%] lg:-translate-y-[22%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                <Generating 
                className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" 
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9 backdrop-blur-0 border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Next.js Journey"
                  />
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[13.6%] left-1/2 w-[188%] -translate-x-1/2 md:-top-[30%] md:w-[160%] lg:w-[157%] lg:-top-[60%]">
            <img
              src={hero}
              className="w-full opacity-20"
              height={1800}
              width={1440}
              alt="hero"
            />
          </div>
          <BackgroundCircles />
        </div>
        <CompanyLogo className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
