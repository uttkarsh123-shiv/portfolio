import React from "react";
import Header from "./components/Header";
// import ResumeButton from "./components/ResumeButton";
const AboutSection = ({ id }) => {
  return (
    <>
      <div
        id={id}
        className="w-screen h-screen md:flex gap-6 sm:gap-10 md:gap-20 md:p-20 pt-28 md:pt-60 pl-5 md:pl-28 pr-5 md:pr-20"
      >
        <Header as="h1" className="text-[12px] md:text-[20px] w-[22vw]">
          {"{ About Me }"}
        </Header>
        <p className="text-[16px] pt-5 md:text-[32px] tracking-normal">
          I am a passionate Computer Science student at MAIT, driven by a love
          for design and development. I enjoy turning ideas into seamless
          digital experiences and continuously honing my skills. <br />
          <br />I love crafting clean, intuitive designs — but what excites me
          even more is bringing those designs to life through thoughtful
          development. From pixels to performance, I aim to create solutions
          that are not just usable, but memorable.
        </p>
      </div>
    </>
  );
};

export default AboutSection;
