import React from "react";
import Header from "./components/Header";

const CoreSection = ({id}) => {
  return (
    <div
      id={id}
      className="w-[100vw] h-[170vh] pt-59 flex flex-col gap-20 justify-center items-center"
    >
      <Header
        as="h1"
        className="instrument-serif-regular text-[9rem]  leading-45 text-black"
      >
        Things i learned so far
      </Header>
      <div className="h-[100vh] flex">
        <div className="w-[11vw] h-[100vh] flex flex-col justify-between items-center border-l-2 border-r-2 border-[#eee7d5] relative">
          <div className="text-2xl w-[11vw] h-[6vh] border-b-2 border-[#cfcfcf] border-dotted text-center absolute top-10">01</div>
          <h1 className="text-5xl  w-[30vw] absolute rotate-270 top-[50%]">
            Web Development
          </h1>
        </div>
         <div className="w-[11vw] h-[100vh] flex flex-col justify-between items-center border-r-2 border-[#eee7d5] relative">
          <div className="text-2xl w-[11vw] h-[6vh] border-b-2 border-[#cfcfcf] border-dotted text-center absolute top-10">02</div>
          <h1 className="text-5xl  w-[30vw] absolute rotate-270 top-[50%]">
            Databases
          </h1>
        </div>
 <div className="w-[11vw] h-[100vh] flex flex-col justify-between items-center border-r-2 border-[#eee7d5] bg-[#ff6432] relative">
          <div  className="text-2xl w-[11vw] h-[6vh] border-b-2 border-[#cfcfcf] border-dotted text-center absolute top-10">03</div>
          <div className="text-5xl  w-[30vw] absolute rotate-270 top-[50%]">
          </div>
        </div>
         <div className="w-[11vw] h-[100vh] flex flex-col justify-between items-center border-r-2 border-[#eee7d5] relative">
          <div className="text-2xl w-[11vw] h-[6vh] border-b-2 border-[#cfcfcf] border-dotted text-center absolute top-10">04</div>
          <h1 className="text-5xl  w-[30vw] absolute rotate-270 top-[50%]">
            Version Control
          </h1>
        </div>
         <div className="w-[11vw] h-[100vh] flex flex-col justify-between items-center border-r-2 border-[#eee7d5] relative">
          <div className="text-2xl w-[11vw] h-[6vh] border-b-2 border-[#cfcfcf] border-dotted text-center absolute top-10">05</div>
          <h1 className="text-5xl  w-[30vw] absolute rotate-270 top-[50%]">
            Core Web Vitals
          </h1>
        </div>
         <div className="w-[11vw] h-[100vh] flex flex-col justify-between items-center border-r-2 bg-[#ff6432] border-[#eee7d5] relative">
          <div  className="text-2xl w-[11vw] h-[6vh] border-b-2 border-[#cfcfcf] border-dotted text-center absolute top-10">06</div>
          <div className="text-5xl  w-[30vw] absolute rotate-270 top-[50%]">
            
          </div>
        </div>
         <div className="w-[11vw] h-[100vh] flex flex-col justify-between items-center border-r-2 border-[#eee7d5] relative">
          <div className="text-2xl w-[11vw] h-[6vh] border-b-2 border-[#cfcfcf] border-dotted text-center absolute top-10">07</div>
          <h1 className="text-5xl  w-[30vw] absolute rotate-270 top-[50%]">
            Figma
          </h1>
        </div>
         <div className="w-[11vw] h-[100vh] flex flex-col justify-between items-center border-r-2 border-[#eee7d5] relative">
          <div className="text-2xl w-[11vw] h-[6vh] border-b-2 border-[#cfcfcf] border-dotted text-center absolute top-10">08</div>
          <h1 className="text-5xl  w-[30vw] absolute rotate-270 top-[50%]">
            UI/Ux Design
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CoreSection;
