import React from 'react'
import Image from 'next/image'
import logo from '../../public/images/logo.png'

const Footer = () => {
  return (
    <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent'>
        <div className='container p-12 flex justify-between'>
            {/* <span>LOGO</span> */}
            <Image src={logo} alt='logo-footer' width={130} height={130} />
            <p className='text-slate-600'>All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer