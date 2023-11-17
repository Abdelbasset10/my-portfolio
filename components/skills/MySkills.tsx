'use client'
import React from 'react'
import { skills } from './constants'
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

const MySkills = () => {

  return (
    <div className='w-full flex items-center justify-center pb-20' id='skills' >
        <div>
            <h1 className='text-3xl font-bold mb-4 text-center' >My Skills</h1>
            <ul className='w-[80%] text-sm md:text-base sm:w-[70%] md:w-[60%] mx-auto flex flex-wrap gap-4' >
                {skills.map((skill,index)=>(
                    <motion.li key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                      once: false,
                    }}     
                    custom={index}>
                        <div className='bg-slate-200 px-2 py-1 rounded-[8px]' >
                            <p>{skill}</p>
                        </div>
                    </motion.li>
                ))}

            </ul>
        </div>
    </div>
  )
}

export default MySkills