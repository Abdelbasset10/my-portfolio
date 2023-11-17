'use client'
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';


const Writter = () => {
    const [isMounted,setIsMounted] = useState(true)

    useEffect(()=>{
        setIsMounted(false)
    })

   
  return (
    <TypeAnimation
  sequence={[
    'Rezazi',
    500,
    'Mohamed Abdelbasset',
    500,
    "Rezazi Mohamed Abdelbasset",
    500 //  Continuing previous Text
  ]}
  style={{ fontSize: '20px' }}
  
/>
  )
}

export default Writter