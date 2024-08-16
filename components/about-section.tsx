"use client"
import React from 'react'
import CustomTextTransition from './CustomTextTransition';
import Highlighter from "react-highlight-words";



export default function AboutSection() {
  <Highlighter
    highlightClassName="YourHighlightClass"
    searchWords={["and", "or", "the"]}
    autoEscape={true}
    textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
  />
    const Text = [
     "Mehretu Abreham",
     "Fullstack Developer"
    ];
  return (
    <div>
        <p className='text-2xl py-4'>Hello, I&apos;m{" "}
        <span className='inline-block text-lime-500 '>{<CustomTextTransition words={Text}/>}</span></p>
        <h2 className=' text-4xl pb-8 tracking-wide lg:text-5xl'>Web Developer and <span className='bg-lime-500 px-4 py-2 rounded-full -rotate-6 text-balance inline-block leading-6'>Backend Engineer</span> Based in Addis Ababa, Ethiopia</h2>
        <p>Have worked in a variety of positions, including key developer, solution designer, and data architect. Strong engineering background combined with closely working with business customers.</p>
        <div className="">
            <div className="">
            <p>96</p>
            <p>Completed Projects</p>
            </div>
        </div>
    </div>
  )
}
