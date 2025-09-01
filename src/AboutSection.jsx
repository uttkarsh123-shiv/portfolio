import React from "react";
import Header from "./components/Header";
// import ResumeButton from "./components/ResumeButton";
const AboutSection = ({ id }) => {
  return (
    <>
      <div
        id={id}
        className="sm:mx-10 h-[380px] sm:h-[95vh]  md:flex gap-6 sm:gap-10 md:gap-20 md:p-20 pt-33 md:pt-60 pl-6 md:pl-28 pr-7 md:pr-20 "
      >
        <Header as="h1" className="text-[20px] md:text-[20px] w-[35vw] pb-5 sm:pb-0">
          {"{ About Me }"}
        </Header>
        <p className="text-[14px] md:text-[32px] tracking-normal text-justify">
          I am a passionate Computer Science student at MAIT, driven by a love
          for design and development. I enjoy turning ideas into seamless
          digital experiences and continuously honing my skills. <br />
          <br />I love crafting clean, intuitive designs but what excites me
          even more is bringing those designs to life through thoughtful
          development. From pixels to performance, I aim to create solutions
          that are not just usable, but memorable.
        </p>
        
      </div>
       <div className="button-grp gap-3 flex mx-5 sm:mx-100">
          <button
            className="border  text-white  bg-black  pl-4 md:pl-6 pr-4 md:pr-6 p-2 md:p-3 rounded-full cursor-pointer text-[9px] md:text-[20px]"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1hBX85vX9Xa61N-9dNdOrrhXUDfwUP5p2/view",
                "_blank"
              )
            }
          >
            Walk my CV
          </button>
          <button
            className="border pl-4 md:pl-7 pr-4 md:pr-7 p-2 md:p-3 rounded-full border-black cursor-pointer text-[9px] md:text-[20px]"
            onClick={() =>
              (window.location.href =
                "https://drive.google.com/file/d/1xbZWXIY3j0czBF_AcZuBP_3pJUvsxK9n/view?usp=drive_link", "_blank")
            }
          >
          Walk my Cover Letter
          </button>
        </div>
    </>
  );
};

export default AboutSection;
