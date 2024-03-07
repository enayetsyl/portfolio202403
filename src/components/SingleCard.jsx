import { check } from "../assets";
import { aboutMe } from "../constants";

const SingleCard = () => {
  return (
    // <div className="flex gap-[1rem] max-lg:flex-wrap">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {aboutMe.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-8 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{item.title}</h4>
          {/* <p className="body-2 min-h-[4rem] mb-3 text-n-1/50 ">{item.cdescription || item.mdescription || item.edescription}</p> */}

          {item.paragraph && (
            <p className="body-2 min-h-[4rem] mb-3 text-n-1/50 ">
              {item.paragraph}
            </p>
          )}

          {/* <div className="flex items-center h-[5.5rem] mb-6">
          {item.price && (
            <>
            <div className="h3">$</div>
            <div className="text-[5.5rem] leading-none font-bold">{item.price}</div>
            </>
            
          )}
        </div> */}
          {/* <Button className='w-full mb-6' href={item.price ? '/pricing' : 'mailto:enayetflweb@gmail.com'}
        white={!!item.price}
        >
          {item.price ? "Get started" : "Contact us"}
        </Button> */}

          {item.features && (
            <ul>
              {item.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start py-5 border-t border-n-4"
                >
                  <img src={check} alt="Check" width={24} height={24} />
                  <p className="body-2 ml-4">{feature}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default SingleCard;
