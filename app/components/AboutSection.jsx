'use client'

import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import img from '../../public/images/Screenshot_92.png'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>React</li>
                <li>TypeScript</li>
                <li>Redux</li>
                <li>Next.js</li>
                <li>TailwindCSS</li>
                <li>Styled Components</li>
                <li>SCSS/SASS</li>
                <li>PostgreSQL</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>Chernivtsi National University</li>
                <li>Learn and Go English School</li>
                
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul>
                <li>Chernivtsi National University - Bachelor</li>
                <li>B2 English Certificate</li>
                
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab ] = useState("skills");
    const [isPending, startTransition ] = useTransition();


    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
  return (
    <section className=''>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src={img} alt='about-img' width={500} height={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold mb-4'>About Me</h2>
                <p className='text-base md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo dignissimos, nisi commodi impedit repellat eos velit porro! Officiis, vitae quas. Necessitatibus maiores nam delectus repudiandae assumenda eaque quis quos.</p>
                <div className='flex flex-row mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active = {tab === "skills"}>{""}Skills{""}</TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active = {tab === "education"}>{""}Education{""}</TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active = {tab === "certifications"}>{""}Certifications{""}</TabButton>
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection