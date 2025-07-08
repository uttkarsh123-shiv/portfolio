import AboutSection from './AboutSection'
import './App.css'
import ProjectSection from './ProjectSection'
import CoreSection from './CoreSection'
import FooterSection from './FooterSection'
import HeroSection from './HeroSection'
import Extra from './components/Extra'
import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Routes, Route } from 'react-router-dom'
gsap.registerPlugin(ScrollTrigger)


function HomePage() {
  return (
    <div className='main bg-[#f7f7f7]'>
      <HeroSection id="home" />
      <AboutSection id="about" />
      <CoreSection id="skill" />
      <FooterSection id="contact" />
    </div>
  )
}
function App() {
useEffect(()=>{
const lenis = new Lenis({
  autoRaf: true,
});

lenis.on('scroll', (e) => {
  console.log(e);
});
})

  return (
  //   <div className='main bg-[#f7f7f7]'>
  //  <HeroSection id="home"/>
  //  <AboutSection id="about"/>
  //  <CoreSection id="skill"/>
  //  <FooterSection id="contact"/>
  //   </div>
  <>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path = '/work' element={<Extra />} />
  </Routes>
  </>
  )
}

export default App
