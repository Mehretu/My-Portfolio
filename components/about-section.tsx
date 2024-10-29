"use client"
import React from 'react'
import CustomTextTransition from './CustomTextTransition';
import Highlighter from "react-highlight-words";
import Meteors from "@/components/magicui/meteors";




export default function AboutSection() {

    const Text = [
     "Mehretu Abreham",
     "Fullstack Developer"
    ];
    const stats = [
      {
        title:"Completed Projects",
        count:"10",
        plus:false
      },
      {
        title:"Years of Experince",
        count:"3",
        plus:false
      },
      {
        title:"Clients worked on",
        count:"10",
        plus:true
      }
    ]
  return (
    
    <div className='relative bg-slate-50 dark:bg-slate-900 rounded-tr-2xl px-4 py-16'>
       <Meteors number={30} />

      
        <p className='text-2xl py-4'>Hello, I&apos;m{" "}
        <span className='inline-block text-lime-500 '>{<CustomTextTransition words={Text}/>}</span></p>
        <h2 className=' text-4xl pb-8 lg:text-[52px] leading-[4rem]'>Web Developer and 
        <span className="highlight-container">
          <span className="highlight">Backend Engineer
          </span>
          </span>{" "}
        Based in Addis Ababa, Ethiopia
        </h2>
        
        <p className='text-base'>I am a full-stack engineer with a strong foundation in both front-end and back-end technologies. My expertise spans Next.js for dynamic and scalable front-end applications, as well as JEE and Spring Boot for building robust back-end systems.</p>
        {/* <p className='text-base'>I have joined Atlas Computer Technologies since 2022, a fintech company, where I have been deeply involved in developing secure and scalable financial applications. My work with JEE and Spring Boot has enabled me to contribute to building resilient and efficient systems that meet the demanding needs of the financial industry.</p> */}
        <div className="py-16 grid grid-cols-3">
           {stats.map((item,i) => {
            return(
              <div key={i} className="flex flex-col items-center space-x-4">
              <p className='scroll-m-20 text-4xl tracking-tight lg:text-5xl'>{item.count}{item.plus && "+"}</p>
              <p className='text-balance'>{item.title}</p>
              </div>
            )
           })}
        </div>
    </div>
  )
}
