import AboutSection from './AboutSection'
import './App.css'
import ProjectSection from './ProjectSection'
import CoreSection from './CoreSection'
import FooterSection from './FooterSection'
import HeroSection from './HeroSection'
import { useEffect } from 'react'
import Lenis from 'lenis'

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
    <>
   <HeroSection />
   <AboutSection />
   <ProjectSection />
   <CoreSection />
   <FooterSection />
    </>
  )
}

export default App
