import React from "react";
import Header from "./components/Header";
// import ResumeButton from "./components/ResumeButton";
const AboutSection = ({id}) => {
  return (
    <div
      id={id}
      className="w-[100vw] h-[300vh] bg-black flex flex-col gap-10 justify-center items-center"
    >
         <Header
        as="h1"
        className="instrument-serif-regular text-[9rem]  leading-45 text-[#f8f1de]"
      >
        The hOOman <br /> Behind the Code
      </Header>
      <p className="text-[#f8f1de] text-5xl leading-16 instrument-serif-regular w-[57vw]">
      I'm a passionate Computer Science and Engineering student at MAIT College, deeply interested in both design and development. I enjoy transforming ideas into functional and delightful digital experiences, constantly striving to refine my skills. <br/><br/> I love crafting clean, intuitive designs — but what excites me even more is bringing those designs to life through thoughtful development. From pixels to performance, I aim to create solutions that are not just usable, but memorable.
      </p>
         {/* <div className="cv flex gap-5 items-center mt-20">
            <p className="font-semibold text-[20px] text-[#f8f1de]">Download CV</p>
            <div
              className="border border-dotted border-gray-50 p-5 rounded-full cursor-pointer"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1hBX85vX9Xa61N-9dNdOrrhXUDfwUP5p2/view"
                )
              }
            >
              <span>
                <svg
                  viewBox="0 0 16 16"
                  preserveAspectRatio="none"
                  width="16"
                  height="16"
                >
                  <defs>
                    <svg viewBox="0 0 16 16" id="svg-234516503_244">
                      <path
                        d="M8 11.7 4.3 8V6.3l3 3V1h1.4v8.3l3-3V8L8 11.7Z"
                        data-name="Layer_1"
                      ></path>
                      <path d="M2.4 13.9H1.2V11l1.2 1v1.9zm11.2 0h1.2V11l-1.2 1v1.9z"></path>
                      <path d="M14.8 13.7v1.2H1.2v-1.2z"></path>
                    </svg>
                  </defs>
                  <g>
                    <path
                      d="M8 11.7 4.3 8V6.3l3 3V1h1.4v8.3l3-3V8L8 11.7Z"
                      data-name="Layer_1"
                    ></path>
                    <path d="M2.4 13.9H1.2V11l1.2 1v1.9zm11.2 0h1.2V11l-1.2 1v1.9z"></path>
                    <path d="M14.8 13.7v1.2H1.2v-1.2z"></path>
                  </g>
                </svg>
              </span>
            </div>
          </div> */}
          <div className="cv flex gap-5 items-center mt-20">
          <p className="text-white text-xl">Check out my Resume</p>
        
          <button  onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1hBX85vX9Xa61N-9dNdOrrhXUDfwUP5p2/view"
              )
            } className="bg-orange-500 p-3 pl-10 pr-10 rounded-full text-white">View</button>
          </div>
            
      {/* <ResumeButton /> */}
    </div>
  );
};

export default AboutSection;
