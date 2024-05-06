import React from 'react'
import Image from 'next/image'
import Analytics from '../assets/laptop.jpeg'

function Inscription() {
    return (
        <div className='w-full py-16 px-4'>
          <div className='md:px-28 mx-auto grid md:grid-cols-3 md:gap-4'>
            <div className='flex flex-col justify-between md:justify-start pt-12 md:col-span-2 h-full'>
              <p className='text-[#423f3f] font-semibold text-xl sm:text-2xl md:text-4xl'>
                Un programme pour la promotion d'un ecosystem dynamique de startups
                <span className='text-[#76b9a4] '> innovantes au Maroc</span>
              </p>
              <span className='text-gray-500 text-sm font-light'>Where to grow your business as a startup!</span>
              <button className=' flex justify-center items-center bg-[#205a48] w-[50px] px-16 py-4 rounded-md mt-12 text-white'>Inscription</button>
            </div>
            <div className=''>
              <Image src={Analytics} alt='Analytics'/>
            </div>
          </div>
        </div>
      )
}

export default Inscription