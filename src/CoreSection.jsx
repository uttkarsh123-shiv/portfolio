import React from "react";
import Header from "./components/Header";

const CoreSection = () => {
  return (
    <div
      id="skill"
      className="w-[100vw] h-[170vh] pt-59 bg-[#f8f1de] flex flex-col gap-20 justify-center items-center"
    >
      <Header
        as="h1"
        className="instrument-serif-regular text-[9rem]  leading-45 text-black"
      >
        Things i pretend to know
      </Header>
      <div className="h-[100vh] flex">
        <div className="w-[11vw] h-[100vh] border flex flex-col justify-around gap-80 border-gray-50 bg-red-50 ">
          <p className="text-2xl text-center">01</p>
          <h1 className="text-5xl bg-amber-100 rotate-270 whitespace-nowrap">
            Web Development
          </h1>
        </div>
        <div className="w-[11vw] h-[100vh] border flex flex-col justify-around gap-80 border-gray-50 bg-red-50 ">
          <p className="text-2xl text-center">01</p>
          <h1 className="text-5xl bg-amber-100 rotate-270 whitespace-nowrap">
            Web Development
          </h1>
        </div>
        <div className="w-[11vw] h-[100vh]  flex flex-col justify-around gap-80 border-gray-50 bg-[#ff6432]">
          <p className="text-2xl text-center">01</p>
          <h1 className="text-5xl text-orange-500  rotate-270 whitespace-nowrap">
            Web Development
          </h1>
        </div>
        <div className="w-[11vw] h-[100vh] border flex flex-col justify-around gap-80 border-gray-50 bg-red-50 ">
          <p className="text-2xl text-center">01</p>
          <h1 className="text-5xl bg-amber-100 rotate-270 whitespace-nowrap">
            Web Development
          </h1>
        </div>
        <div className="w-[11vw] h-[100vh] border flex flex-col justify-around gap-80 border-gray-50 bg-red-50 ">
          <p className="text-2xl text-center">01</p>
          <h1 className="text-5xl bg-amber-100 rotate-270 whitespace-nowrap">
            Web Development
          </h1>
        </div>
        <div className="w-[11vw] h-[100vh]  flex flex-col justify-around gap-80 border-gray-50 bg-[#ff6432] ">
          <p className="text-2xl text-center">01</p>
          <h1 className="text-5xl text-orange-500 rotate-270 whitespace-nowrap">
            Web Development
          </h1>
        </div>
        <div className="w-[11vw] h-[100vh] border flex flex-col justify-around gap-80 border-gray-50 bg-red-50 ">
          <p className="text-2xl text-center">01</p>
          <h1 className="text-5xl bg-amber-100 rotate-270 whitespace-nowrap">
            Web Development
          </h1>
        </div>
        <div className="w-[11vw] h-[100vh] border flex flex-col justify-around gap-80 border-gray-50 bg-red-50 ">
          <p className="text-2xl text-center">01</p>
          <h1 className="text-5xl bg-amber-100 rotate-270 whitespace-nowrap">
            Web Development
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CoreSection;
