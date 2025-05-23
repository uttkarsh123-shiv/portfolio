import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center h-[10vh] p-5 pr-20 pt-10 sm:overflow-hidden md:overflow-hidden">
      <h1 className="instrument-serif-regular text-4xl leading-7">
        @byuttkarsh
      </h1>
      
        {/* <ul className="flex justify-around gap-5 text-[13px]">
          <li className="border border-gray-500 border-dotted rounded-full p-2 pl-5 pr-5">
            <a href="#project">RESUME</a>
          </li>
          <li  className="border border-gray-500 border-dotted rounded-full p-2 pl-5 pr-5">
            <a href="#contact">CONNECT</a>
          </li>
        </ul> */}

          <div className="button-grp gap-5 flex ">
      <button className="p-2 pl-6 pr-6 border rounded-full border-dotted border-gray-500 cursor-pointer text-[13px]"><span className='z-3'>RESUME</span></button>
      <button className="p-2 pl-6 pr-6 border rounded-full border-dotted border-gray-500 cursor-pointer text-[13px]"><span className='z-3'>CONNECT</span></button>
    </div>
    </div>
  );
};

export default Navbar;
