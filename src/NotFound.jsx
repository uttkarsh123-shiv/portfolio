import React from 'react'

const NotFound = () => {
  return (
    <div className=' h-screen w-screen flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-2xl'>Ooops, This Page does not exist.</h1>
        <a href="https://byuttkarsh.vercel.app/" className='underline'>Go back to Home</a>
    </div>
  )
}

export default NotFound;
