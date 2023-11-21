import React from 'react'
import { experiences } from './constants'
import { FaBars } from 'react-icons/fa'

const MyExperiences = () => {
  return (
    <div className='w-full flex items-center justify-center pb-20' id='experience' >
        <div>
            <h1 className='text-3xl font-bold mb-4 text-center' >My Experiences</h1>
            <div className='w-[80%] text-sm  lg:w-[60%] mx-auto flex flex-col' >
                {experiences.map((experience,index)=>(
                        index %2 === 0 ? (
                            <div key={index} className='grid gtid-cols-1 md:grid-cols-2 gap-4' >
                                <div key={index} className='bg-slate-100 shadow mt-2 p-2 rounded-[8px] flex flex-col dark:text-slate-800 ' >
                                    <div className='md:hidden' >
                                        <p>{experience.startDate} - {experience.endDate}</p>
                                    </div>
                                    <h2 className='text-lg font-bold' >{experience.title}</h2>
                                    <h3 className='text-md font-semibold' >{experience.company}</h3>
                                    <div className='flex flex-col' >
                                        {experience.description.map((desc,index)=>(
                                            <p key={index} >{desc}</p>
                                        ))}

                                    </div>
                                </div>
                                <div className='w-[2px] h-full bg-slate-500 relative hidden md:block dark:text-slate-800'>
                                    <div className='absolute top-4 left-2 shadow-md w-fit flex items-center gap-2 bg-white text-black p-4 rounded-[8px]' >
                                        <p>{experience.startDate}</p>
                                        <p> -</p>
                                        <p>{experience.endDate}</p>

                                    </div>
                                </div>
                        </div>
                        ) : 
                        (
                        <div key={index} className='grid grid-cols-1 md:grid-cols-2 gap-4' >
                            <div />
                            <div className='flex gap-4' >
                            <div className='w-[2px] h-full bg-slate-500 relative hidden md:block  dark:text-slate-800'>
                                    <div className='absolute top-4 right-4 shadow-md w-fit flex items-center gap-2 bg-white text-black p-4 rounded-[8px]' >
                                        <p>{experience.startDate}</p>
                                        <p> -</p>
                                        <p>{experience.endDate}</p>

                                    </div>
                            </div>
                                <div key={index} className='bg-slate-100 shadow dark:text-slate-800 w-full mt-2 p-2 rounded-[8px] flex flex-col ' >
                                    <div className='md:hidden' >
                                        <p>{experience.startDate} - {experience.endDate}</p>
                                    </div>
                                    <h2 className='text-lg font-bold' >{experience.title}</h2>
                                    <h3 className='text-md font-semibold' >{experience.company}</h3>
                                    <div className='flex flex-col' >
                                        {experience.description.map((desc,index)=>(
                                            <p key={index} >{desc}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                ))}
            </div>
        </div>
    </div>
  )
}

export default MyExperiences