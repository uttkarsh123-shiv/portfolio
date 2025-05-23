import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const HeroSection = ({ id }) => {
  return (
    <div id={id} className=" w-full h-full">
      <Navbar />
      <div className="h-full w-full p-20 flex flex-col justify-center gap-5  items-center">
        <Header
          as="h1"
          className="instrument-serif-regular text-7xl leading-20 text-center sm:leading-45 sm:text-[9rem]"
>
          Deploying chaos <br /> with style and intent
        </Header>
        <p className="text-xl font-semibold whitespace-nowrap sm:text-2xl">
          WELCOME TO MY PORTFOLIO
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
