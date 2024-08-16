"use client"
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes'
import React from 'react'

export default function VideoBackground() {
    const {theme} = useTheme();
  return (
    <div className="h-full w-full fixed top-0 left-0 right-0 overflow-hidden -z-50">
        
    <video 
        className={cn("absolute left-0 top-0 w-full h-full object-cover object-center transition-all duration-300",theme==="dark"&&"opacity-0 invisible")}
        autoPlay 
        muted 
        loop 
        playsInline
        >
    <source src="/videos/light.mp4" type="video/mp4"/>
    Your browser doesnot support the video tag.
    </video>
        <video className={cn("absolute left-0 top-0 w-full h-full object-cover object-center transition-all duration-300",theme==="light"&&"opacity-0 invisible")} 
        autoPlay 
        muted 
        loop 
        playsInline>
        <source src="/videos/dark.mp4" type="video/mp4"/>
       Your browser doesnot support the video tag.
        </video>
        
   
    </div>
  )
}
