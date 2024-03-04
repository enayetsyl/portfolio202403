// import {  } from '../assets'
import generating2 from '../assets/generating2.jpg'

const Generating = ({className}) => {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-n-6 rounded-[1.7rem] ${className || ""} text-base`}>
      <img
      className='w-8 h-8 mr-4 rounded-lg'
      src={generating2} alt='Loading'
      />
      Bringing Your Ideas to Life
    </div>
  )
}

export default Generating