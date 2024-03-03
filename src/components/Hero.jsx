import { useRef } from "react";
import Section from "./Section";
import { curve } from "../assets";

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
          Empower Your Team with Top-tier Talent in Software Development. Let&apos;s Connect and Elevate Your Projects Together!
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
