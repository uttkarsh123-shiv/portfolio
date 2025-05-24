import React, { useEffect, useRef, useState } from "react";

const Marquee = ({ text, className = "" }) => {
  const marqueeRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-[110vw] h-[8vh] sm:h-[14vh] md:h-[20vh] overflow-hidden flex relative left-[-7vw] items-center justify-start ${className}`}
    >
      <div
        ref={marqueeRef}
        className="flex gap-10 whitespace-nowrap"
        style={{
          transform: `translateX(-${offset * 0.5}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-4 shrink-0 text-3xl sm:4xl md:text-6xl font-bold"
          >
            <h1>{text}</h1>
            <img
              width={80}
              src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg"
              alt="arrow"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
