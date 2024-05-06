import React from 'react'
import { HiOutlineUserGroup } from "react-icons/hi2";
import Image from 'next/image'
import suit_man from '@/assets/profile.jpg'
import { GiRecycle } from "react-icons/gi";

function Feedback() {
  return (
    <div className='flex flex-col w-full h-[500px] py-16 px-4'>
        <div className='flex flex-col flex-start justify-center items-center'>
            <h1 className='text-[#6e6a6a] font-bold text-4xl md:text-5xl'>Inspiring success stories</h1>
            <span className='text-[#6e6a6a] font-light text-sm pt-4'>Who is Nextcent suitable for?</span>
        </div>
        <div className='max-w-[1280px] flex flex-wrap justify-between md:gap-4 mx-auto px-24 py-8'>
            <div className='flex flex-col flex-wrap justify-center items-center py-4 mx-auto'>
            <HiOutlineUserGroup size={50} />
                <p className='text-[#3b3a3a] font-bold text-xl sm:text-2xl md:text-3xl'>Membership <br />organization</p>
                <span className='text-sm font-light text-[#6e6a6a]'>Our membership management
                <br/> software provides full automation of
                <br /> membership renewals and payments
                </span>
            </div>
            <div className='md:px-24 md:py-8'>
              <Image src={suit_man} alt='man picture' className='w-72 h-72'/>
            </div>
            <div className='flex flex-col flex-wrap justify-center items-center py-4 mx-auto'>
              <GiRecycle size={50} />
              <p className='text-[#3b3a3a] font-bold text-xl sm:text-2xl md:text-3xl flex items-center justify-center'>Clubs And <br />Groups</p>
                <span className='text-sm font-light text-[#6e6a6a]'>Our membership management
                <br/> software provides full automation of
                <br /> membership renewals and payments
                </span>
            </div>
        </div>
    </div>
  )
}

export default Feedback