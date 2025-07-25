import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center h-[10vh] p-3 sm:p-5 sm:pr-20 pt-4 sm:pt-6 md:pt-10 sm:overflow-hidden md:overflow-hidden">
      <h1 className="instrument-serif-regular text-[16px] sm:text-2xl leading-7 pl-1 sm:pl-10">
        @byuttkarsh
      </h1>
          <div className="button-grp gap-2 sm:gap-5 flex ">
      <button className="border border-gray-400  pl-4 md:pl-6 pr-4 md:pr-6 p-2 md:p-3 rounded-full cursor-pointer text-[9px] md:text-[20px]"
      onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1hBX85vX9Xa61N-9dNdOrrhXUDfwUP5p2/view",
              "_blank"
            )
          }
      >RESUME</button>
      <button
      onClick={() => window.location.href = "mailto:uttkarshsingh450@gmail.com?subject=Collaboration Request"}
      className="border border-gray-400  pl-4 md:pl-6 pr-4 md:pr-6 p-2 md:p-3 rounded-full cursor-pointer text-[9px] md:text-[20px]">CONNECT</button>
    </div>
    </div>
  );
};

export default Navbar;
