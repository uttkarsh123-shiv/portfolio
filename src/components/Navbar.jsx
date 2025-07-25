import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center h-[10vh] p-3 sm:p-5 sm:pr-20 pt-4 sm:pt-6 md:pt-10 sm:overflow-hidden md:overflow-hidden">
      <h1 className="instrument-serif-regular text-xl sm:text-2xl leading-7 pl-1 sm:pl-10">
        @byuttkarsh
      </h1>
          <div className="button-grp gap-2 sm:gap-5 flex ">
      <button className=" sm:p-2 pt-1 pb-1 pl-3 sm:pl-6 pr-3 sm:pr-6 border rounded-full border-dotted border-gray-500 cursor-pointer text-[11px] sm:text-[13px]"
      onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1hBX85vX9Xa61N-9dNdOrrhXUDfwUP5p2/view",
              "_blank"
            )
          }
      >RESUME</button>
      <button
      onClick={() => window.location.href = "mailto:uttkarshsingh450@gmail.com?subject=Collaboration Request"}
      className="sm:p-2 pl-3 sm:pl-6 pr-3 sm:pr-6 pt-1 pb-1  border rounded-full border-dotted border-gray-500 cursor-pointer text-[11px] sm:text-[13px]">CONNECT</button>
    </div>
    </div>
  );
};

export default Navbar;
