import React from "react";
import Header from "./components/Header";
// import ResumeButton from "./components/ResumeButton";
const AboutSection = ({ id }) => {
  return (
    <div
      id={id}
      className="w-full  h-[300vh] pl-10 pr-16 flex gap-10 justify-center items-center">
      <div>
        <Header
          as="h1"
          className="select-none instrument-serif-regular text-7xl sm:text-6xl pl-10 leading-24 sm:leading-40 text-[#f8f1de]"
        >
         {'{ About Me }'}
        </Header>
        <p className="text-[#f8f1de] font-semibold text-3xl pl-10 tracking-tight sm:text-5xl leading-12 sm:leading-20">
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
      {/* <div className="h-[200vh] w-[30vw] flex flex-col justify-center items-center pt-100 gap-10">
        <div className="image-wrapper rounded-xl w-[45vh] relative aspect-[2/3]">
          <img src="https://images.unsplash.com/photo-1745563115146-aec349b7cadf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" className="image h-full w-full object-cover" />
        </div>
      
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1hBX85vX9Xa61N-9dNdOrrhXUDfwUP5p2/view"
            )
          }
className="bg-orange-500 h-[45px] sm:p-1 sm:pl-6 sm:pr-6 border border-transparent hover:border-white cursor-pointer whitespace-nowrap rounded-full hover:bg-transparent text-white text-center"
        >
          View My Resume
        </button>
        
      </div> */}
    </div>
  );
};

export default AboutSection;
