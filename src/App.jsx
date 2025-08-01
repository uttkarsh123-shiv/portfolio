import AboutSection from "./AboutSection";
import "./App.css";
import ProjectSection from "./ProjectSection";
import CoreSection from "./CoreSection";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
// import ExtraSection from './ExtraSection'
// import ProjectSection from './ProjectSection'
// import Extra from "./components/Extra";
import { useEffect , useRef} from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
gsap.registerPlugin(ScrollTrigger);

function HomePage() {
    const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.45; // adjust speed here (e.g., 0.5, 1, 1.5)
    }
  }, []);
  return (
   <>
  <>
  {/* Background Video */}
  <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-30 overflow-hidden">
    <video
      className="w-full h-full object-cover"
       ref={videoRef}
      src="https://res.cloudinary.com/df134toxg/video/upload/v1754023704/13820567_3840_2160_30fps_vfrndd.mp4"
      autoPlay
      loop
      muted
      playsInline
    />
  </div>

  {/* Main Content */}
  <div className="relative z-10 bg-[#f7f7f7]/70">
    <HeroSection id="home" />
    <AboutSection id="about" />
    <CoreSection id="skill" />
    {/* <ExtraSection /> */}
    <FooterSection id="contact" />
  </div>
</>

   </>
  );
}
function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<ProjectSection />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={} /> */}
      </Routes>
    </>
  );
}

export default App;

//  bg-[#f7f7f7]