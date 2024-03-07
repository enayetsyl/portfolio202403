import ButtonGradient from "./assets/svg/ButtonGradient";
import AboutMe from "./components/AboutMe";
import Blog from "./components/Blog";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MernProjects from "./components/MernProjects";
import OtherProjects from "./components/OtherProjects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className=" pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ">
        <Header />
        <Hero />
        <MernProjects />
        <Skills />
        <OtherProjects/>
        <Blog/>
        <AboutMe/>
        <Footer/>

        {/* <Button className="my-20 ml-20 text-base font-sans ">Resume</Button> */}

      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
