import React from "react";

const Navbar = () => {
  return (
    <div className=" w-[100vw] flex justify-between items-center h-[10vh] p-5 pr-20 pt-15 ">
      <h1 className="instrument-serif-regular text-4xl leading-7">
        @byuttkarsh
      </h1>
      <nav className="w-[30vw] rounded-full p-2 fixed top-10 left-1/2 z-1000 -translate-x-1/2">
        <ul className="flex justify-around text-[13px]">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#skill">SKILL</a>
          </li>
          <li>
            <a href="#project">PROJECT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    <a href="mailto:uttkarshsingh450@gmail.com">
        <button className="bg-orange-500 cursor-pointer p-3 pl-6 pr-6 text-white rounded-full hover:bg-transparent hover:border-orange-400 hover:border hover:text-orange-500">
        Let's catch up
      </button>
    </a>

    
    </div>
  );
};

export default Navbar;
