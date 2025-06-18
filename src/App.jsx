import AboutSection from './AboutSection'
import './App.css'
import ProjectSection from './ProjectSection'
import CoreSection from './CoreSection'
import FooterSection from './FooterSection'
import HeroSection from './HeroSection'
import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function App() {
useEffect(()=>{
const lenis = new Lenis({
  autoRaf: true,
});

lenis.on('scroll', (e) => {
  console.log(e);
});
})

// useEffect(()=>{
//   let timeline1 = gsap.timeline({scrollTrigger:{
//     trigger: "#about",
//     // markers: true,  
//     start: "15% 50%",
//     end: "20% 55%",
//     scrub: 1,
//     duration: 1,
//   }})

//   timeline1.to(".main", {
//     backgroundColor: "#0e100f",
//     // duration: 1,
//   })

//     let timeline2 = gsap.timeline({scrollTrigger:{
//     trigger: "#skill",
//     // markers: true,  
//     start: "0% 50%",
//     end: "8% 55%",
//     scrub: 1,
//     duration: 1,
//   }})

//   timeline2.to(".main", {
//     backgroundColor: "#f8f1de",
//     // duration: 1,
//   })
// })
  return (
    <div className='main bg-[#f7f7f7]'>
   <HeroSection id="home"/>
   <AboutSection id="about"/>
   {/* <ProjectSection id="project"/> */}
   {/* <CoreSection id="skill"/> */}
   {/* <FooterSection id="contact"/> */}
    </div>
  )
}

export default App
