'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";

import {FaGithub, FaLinkedin} from 'react-icons/fa'
import Writter from './Writter'
import { LuLoader2 } from "react-icons/lu";

const Hero = () => {
    const [isMounted,setIsMounted] = useState(true)

    useEffect(()=>{
        setIsMounted(false)
    })

    if(isMounted){
        return <div className='h-[92vh] w-full flex items-center justify-center' >
            <LuLoader2 className="text-7xl animate-spin" />

        </div>
    }

  return (
    <div className='w-full h-[92vh] flex items-center justify-center gap-4' id='hero' >
        <motion.div initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }} className='flex flex-col items-center md:items-start md:flex-row justify-center gap-4 px-2 md:px-0' >
            <div className='md:w-64 w-48 h-48 md:h-64 relative' >
                <Image src='/image/me.jfif' fill alt='image of mine' className='rounded-full object-cover' />
            </div>
            <div className=' md:mt-8 flex flex-col items-center justify-center gap-1' >
                <p>Hello,I'm</p>
                <Writter />
                <p>Full Stack Devoloper</p>
                <div className='flex flex-col md:flex-row items-center gap-2 my-2' >
                    <a href="/pdf/CV.pdf" download>
                        <button className='bg-black text-white hover:bg-white hover:text-black cursor-pointer w-36  py-2 rounded-[8px]' >Download CV</button>
                    </a>
                    <button className='bg-white text-black hover:bg-black hover:text-white w-36  py-2 rounded-[8px]' >Contact Me</button>
                </div>
                <div className='flex items-center gap-2' >
                    <Link href='https://github.com/Abdelbasset10'>
                        <FaGithub className="text-4xl cursor-pointer" />
                    </Link>
                    <Link href='https://www.linkedin.com/in/rezazi-mohamed-abdelbasset-2199a824b/'>
                        <FaLinkedin className="text-4xl cursor-pointer" />
                    </Link>

                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Hero