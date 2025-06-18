import React from "react";
import Header from "./components/Header";
// import ResumeButton from "./components/ResumeButton";
const AboutSection = ({ id }) => {
  return (
    <>
    <div
      id={id}
      className="w-full h-[100vh] flex gap-20 p-10 pl-45 pt-60">
      
        <Header
          as="h1"
          className="sm:text-[20px] w-[20vw]" 
        >
         {'{ About Me }'}
        </Header>
        <p className="text-[32px] tracking-normal">
         I am a passionate Computer Science student at MAIT, driven by a love for 
         design and development. I enjoy turning ideas into seamless digital experiences 
         and continuously honing my skills. <br />
          <br />
          I love crafting clean, intuitive designs — but what excites me even
          more is bringing those designs to life through thoughtful development.
          From pixels to performance, I aim to create solutions that are not
          just usable, but memorable.
        </p>
    </div>
    {/* <p>Open My CV</p>
    <button></button> */}
  </>
  );
};

export default AboutSection;
