'use client'
import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com';

import toast, { Toaster } from 'react-hot-toast';


const ContactMe = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const [contactInfo,setContactIfno] = useState({
        email:"",
        message:""
    })
    const [isSubmiting,setIsSubmiting] = useState(false)

    const handleChange = (e : any) => {
        setContactIfno({...contactInfo,[e.target.name]:e.target.value})
    }

    const handleEmail = () => {
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=basset.rezazi26@gmail.com`, '_blank');
    }

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        
        if(!contactInfo.email || !contactInfo.message){
            toast.error("Make sure you set all informations")
            return
        }
        setIsSubmiting(true)
        try {
      await emailjs.sendForm(`${process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID}`, form.current!, `${process.env.NEXT_PUBLIC_EMAIL_KEY}`);
      toast.success('Email sent successfully')
      e.target.reset()
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
        setIsSubmiting(false)
        setContactIfno({
            email:"",
            message:""
          })
    }
    }

  return (
    <div className='w-full pb-20' id='contact' >
        <div className='w-full' >
            <div className='text-center mb-4 px-2'>
                <h1 className='text-3xl font-bold mb-4' >Contact Me</h1>
                <p className='text-sm md:text-base text-slate-500' >Please contact me directly at <span className='underline cursor-pointer' onClick={handleEmail} >basset.rezazi26@gmail.com</span> or throught this form</p>
            </div>
        </div>
        <form 
        ref={form}
            className='w-[80%] text-sm md:w-[60%]  lg:w-[40%] mx-auto flex flex-col gap-4'
            onSubmit={handleSubmit}
        >
            <input
            disabled={isSubmiting}
                type="email" 
                name='email'  
                placeholder='Your Email' 
                className='h-10 p-2 outline-none rounded-[8px] border-[1px] border-slate-500 text-slate-500'
                onChange={handleChange} 
            />
            <textarea
            disabled={isSubmiting}
                name="message"
                rows={10} 
                placeholder='Your messge'
                className='w-full p-2 outline-none rounded-[8px] border-[1px] border-slate-500 text-slate-500'
                onChange={handleChange}>
            </textarea>
            <button disabled={isSubmiting} type='submit' className={`${isSubmiting ? "bg-black" : "bg-slate-900 hover:bg-slate-950"} dark:bg-white dark:text-slate-800 w-fit px-4 py-2 text-white rounded-[8px]`} >Submit</button>
        </form>
        <Toaster />
    </div>
  )
}

export default ContactMe