import React from 'react'
import { Company, Support, Icons } from './Menu';
import Item from './Item';
import IconsFooter from './IconsFooter';

function Footer() {
  return (
    <footer className='bg-gray-900 text-white'>

      {/* Header contact */}
      <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[rgba(255,255,255,0.1)] py-7'>
        <h1 className='md:w-2/5 font-semibold md:mb-0 mb-6 lg:text-4xl text-3xl lg:leading-normal'>
          <span className='text-[#6dccae]'>Stay</span> up to date!
        </h1>
        <div>
          <input
            type='text'
            placeholder='Your email address'
            className='text-gray-800 md:w-72 w-full md:mr-6 mr-1 md:mb-0 mb-4 py-2.5 px-2 rounded focus:outline-none'
          />
          <button className='bg-[#6dccae] hover:text-[#40b18d] duration-300 px-5 py-2.5 font-[Poppins] rounded'>Submit!</button>
        </div>
      </div>

      {/* Items Container */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 py-16 px-16'>
        <Item items={Company} title="Company"/>
        <Item items={Support} title="Support"/>
      </div>

      <div className='flex justify-between px-16'>
        <hr className='w-full my-4 border-t border-gray-500'></hr>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-8 pt-2 gap-10 text-center text-gray-500 text-sm'>
        <span>Copyright © 2024 AL MADA</span>
        <span>All rights reserved</span>
        <IconsFooter Icons={Icons}/>
      </div>
    </footer>
  )
}

export default Footer;