import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center h-[10vh] p-5 pr-20 pt-10 sm:overflow-hidden md:overflow-hidden">
      <h1 className="instrument-serif-regular text-2xl sm:text-2xl leading-7 pl-10">
        @byuttkarsh
      </h1>
          <div className="button-grp gap-5 flex ">
      <button className="p-2 pl-6 pr-6 border rounded-full border-dotted border-gray-500 cursor-pointer text-[13px]"
      onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1hBX85vX9Xa61N-9dNdOrrhXUDfwUP5p2/view",
              "_blank"
            )
          }
      ><span className='z-3'>RESUME</span></button>
      <button
       onClick={() => window.location.href = "mailto:uttkarshsingh450@gmail.com"}
      className="p-2 pl-6 pr-6 border rounded-full border-dotted border-gray-500 cursor-pointer text-[13px]"><span className='z-3'>CONNECT</span></button>
    </div>
    </div>
  );
};

export default Navbar;
