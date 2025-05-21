import React from 'react'
import Header from './Header'
import Marquee from './Marquee'
const ProjectSection = () => {
  return (
    <div className='w-[100vw] h-[100vh] bg-black'>
      <Header
  as="h1"
  className="instrument-serif-regular text-[9.5rem] text-center leading-45 text-[#f8f1de] "
>
  Stuff I Made to Feel Productive
</Header>
<div className=' w-[100vw] h-[100vh] overflow-hidden'>
  <Marquee text="Work in Progress" className="bg-[#f8f1de] text-black rotate-[-10deg] translate-50 translate-x-20"/>
<Marquee text="Work in Progress" className="bg-orange-500 text-[#f8f1de] rotate-[10deg] translate-0"/>

</div>

    </div>
  )
}

export default ProjectSection
