import React from 'react'
import Skills from './Skills';



const MySkills = () => {
 

  return (
    <div className='w-full flex items-center justify-center pb-20' id='skills' >
        <div>
            <h1 className='text-3xl font-bold mb-4 text-center' >My Skills</h1>
            <Skills />
        </div>
    </div>
  )
}

export default MySkills