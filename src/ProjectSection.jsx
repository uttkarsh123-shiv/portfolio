import React from "react";
import Header from "./components/Header";
import Marquee from "./components/Marquee";
const ProjectSection = ({ id }) => {
  return (
    <div id={id} className="w-full h-[190vh] mt-30 flex flex-col">
      <Header
        as="h1"
        className="p-6 instrument-serif-regular text-4xl sm:text-7xl text-center leading-10 sm:leading-45 "
      >
        {" {Projects } "}
      </Header>
      <div className=" w-[100vw] h-[100vh] overflow-hidden">
        <Marquee
          text="Work in Progress"
          className="translate-2 font-light"
        />
      </div>
    </div>
  );
};

export default ProjectSection;
