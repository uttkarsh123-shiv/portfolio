import React from 'react';
// import './Hero.css'; // Import the custom CSS

const Hero = () => {
  return (
    <div className="relative w-[95vw] mx-auto h-screen overflow-hidden rounded-2xl">
      <div className="video-wrapper">
        <video
          className="hero-video"
          src="https://res.cloudinary.com/df134toxg/video/upload/v1754023704/13820567_3840_2160_30fps_vfrndd.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="relative flex flex-col pl-80 justify-center h-full px-4 text-black">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Dare to Show Your Skills</h2>
        <p className="max-w-2xl text-lg md:text-xl mb-6">
          From clean code to crafted components, here's everything that defines my work.
          Explore my resume and discover how I build digital experiences with precision.
        </p>
        <a
          href="/Uttkarsh_Singh_Resume.pdf"
          target="_blank"
          className="resume-button px-6 py-3 border w-40 rounded-full hover:bg-black hover:text-white transition duration-300"
        >
          View Resume →
        </a>
      </div>
    </div>
  );
};

export default Hero;
