import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/logo.png'

const Footer = () => {
  return (
    <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent'>
        <div className='container p-12 flex justify-between gap-[50px]'>
            <Image src={logo} alt='logo-footer' width={130} height={130} className=' w-[120px] h-[30px] xl:h-[40px]'/>
            <p className='text-slate-600'>All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer