import React from 'react'
import { IconCloudGlobe } from './IconCloudGlobe'
import SectionHeading from './SectionHeading'
import SectionSubHeading from './SectionSubHeading'
import { Dumbbell } from 'lucide-react'
import { TechnologyCards } from './TechnologyCards'
import { TechStack } from './TechStack'

export default function TechnicalSkills() {
  return (
    <div className='relative bg-slate-50 dark:bg-slate-900 rounded-tr-2xl px-4 py-16'>
       <SectionSubHeading title='Technical Skills' icon={Dumbbell}/>
        <div className="py-2">
            <SectionHeading title='Technologies'/>
        </div>
        <p className='text-base pb-3'>
            I am a full-stack engineer with a strong foundation in both front-end and back-end technologies. My expertise spans Next.js for dynamic and scalable front-end applications, as well as JEE and Spring Boot for building robust back-end systems.</p>
        <div className="py-4 flex flex-col items-center justify-center border space-x-6 rounded-full">
            <h2 className='font-bold text-xl mb-2'>
                My Tech Stack
            </h2>
            <TechStack/>
        </div>
        <div className="flex items-center justify-center">
        <IconCloudGlobe/>
        {/* <div className=''>
         <TechnologyCards/>
        </div> */}
        </div>
    </div>
  )
}
