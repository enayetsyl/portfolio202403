import { check } from "../assets";
import meetready from "../assets/meetready.png";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";

const ProjectOneTemp = () => {
  return (
    <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
      <img
        src={meetready}
        alt="meetready"
        width={800}
        height={730}
        className="w-full h-full object-cover md:object-right opacity-35"
      />
    </div>
    
    <div className="relative z-1 max-w-[17rem] ml-auto bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border text-n-1 border-gray-100 p-5 sm:bg-transparent sm:rounded-none  sm:backdrop-filter-none sm:backdrop-blur-none sm:bg-opacity-100 sm:border-0  sm:text-black sm:p-0">
      <h4 className="h4 mb-4 md:text-n-1">Meet Ready</h4>
      <p className="body-2 mb-[3rem] md:text-n-3">
        Full Stack Next Js project. A comprehensive solution for hosting online meetings and showcase employee resumes effortlessly. 
      </p>
      <ul className="body-2 z-3  md:text-n-1">
        {brainwaveServices.map((item, index) => (
          <li
            className="flex items-start py-4 border-t border-n-6"
            key={index}
          >
            <img width={24} height={24} src={check} alt="" />
            <a href={item.link} target="_blank" className="cursor-pointer">
            <p className="ml-4 font-bold underline">{item.name}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
    {/* <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2"
    /> */}
  </div>
  )
}

export default ProjectOneTemp