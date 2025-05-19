import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-[30vw] rounded-full p-2 fixed top-10 left-1/2 -translate-x-1/2'>
        <ul className='flex justify-around text-[13px]'>
         <li><a href="#hero">HOME</a></li>
<li><a href="#about">ABOUT</a></li>
<li><a href="#skill">SKILL</a></li>
<li><a href="#project">PROJECT</a></li>
<li><a href="#footer">CONTACT</a></li>

        </ul>
    </nav>
  )
}

export default Navbar
