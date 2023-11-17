
import AboutMe from '@/components/about/AboutMe'
import ContactMe from '@/components/contact/ContactMe'
import MyExperiences from '@/components/experience/MyExperiences'
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import Navbar from '@/components/navbar/Navbar'
import MyProjects from '@/components/projects/MyProjects'
import MySkills from '@/components/skills/MySkills'
import React from 'react'

const page = () => {
  return (
    <div className='w-full' >
      <Navbar/>
      <Hero />
      <AboutMe />
      <MySkills />
      <MyExperiences />
      <MyProjects />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default page