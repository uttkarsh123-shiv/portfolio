import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const HeroSection = ({ id }) => {
  return (
    <div id={id} className=" w-full h-full">
      <Navbar />
      <div className="h-full w-full pt-40 flex flex-col justify-center gap-5  items-center">
        <Header
          as="h1"
          className="boldonse-regular text-5xl leading-20 text-center sm:leading-40 sm:text-9xl tracking-tight">
          Deploying what makes <br /> me happy
        </Header>
        <p className="instrument-serif-regular text-xl font-semibold whitespace-nowrap sm:text-4xl">
          {'{ WELCOME TO MY PORTFOLIO } '}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
