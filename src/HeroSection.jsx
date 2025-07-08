import React from "react";
import Navbar from "./components/Navbar";
import { PiHandWavingLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
const HeroSection = ({ id }) => {
   const navigate = useNavigate();
  return (
    <div id={id} className=" w-full h-full flex flex-col gap-10">
      <Navbar />
      <div className="h-full w-full pt-20 pr-10 flex flex-col  border-gray-300 justify-between gap-5  items-center">
        <p className="bg-gray-50 p-1 pl-3 pr-3 rounded-full border-4 border-white flex items-center gap-2 font-light text-[15px]">
          <PiHandWavingLight /> Hi, I'm Uttkarsh
        </p>
        <h1 className="text-[72px] text-center tracking-tight leading-[72px] font-medium">
          A WEB DEVELOPER <br /> BASED IN INDIA
        </h1>
        <p className="text-[24px] text-center text-[#0d0d0f] opacity-[0.7] tracking-normal">
          The designer and developer with a love for clean code and creative{" "}
          <br /> design. I turn ideas into smooth, functional experiences
        </p>
        <div className="button-grp gap-5 flex pt-10">
          <button className="border pl-7 pr-7 p-3 rounded-full bg-black text-white cursor-pointer hover:bg-[#292929]"
 onClick={() => window.location.href = "mailto:uttkarshsingh450@gmail.com?subject=Collaboration Request"}>
            Let's Collaborate
          </button>
          <button   onClick={() => navigate("/work")} className="border border-gray-400 pl-6 pr-6 p-3 rounded-full cursor-pointer" onclic>
            See Work
          </button>
        </div>
      </div>

      <div className="w-[70vw] overflow-hidden rounded-xl group mx-auto">
        <img
          src="https://res.cloudinary.com/df134toxg/image/upload/v1750240013/uttkarsh-passport-photo_1_-modified_cfoy81.png"
          alt="Uttkarsh"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default HeroSection;
