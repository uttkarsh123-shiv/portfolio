import React from "react";
import Header from "./components/Header";
import Marquee from "./components/Marquee";
const ProjectSection = ({ id }) => {
  return (
    <div id={id} className="w-full h-[190vh] mt-30 flex flex-col">
      <Header
        as="h1"
        className="p-6 instrument-serif-regular text-4xl sm:text-7xl text-center leading-10 sm:leading-45 text-[#f8f1de] "
      >
        {" {  Stuff I Made to Feel Productive } "}
      </Header>
      <div className=" w-[100vw] h-[100vh] overflow-hidden">
        <Marquee
          text="Work in Progress"
          className="bg-[#000] text-[#ff6432] rotate-[-10deg] translate-70 sm:translate-50 translate-x-2 sm:translate-x-20"
        />
        <Marquee
          text="Work in Progress"
          className="bg-[#ff6432] text-[#f8f1de] rotate-[10deg] translate-2"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
