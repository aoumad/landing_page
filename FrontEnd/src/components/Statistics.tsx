import React from 'react'
import { GoProjectSymlink } from "react-icons/go";
import { RiGroupLine } from "react-icons/ri";
import { IoGitNetworkOutline } from "react-icons/io5";
import { BsWallet2 } from "react-icons/bs";

function Statistics() {
  return (
    <div className='w-full flex flex-col md:flex-row place-content-between gap-y-6 md:gap-y-0 my-24 px-36'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[#3b3a3a] font-bold text-xl sm:text-3xl'>Helping a local
            <span className='text-[#4CAF4F] '>  business <br /> to reinvent itself globally</span>
            </h1>
            <span>We reached here with our hard work and dedication</span>
        </div>
        <div className='grid grid-cols-2 gap-4 h-12 place-content-evenly gap-24 mr-8 justify-center items-center'>
            <div className='flex flex-row gap-3 items-center'>
              <RiGroupLine size={30}/>
              <div className='flex flex-col'>
                <span className='font-bold text-[#3b3a3a] text-xl sm:text-2xl'>2,245,341</span>
                <span className='font-light text-sm'>Founders</span>
              </div>
            </div>

            <div className='flex flex-row gap-3 items-center'>
            <IoGitNetworkOutline size={30}/>
              <div className='flex flex-col'>
                <span className='font-bold text-[#3b3a3a] text-xl sm:text-2xl'>2,245,341</span>
                <span className='font-light text-sm'>Founders</span>
              </div>
            </div>

           <div className='flex flex-row gap-3 items-center'>
           <GoProjectSymlink size={30}/>
              <div className='flex flex-col'>
                <span className='font-bold text-[#3b3a3a] text-xl sm:text-2xl'>2,245,341</span>
                <span className='font-light text-sm'>Founders</span>
              </div>
            </div>

            <div className='flex flex-row gap-3 items-center'>
              <BsWallet2 size={30}/>
              <div className='flex flex-col'>
                <span className='font-bold text-[#3b3a3a] text-xl sm:text-2xl'>2,245,341</span>
                <span className='font-light text-sm'>Founders</span>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Statistics