'use client'

import React from 'react'
import Image from 'next/image'
import image from '../../public/images/1.jpg'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Link from 'next/link'



const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <motion.div 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }} 
            className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='mb-4 text-4xl lg:text-6xl  sm:text-5xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-yellow-600'>Hello, I`m {""}</span>
                    <br />
                    <TypeAnimation 
                        sequence = {[
                            'Oleg', 1000,
                            'Front-End Developer', 1000,
                            // '2', 1000,
                            // '1', 1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                Hi everyone ✌🏼
                My name is Oleg and I'm looking for a job. I love to push myself and I'm very goal oriented. 
                Also, I love learning and creating new processes for construction.
                </p>
                <div>
                    <Link href={"#email"} className='px-[50px] py-3 rounded-full sm:w-fit w-full mr-4 bg-gradient-to-br from-orange-500 to-yellow-500 hover:bg-slate-200 text-white hover:scale-105 transition'>Hire Me</Link>
                    <button className='px-1 py-1 rounded-full sm:w-fit w-full bg-gradient-to-br from-orange-500  to-yellow-600 hover:bg-slate-800 text-white mt-4 hover:scale-105 transition'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
                    </button>
                </div>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}  
            className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <Image className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full md:w-[400px] md:h-[420px]' src={image} alt='hero-img' width={150} height={150} />
                </div>
            </motion.div>
            </div>
    </section>
  )
}

export default HeroSection