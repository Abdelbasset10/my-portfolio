import React from 'react'
import { FaBars } from 'react-icons/fa'

import {RxSwitch} from 'react-icons/rx'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <nav className='pt-4 px-2 sm:px-4 md:px-8 h-[8vh]  items-center flex justify-between' >
            <div className='flex-1 hidden md:flex items-center justify-center' >
                <div className='w-fit bg-white rounded-[8px] py-2 md:flex items-center justify-center gap-3 px-4' >
                    <div className='px-2 py-1 rounded-xl hover hover:bg-slate-200 cursor-pointer' >
                        <a href="#hero">Home</a>
                    </div>
                    <div className='px-2 py-1 rounded-xl hover hover:bg-slate-200 cursor-pointer' >
                        <a href="#about">About</a>
                    </div>
                    <div className='px-2 py-1 rounded-xl hover hover:bg-slate-200 cursor-pointer' >
                        <a href="#skills">Skills</a>
                    </div>
                    <div className='px-2 py-1 rounded-xl hover hover:bg-slate-200 cursor-pointer' >
                        <a href="#experience">Experiences</a>
                    </div>
                    <div className='px-2 py-1 rounded-xl hover hover:bg-slate-200 cursor-pointer' >
                        <a href="#projects">Projects</a>
                    </div>
                    <div className='px-2 py-1 rounded-xl hover hover:bg-slate-200 cursor-pointer' >
                        <a href="#contact">Contact</a>
                    </div> 
                </div>
            </div>
        <MobileNav />
    </nav>
  )
}

export default Navbar