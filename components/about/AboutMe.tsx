import React from 'react'
import Me from './Me'

const AboutMe = () => {
  return (
    <div className='w-full flex items-center justify-center pb-20' id='about' >
        <div className='text-center w-full'>
            <h1 className='text-3xl font-bold mb-4' >About me</h1>
            <Me />
        </div>
    </div>
  )
}

export default AboutMe