'use client'
import React, { useState } from 'react'
import GitHubIcon from '../../public/images/github.svg'
import LinkedInIcon from '../../public/images/linkedin.svg'
import TelegramIcon from '../../public/images/telegram.svg'
import Link from 'next/link'
import Image from 'next/image'
import SendButton from './SendButton'


const EmailSection = () => {
    const [focused, setFocused] = useState(false)
  return (
    <section id='email' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900 to-transparent rounded-full md:h-60 md:w-60 lg:h-60 lg:w-60 z-0 blur-3xl absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
        <div className='z-10 flex flex-col gap-10'>
            <h5 className='text-xl font-bold my-4 lg:text-[40px] text-white '>Let&apos;s Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-md'>
                I&apos;m currently looking for new opportunities, my inbox is always open. 
                Whether you have a question or just want to say hi, 
                I&apos;ll try my best to get back to you!
            </p>
            <div className='socials flex flex-row gap-2'>
                <Link href="https://github.com/dugaev">
                    <Image src={GitHubIcon} alt='github-icon' className='hover:scale-110'/>
                </Link>
                <Link href="https://www.linkedin.com/in/oleg-dugaev-66151a1a9/">
                    <Image src={LinkedInIcon} alt='linkedin-icon' className='hover:scale-110' />
                </Link>
                    <Link href="https://t.me/dugaevv">
                    <Image src={TelegramIcon} alt='linkedin-icon' className='hover:scale-110' />
                </Link>
            </div>
        </div>
        <div>
            <form action="" className='flex flex-col mt-9 md:mt-0'>
                <div className='mb-6'>
                    <label htmlFor="email" type="email" className='block text-sm mb-2 font-medium'>Your E-Mail :</label>
                    <input type="email" id='email' required placeholder='email@example.com' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' /> 
               </div>
                    {/* <div className="mb-6 relative overflow-hidden" > */}
                        {/* Label */}
                        {/* <label htmlFor="email" className={`bg-gradient-to-r bg-clip-text text-xs text-transparent font-semibold uppercase transition-all duration-300 ${focused === 2 ? "from-red-400 to-yellow-400" : "from-gray-600 to-gray-600"}`}>Your E-mail:</label>
                        {/* Input */}
                        {/* <input htmlFor="email" type="email" placeholder="email@example.com"
                        className="form-input  border-0 border-b-2 border-gray-300 bg-[#18191E] bg-opacity-80 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:border-gray-300 focus:ring-0"
                        onFocus={() => setFocused(2)}
                        onBlur={() => setFocused(null)}
                        /> */}
                        {/* Border bottom effect */}
                        {/* <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-400 to-yellow-400 transition-all duration-300 ease-in transform ${focused === 2 ? "w-full" : "w-0"}`} aria-hidden="true"/>
                    </div>  */}

                <div className='mb-6'>
                    <label htmlFor="subject" type="email" className='block mb-2 text-sm font-medium'>Subject :</label>
                    <input type="text" id='subject' required placeholder='Just saying Hi' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' /> 
               </div>
               <div className='mb-6'>
                    <label htmlFor="message" className='block text-sm mb-2 font-medium'>Message</label>
                    <textarea name="message" id="message" className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder="Let's talk about..."></textarea>
               </div >
               {/* <button type='submit' className='bg-orange-500 hover:bg-orange-600 fomt-medium py-2.5 px-5 rounded-lg w-full'>Send Message </button> */}
    
                <SendButton />

            </form>
        </div>
    </section>
  )
}

export default EmailSection