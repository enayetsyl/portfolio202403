import { notification1 } from "../assets"
import next1 from '../assets/notification/next1.jpg'
import next2 from '../assets/notification/next2.jpg'
import next5 from '../assets/notification/next5.jpg'
import next3 from '../assets/notification/next3.png'
// import next4 from '../assets/notification/next4.png'
import { notificationImages } from "../constants"

const Notification = ({className, title}) => {
  return (
    <div className={`${className || ''} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}> 
    <img
    src={next2}
    width={62}
    height={62}
    className="rounded-lg"
    alt="image"
    />
    <div className="flex-1">
      <h6 className="mb-1 font-semibold text-base">{title} </h6>
      <div className="flex items-center justify-center">
        <ul className="flex -m-0.5">
          {notificationImages.map((item, index) => (
            <li key={index} className="flex w-8 h-8 -ml-2 border-2 border-n-12 rounded-full overflow-hidden">
              <img
              src={item}
              className="w-full"
              width={30}
              height={30}
              alt="item"
              />
            </li>
          ))}
        </ul>
        {/* <div className="body-2 text-n-13 ">1m ago</div> */}
      </div>
    </div>
    </div>
  )
}

export default Notification