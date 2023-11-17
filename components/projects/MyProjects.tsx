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
                                    <div className='w-full md:w-[60%] mb-6 md:mb-0 p-4 flex flex-col gap-2' >
                                        <h1 className='text-xl font-bold' >{project.title}</h1>
                                        <p className='text-slate-500' >{project.dec}</p>
                                        <div className='flex flex-wrap items-center gap-2' >
                                            {project.skills.map((skill,index)=>(
                                                <div key={index} className='p-2 rounded-[8px] bg-slate-800' >
                                                    <p className='text-white' >{skill}</p>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                    <div className='w-full md:w-[40%] min-h-[20rem] relative' >
                                        <Image src="/image/me.jfif" fill alt='project image' className='object-cover' />
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