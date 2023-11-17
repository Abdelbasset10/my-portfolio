'use client'
import React,{useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const MobileNav = () => {
    const [isShow,setIsShow] = useState(false)

    const handleOpen = () => {
        setIsShow(true)
    }

    const handleClose = () => {
        setIsShow(false)
    }

  return (
    <div className='md:hidden' >
        <FaBars className="text-3xl cursor-pointer" onClick={handleOpen} />
        {isShow && (
            <div className='w-48  h-[100vh] fixed top-0 right-0 z-50 bg-slate-500' >
                <FaTimes className="text-3xl absolute top-4 right-4 text-white" onClick={handleClose} />
                <div className='flex flex-col gap-4 text-white items-center justify-center mt-20' >
                    <div className='px-2 py-1 rounded-xl hover hover:bg-slate-200 cursor-pointer' onClick={handleClose} >
                        <a href="#hero">Home</a>
                    </div>
                    <div className='px-2 py-1 rounded-xl hover hover:bg-slate-200 cursor-pointer' onClick={handleClose} >
                        <a href="#about">About</a>
                    </div>
                    <div className='px-2 py-1 rounded-xl hover hover:bg-slate-200 cursor-pointer' onClick={handleClose}>
                        <a href="#skills">Skills</a>
                    </div>
                    <div className='px-2 py-1 rounded-xl hover hover:bg-slate-200 cursor-pointer' onClick={handleClose}>
                        <a href="#experience">Experiences</a>
                    </div>
                    <div className='px-2 py-1 rounded-xl hover hover:bg-slate-200 cursor-pointer' onClick={handleClose}>
                        <a href="#projects">Projects</a>
                    </div>
                    <div className='px-2 py-1 rounded-xl hover hover:bg-slate-200 cursor-pointer' onClick={handleClose}>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default MobileNav