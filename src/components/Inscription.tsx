import React from 'react'
import Image from 'next/image'
import Analytics from '../assets/laptop.jpeg'

function Inscription() {
    return (
        <div className='w-full py-16 px-4'>
          <div className='md:px-24 mx-auto grid md:grid-cols-3 md:gap-4'>
            <div className='flex flex-col justify-start pt-12 md:col-span-2 flex flex-col'>
              <p className='text-gray-600 font-semibold text-xl sm:text-2xl md:text-4xl'>
                Un programme pour la promotion d'un ecosystem dynamique de startups
                <span className='text-[#76b9a4] '> innovantes au Maroc</span>
              </p>
            </div>
            <div className=''>
              <Image src={Analytics} alt='Analytics'/>
            </div>
          </div>
        </div>
      )
}

export default Inscription