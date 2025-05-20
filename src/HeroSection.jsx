import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'

const HeroSection = () => {
  return (
   <div id='hero' className='bg-[#f8f1de] w-[100vw] h-[100vh]' >
   <Navbar />
 <div className='w-[100vw] h-[100vh] p-20 flex flex-col justify-center items-center'>
<Header
  as="h1"

  className="instrument-serif-regular text-[9.5rem] text-center leading-45"
>
  Deploying chaos <br /> with style and intent
</Header>
<p className='text-2xl'>WELCOME TO MY PORTFOLIO</p>
 </div>

   </div>
  )
}

export default HeroSection;
