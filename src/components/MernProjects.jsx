import Heading from "./Heading";
import ProjectOneTemp from "./ProjectOneTemp";
import Section from "./Section";
import { Gradient } from "./design/Services";
import ProjectTwoTemp from "./ProjectTwoTemp";
import ProjectThreeTemp from "./ProjectThreeTemp";

const MernProjects = () => {
  return (
    <Section id="mern" 
    
    // crosses
    >
      <div className="container">
        <Heading
          title="MERN Reflections"
          text="Through my journey with the MERN stack, I've humbly honed my skills in crafting dynamic and efficient web solutions. With each project, I embrace the opportunity to learn and grow, striving to create meaningful experiences for users. My dedication to mastering the MERN stack drives me to constantly improve and innovate in the ever-evolving world of web development."
        />
        <div className="relative">
          <ProjectOneTemp />

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <ProjectTwoTemp />
            <ProjectThreeTemp />
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default MernProjects;
