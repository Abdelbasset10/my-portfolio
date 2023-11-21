'use client'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

import { LuLoader2 } from 'react-icons/lu';
import { skills } from './constants'

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
const Skills = () => {
    const [isMounted,setIsMounted] = useState(true)

    useEffect(()=>{
        setIsMounted(false)
    })

  if(isMounted){
    return <div className='py-8 w-full flex items-center justify-center' >
        <LuLoader2 className="text-7xl animate-spin" />

    </div>
}
    
  return (
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
                            <p className='dark:text-slate-800' >{skill}</p>
                        </div>
                    </motion.li>
                ))}

            </ul>
  )
}

export default Skills