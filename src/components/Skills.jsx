import {  check } from "../assets";
import { collabApps, collabContent,  innerCollabApps,  techParagraph } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Skills = () => {
  return (
    <Section id="skills" crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8 font-grotesk tracking-wider">
            My Ethos
          </h2>

          <ul className="max-w-[22rem] mb-10 lg:mb-60">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} alt="check" width={24} height={24} />
                  <h6 className="h6 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-1">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button className="font-sans text-lg">Tech Used</Button>
        </div>

        <div className="mt-4 lg:ml-auto xl:w-[38rem]">
          <p className="body-2 my-10 text-n-1 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto ">
            {techParagraph}
          </p>
          <div className="relative left-1/2 flex w-[24rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full ">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <svg
                    width="100px"
                    height="100px"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="160 25 180 100"
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
                        <feGaussianBlur
                          stdDeviation="6"
                          in="color"
                          result="blur1"
                        />
                        <feGaussianBlur
                          stdDeviation="2.5"
                          in="color"
                          result="blur2"
                        />
                        <feGaussianBlur
                          stdDeviation="1"
                          in="SourceAlpha"
                          result="blur3"
                        />
                        <feGaussianBlur
                          stdDeviation="6"
                          in="dilate"
                          result="blur4"
                        />
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
                  </svg>
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 40
                  }
                `}
                  key={app.id}
                >
                  <div
                    className={`relative -top-[1.6rem] w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 40
                    } flex items-center`}
                  >
                    <img
                      src={app.icon}
                      alt={app.title}
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <ul>
              {innerCollabApps.map((app, index) => (
                <li
                  className={`absolute top-[5.8rem] left-1/2 h-24 -ml-[1.4rem] origin-bottom rotate-${
                    (index * 40) + 20
                  }
                `}
                  key={app.id}
                >
                  <div
                    className={`relative -top-[2.6rem] w-[3rem] h-[3rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      (index * 40) + 20
                    } flex items-center`}
                  >
                    <img
                      src={app.icon}
                      alt={app.title}
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
