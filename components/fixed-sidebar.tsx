"use client"
import React from 'react'
import { ModeToggle } from './mode-toggle'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  
import Link from 'next/link'
import { Blocks, Dumbbell, Github, Home, Instagram, LayoutPanelTop, Linkedin, NotebookPen, NotebookText, Send, SquarePen, Twitter, UserPen } from 'lucide-react'
import Image from 'next/image'
import CustomTextTransition from './CustomTextTransition'
import { BorderBeam } from "@/components/magicui/border-beam";

export default function FixedSidebar() {

    const Text =[
      "Web Developer",
      "Back-end Engineer"
    ];
    const navItems = [
        {
            href:"#",
            icon:UserPen,
            title:"about",
        },
        {
            href:"#",
            icon:Dumbbell,
            title:"skills",
        },
        {
            href:"#",
            icon:Blocks,
            title:"services",
        },
        {
            href:"#",
            icon:LayoutPanelTop,
            title:"projects",
        },
        {
            href:"#",
            icon:SquarePen,
            title:"resume",
        },
        {
            href:"#",
            icon:NotebookText,
            title:"articles",
        },
        {
            href:"#",
            icon:Send,
            title:"contact",
        }
    ]
    const socialLinks = [
        {
            href:"#",
            icon:Linkedin,
            title:"linkedIn",
        },
        {
            href:"#",
            icon:Instagram,
            title:"skills",
        },
        {
            href:"#",
            icon:Send,
            title:"services",
        },
        {
            href:"#",
            icon:Github,
            title:"projects",
        }
    ]
  return (
    <div className='flex px-2 gap-4'>
        <div className='space-y-3'>
            {/* Menu */}
                <button className="flex flex-col gap-1.5 bg-slate-50 dark:bg-slate-900  group items-start justify-center rounded-[20px] w-16 h-16 p-4">
                    <span className='flex-shrink-0 w-6 group-hover:w-8 h-[1.8px] bg-slate-900 dark:bg-slate-50 group-hover:bg-lime-500 transition-all duration-500'></span>
                    <span className='flex-shrink-0 w-8 h-[1.8px] bg-slate-900 dark:bg-slate-50 group-hover:bg-lime-500 transition-all duration-500'></span>
                    <span className='flex-shrink-0 w-4 group-hover:w-8 h-[1.8px] bg-slate-900 dark:bg-slate-50 group-hover:bg-lime-500 transition-all duration-500'></span>
                </button>
            <ModeToggle/>
            {/* Navigation */}
            <div className='bg-slate-50 px-2 py-4 dark:bg-slate-900 w-16 rounded-full flex flex-col justify-center space-y-2'>
                {
                    navItems.map((item,i)=>{
                        const Icon = item.icon
                        return(

                            <TooltipProvider>
                            <Tooltip>
                            <TooltipTrigger asChild>
                            <Link 
                            key={i} 
                            href={item.href} 
                            className='flex flex-col gap-1.5 dark:bg-slate-600/5 border border-slate-100/20 dark:border-slate-800/50
                             bg-slate-50/90 group items-center justify-center rounded-[20px] w-12 h-12 p-2 hover:text-lime-500 duration-300'>
                            <Icon className='w-5 h-5 flex-shrink-0'/>
                             <span 
                             className='sr-only'>{item.title}</span>
                            </Link>
                            </TooltipTrigger>
                            <TooltipContent 
                            side="right" 
                            className='capitalize'>{item.title}</TooltipContent>
                          </Tooltip>
                            </TooltipProvider>
                
                        );
                    })
                }
        
            </div>
        </div>
        <div className='bg-slate-50 dark:bg-slate-900 rounded-tl-2xl text-slate-50 p-8 rounded-b-2xl'>
        
        <div className="relative w-[300px] rounded-xl overflow-hidden">
        <Image 
            src="/photo.jpg" 
            alt='Profile image' 
            width={500} 
            height={500} 
            className='z-10 relative w-full rounded-tl-2xl rounded-b-2xl p-0.5'
            />
        <BorderBeam/>
        </div>
        <div className="py-2 mt-8 space-y-3 text-center">
            <p className='flex items-center justify-center text-lime-500 uppercase'>
            {<CustomTextTransition words={Text}/>}

            </p>
                    <h2 className='scroll-m-20 pb-2 text-3xl text-slate-900 dark:text-slate-50 font-semibold tracking-tight first:mt-0'>Mehretu Abreham</h2>
            <div className="py-2 flex items-center space-x-2 justify-center">
                {socialLinks.map((item,i)=>{
                    const Icon = item.icon;
                    return(
                        <Link key={i} href={item.href} className='flex flex-col text-slate-900 dark:text-slate-50 gap-1.5 dark:bg-slate-600/5 border border-slate-400/20 dark:border-slate-800/50 bg-slate-50/90 group items-center justify-center rounded-[20px] w-12 h-12 p-2 hover:text-lime-500 dark:hover:text-lime-500 duration-300'>
                        <Icon className='w-5 h-5 flex-shrink-0'/>
                         <span className='sr-only'>{item.title}</span>
                        </Link>
                    )
                })}
            </div>
        </div>
        <div className='border-t mt-4 pt-8 flex justify-between items-center'>
        <Link href="#" className='hover:text-lime-500 text-slate-900 dark:text-slate-50 duration-300 py-2.5 px-6 border rounded-md'>
         Download CV
        </Link>
        <Link href="#" className='hover:bg-lime-500/50 duration-300 bg-lime-500 rounded-full py-2 px-6 text-slate-900'>
         Hire Me
        </Link>
        </div>
        </div>

    </div>
  )
}