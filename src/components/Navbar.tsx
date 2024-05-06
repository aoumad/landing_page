"use client"

import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
      setNav(!nav);
    }
  return (
    <div className='flex justify-between items-center h-24 w-full mx-auto px-4 text-black bg-slate-50'>
        <h1 className='w-full text-3xl font text-black'>React Logo</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Services</li>
            <li className='p-4 whitespace-nowrap'>Contact us</li>
            <button className='px-24 py-4 whitespace-nowrap'>Login in {'->'}</button>
        </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-white m-4'>React Logo</h1>
          <li className='p-4 border-b border-gray-600 text-white'>Home</li>
          <li className='p-4 border-b border-gray-600 text-white'>Services</li>
          <li className='p-4 whitespace-nowrap border-b border-gray-600 text-white'>Contact us</li>
          <button className='px-24 py-4 whitespace-nowrap border-b border-gray-600 text-white'>Login in {'->'}</button>
      </ul>
    </div>
  )
}

export default Navbar