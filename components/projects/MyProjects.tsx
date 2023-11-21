'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import { projects } from './constants';
import Image from 'next/image';



const MyProjects = () => {
  return (
    <div className='w-full flex items-center justify-center pb-20' id='projects' >
        <div className='w-full' >
        <div className='text-center'>
            <h1 className='text-3xl font-bold mb-4' >My Projects</h1>
        </div>
        <div className='w-[80%] md:w-[60%] min-h-[20rem] mx-auto bg-slate-100 shadow rounded-[8px]' >
            <Swiper
                        pagination={{
                            clickable: true}}
                          modules={[Pagination, Navigation]}
                        className="w-full min-h-[20rem] pb-10"
                    >
                        {projects.map((project,index)=>(
                                <SwiperSlide key={index} >
                                <div className='flex flex-col-reverse md:flex-row ' >
                                    <div className='w-full md:w-[50%] mb-10 md:mb-4 p-4 flex flex-col' >
                                        <h1 className='text-xl font-bold' >{project.title}</h1>
                                        <p className='text-slate-500 text-sm lg:text-base my-2' >{project.dec}</p>
                                        <div className='flex flex-wrap items-center gap-2' >
                                            {project.skills.map((skill,index)=>(
                                                <div key={index} className='p-1 md:p-2 rounded-[8px] bg-slate-800' >
                                                    <p className='text-white text-sm lg:text-base' >{skill}</p>
                                                </div>
                                            ))}

                                        </div>
                                        <div className='flex items-center flex-wrap gap-3 mt-4' >
                                            {project.github && (
                                                <a href={project.github} target='_blank' className='text-sm lg:text-base text-neutral-700 hover:text-neutral-900' >Github</a>
                                            )}
                                            {project.production && (
                                                <a href={project.production} target='_blank' className='text-sm lg:text-base text-neutral-700 hover:text-neutral-900'>Production</a>
                                            )}
                                        </div>
                                    </div>
                                    <div className='w-full md:w-[50%] min-h-[20rem] relative' >
                                        <Image src={project.image} fill alt='project image' className='object-contain' />
                                    </div>
                                </div>
                                
                            </SwiperSlide>
                        ))}
                    </Swiper>
        </div>
        </div>
    </div>
  )
}

export default MyProjects