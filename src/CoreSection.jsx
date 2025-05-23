import React from "react";
import { useState } from "react";
import Header from "./components/Header";

const techStack = [
  {
    type: 'video/mp4',
    title: 'Full Stack',
    videoSrc: 'https://res.cloudinary.com/df134toxg/video/upload/v1748012007/0080001-0050_v9xugw.mp4',
  },
  {
     type: 'video/mp4',
    title: 'Databases',
    videoSrc: 'https://res.cloudinary.com/df134toxg/video/upload/v1748012008/0100001-0050_tqhslr.mp4',
  },
    {
 type: 'video/mp4',
    title: 'Version Control System',
    videoSrc: 'https://res.cloudinary.com/df134toxg/video/upload/v1748012007/0090001-0050_wjaktk.mp4',
  },
    {
     type: 'video/mp4',
    title: '',
    videoSrc: 'https://res.cloudinary.com/df134toxg/video/upload/v1748012007/0110001-0050_c1wud3.mp4',
  },
    {
   type: 'video/mp4',
    title: 'Full Stack',
    videoSrc: 'https://res.cloudinary.com/df134toxg/video/upload/v1748012007/0120001-0050_eauksh.mp4',
  },
];

const CoreSection = ({id}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div
      id={id}
      className="w-[100vw] pt-59 flex flex-col"
    >
       {hoveredIndex !== null && (
        <div className="absolute inset-0 bg-blue-500 opacity-70 z-0 transition duration-300 pointer-events-none" />
      )}
    <div >
        <Header
        as="h1"
        className="instrument-serif-regular p-6 pl-20 text-[96px] sm:text-7xl leading-23 sm:leading-40 text-black"
      >
        {'{ Skills i have earned so far }'}
      </Header>
    </div>
<div className="techstack w-full h-[230vh] grid gap-8 p-6 pl-20 pr-20">

   {techStack.map((item, index) => (
          <div
            key={index}
            className={`relative shadow-md rounded-2xl transition-transform duration-300 ${
              hoveredIndex === index ? 'scale-105 z-20' : ''
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <video
              autoPlay
              loop
              playsInline
              muted
              className="w-full h-full object-cover absolute rounded-2xl"
            >
              <source src={item.videoSrc} type="video/mp4" />
            </video>
            <h1 className="text-white text-4xl absolute z-30 mt-5 ml-10 font-serif">
              {item.title}
            </h1>
          </div>
        ))}
</div>

   
    </div>
  );
};

export default CoreSection;
