import { VideoBar, VideoChatMessage } from "./design/Services"
import fandfchat from "../assets/fandfchat.png";
import { brainwaveServicesIcons } from "../constants";

const ProjectThreeTemp = () => {
  return (
    
    <div className="p-4 bgn7 rounded-3xl overflow-hidden lg:min-h-[46rem] font-code">
    <div className="py-12 px-4 xl:px-8">
      <h4 className="text-2xl  mb-4">FandFChat</h4>
      <p className="body-2 mb-[2rem] text-n-2">
      Elevate your communication experience with our full-stack chat app, seamlessly connecting users in real-time across all devices.
      </p>
      <ul className="flex items-center justify-between">
        {brainwaveServicesIcons.map((item, index) => (
          <li
            key={index}
            className={`flex items-center justify-center rounded-2xl ${
              index === 2
                ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient  md:w-[4.5rem] md:h-[4.5rem] md:p-0.5"
                : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
            }`}
          >
            <div
              className={
                index === 2
                  ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                  : ""
              }
            >
              <img src={item} alt="icon" width={24} height={24} />
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div className="relative h-[20rem] bgn8 rounded-xl overflow-hidden md:h-[25rem]">
      <img
        src={fandfchat}
        className="w-full h-full object-cover opacity-60"
        width={520}
        height={400}
        alt="fandfchat"
      />

      <VideoChatMessage />
      <VideoBar />
    </div>
  </div>
  )
}

export default ProjectThreeTemp