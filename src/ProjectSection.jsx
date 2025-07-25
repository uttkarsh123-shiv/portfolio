import React from "react";
import Header from "./components/Header";
import Marquee from "./components/Marquee";
const ProjectSection = ({ id }) => {
  return (
    <div id={id} className="w-screen h-screen mt-30 flex flex-col bg-amber-50">
      <Header
        as="h1"
        className="p-6 instrument-serif-regular text-4xl sm:text-7xl text-center leading-10 sm:leading-45 "
      >
        {" {Projects } "}
      </Header>
      <div className="">
        <div className="p-5 bg-white">
          <div className="w-[80vh] h-[80vh] bg-red-50"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
