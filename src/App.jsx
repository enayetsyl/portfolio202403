import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MernProjects from "./components/MernProjects";

function App() {
  return (
    <>
      <div className=" pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden ">
        
          <Header />
        <Hero/>
        <MernProjects/>
        <Button className="my-20 ml-20 text-base font-sans ">Resume</Button>
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
