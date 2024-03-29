import { useLocation } from "react-router-dom";
import {useState} from 'react'
import { navigation } from "../constants";
import { HamburgerMenu } from "./design/Header";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();

    setOpenNavigation(false);
  };

  const url = 'https://md-enayetur-rahman-portfolio.vercel.app/cv.pdf'

  const downloadResume =(url) => {
    const aTag = document.createElement('a')
    aTag.href=url
    aTag.setAttribute('download','cv.pdf')

    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }



  return (
    <div
      className={` fixed  top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
     
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#hero" className="block w-[12rem] xl:mr-8">
          <svg
          className='flex 2xl:hidden'
            width="100px"
            height="50px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="160 25 180 100"
            style={{
              // background: "rgb(30 64 175)",
              borderLeft: "2px solid #50B8BD",
              borderRight: "2px solid #283C86",
              //  borderTop: '2px solid #50B8BD',
              //  borderBottom: '2px solid #50B8BD',
              borderRadius: "120px",
            }}
            preserveAspectRatio="xMidYMid"
          >
            <defs>
              <filter
                id="editing-neon"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feFlood floodColor="#50B8BD" result="flood" />
                <feComposite
                  operator="in"
                  in="flood"
                  in2="SourceAlpha"
                  result="color"
                />
                <feFlood floodColor="#50B8BD" result="flood2" />
                <feComposite
                  operator="in"
                  in="flood2"
                  in2="SourceAlpha"
                  result="color2"
                />
                <feMorphology
                  operator="dilate"
                  radius="2"
                  in="color"
                  result="dilate"
                />
                <feGaussianBlur stdDeviation="6" in="color" result="blur1" />
                <feGaussianBlur stdDeviation="2.5" in="color" result="blur2" />
                <feGaussianBlur
                  stdDeviation="1"
                  in="SourceAlpha"
                  result="blur3"
                />
                <feGaussianBlur stdDeviation="6" in="dilate" result="blur4" />
                <feConvolveMatrix
                  in="color2"
                  result="conv"
                  order="3,3"
                  divisor="1"
                  kernelMatrix="1 1 1  1 1 1  1 1 1"
                />
                <feMerge>
                  <feMergeNode in="blur1" />
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur4" />
                  <feMergeNode in="blur3" />
                  <feMergeNode in="blur3" />
                  <feMergeNode in="blur3" />
                  <feMergeNode in="blur3" />
                  <feMergeNode in="conv" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <g filter="url(#editing-neon)">
              <g transform="translate(211.66500687599182, 97.01499938964844)">
                <path
                  d="M28.42-9.86L28.42-9.86L28.42-9.86Q29.63-8.32 29.63-5.82L29.63-5.82L29.63-5.82Q29.63-2.37 27.07-0.54L27.07-0.54L27.07-0.54Q24.51 1.28 20.48 1.28L20.48 1.28L20.48 1.28Q18.18 1.28 14.66 0.77L14.66 0.77L14.66 0.77Q7.74-0.32 5.63-0.32L5.63-0.32L5.63-0.32Q3.52-0.32 2.69-0.22L2.69-0.22L2.69-0.22Q1.86-0.13 0.51 0L0.51 0L8.38-42.24L35.97-42.24L35.97-42.24Q35.97-38.34 34.08-36.29L34.08-36.29L34.08-36.29Q32.19-34.24 28.48-34.24L28.48-34.24L28.48-34.24Q24.77-34.24 20.99-35.97L20.99-35.97L19.01-24.77L30.40-24.77L30.40-24.77Q30.40-21.38 28.74-19.49L28.74-19.49L28.74-19.49Q27.07-17.60 24.29-17.60L24.29-17.60L24.29-17.60Q21.50-17.60 19.78-18.24L19.78-18.24L19.78-18.24Q18.05-18.88 17.86-19.07L17.86-19.07L15.55-6.98L15.55-6.98Q17.09-6.78 19.97-6.78L19.97-6.78L19.97-6.78Q24.90-6.78 28.42-9.86ZM48.64 0L34.94 0L42.75-42.05L42.75-42.05Q49.09-42.75 58.34-42.75L58.34-42.75L58.34-42.75Q67.58-42.75 71.87-40.06L71.87-40.06L71.87-40.06Q76.16-37.38 76.16-31.97L76.16-31.97L76.16-31.97Q76.16-26.56 73.38-23.17L73.38-23.17L73.38-23.17Q70.59-19.78 65.79-18.69L65.79-18.69L65.79-18.69Q66.88-13.38 69.38-9.09L69.38-9.09L69.38-9.09Q71.68-5.06 74.37-3.78L74.37-3.78L74.37-3.78Q73.41-1.09 71.46 0.10L71.46 0.10L71.46 0.10Q69.50 1.28 66.72 1.28L66.72 1.28L66.72 1.28Q63.94 1.28 61.76-0.35L61.76-0.35L61.76-0.35Q59.58-1.98 57.86-4.99L57.86-4.99L57.86-4.99Q54.21-11.52 53.82-21.82L53.82-21.82L54.27-21.82L54.27-21.82Q59.01-21.95 61.38-24.42L61.38-24.42L61.38-24.42Q63.74-26.88 63.74-32.06L63.74-32.06L63.74-32.06Q63.74-38.53 58.30-38.78L58.30-38.78L56.90-38.78L56.90-38.78Q56.32-38.78 56-38.72L56-38.72L48.64 0Z"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                />
              </g>
            </g>
            {/* <style>
        {`
          text {
            font-size: 80px;
            font-family: 'Kode Mono', monospace;
            dominant-baseline: central;
            text-anchor: middle;
            letter-spacing: -2rem;
          }
        `}
      </style> */}
          </svg>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row text-white">
            {navigation.map((item) => (
               <a
               onClick={handleClick}
               className={`block relative font-sans sm:text-xs md:text-2xl lg:text-xs xl:text-lg 2xl:text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                 item.onlyMobile ? "lg:hidden" : ""
               } px-6 py-6 md:my-8 lg:-mr-0.25  lg:font-semibold ${
                 item.url === pathname.hash
                   ? "z-2 lg:text-n-1"
                   : "lg:text-n-1/50"
               } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
               key={item.id}
               href={item.url}
             >
                {item.title}
              </a>
              
            ))}
          </div>
          <HamburgerMenu />
        </nav>
      

      
        <Button className="font-sans hidden lg:flex 2xl:text-2xl " 
        
        // href="#login"
        onClick={() => {downloadResume(url)}}
        >
         Resume
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
      
    </div>
  );
};

export default Header;
