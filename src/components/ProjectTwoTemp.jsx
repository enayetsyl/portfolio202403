import { PhotoChatMessage } from "./design/Services"
import easyTask from "../assets/easy-task.png";

const ProjectTwoTemp = () => {
  return (
    <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={easyTask}
                  width={630}
                  height={750}
                  alt="easy-task"
                  className="h-full w-full object-cover opacity-60"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15 font-grotesk tracking-wider ">
                <h4 className="h-4 mb-4">Easy Task</h4>
                <p className="body-2 mb-[3rem] text-n-1/80">
                Experience seamless task management with our full-stack React project, featuring intuitive drag-and-drop functionality for effortless to-do organization.
                </p>
              </div>
              <PhotoChatMessage />
            </div>
  )
}

export default ProjectTwoTemp