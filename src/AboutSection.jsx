import React from "react";
import Header from "./components/Header";
// import ResumeButton from "./components/ResumeButton";
const AboutSection = ({id}) => {
  return (
    <div
      id={id}
      className="w-full h-[300vh] pl-10 pr-5 flex flex-col gap-10 justify-center items-center">
        <Header
        as="h1"
        className="instrument-serif-regular text-7xl sm:text-9xl  leading-24 sm:leading-45 text-[#f8f1de]">
        The hOOman <br /> Behind the Code
      </Header>
      <p className="text-[#f8f1de] text-3xl sm:text-5xl leading-12 sm:pl-40 sm:pr-40 sm:leading-16 instrument-serif-regular">
      I'm a passionate Computer Science and Engineering student at MAIT College, deeply interested in both design and development. I enjoy transforming ideas into functional and delightful digital experiences, constantly striving to refine my skills. <br/><br/> I love crafting clean, intuitive designs — but what excites me even more is bringing those designs to life through thoughtful development. From pixels to performance, I aim to create solutions that are not just usable, but memorable.
      </p>
          <div className="cv flex gap-2 sm:gap-5 mt-5 sm:mt-20">
          <button  onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1hBX85vX9Xa61N-9dNdOrrhXUDfwUP5p2/view"
              )
            } className="bg-orange-500 w-[250px] h-[50px] sm:p-3 sm:pl-10 sm:pr-10 rounded-full hover:bg-transparent text-white text-center">View My Resume</button>
          </div>
    </div>
  );
};

export default AboutSection;
