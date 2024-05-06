import React from 'react'
import Logo from '@/assets/logo.png'
import Image from 'next/image';
function SponsorLIst() {
    const sponsorLogos = [Logo, Logo, Logo,Logo, Logo, Logo, Logo,Logo, Logo, Logo,Logo, Logo, Logo];
  return (
    <div className='flex flex-col bg-white'>
        <div className='flex flex-col flex-start justify-center items-center w-full py-16 px-4'>
            <h1 className='text-[#6e6a6a] font-bold text-3xl md:text-4xl'>Notre viviers de startup</h1>
            <span className='text-[#6e6a6a] font-light text-sm'>We have been working with more than 50 startups</span>
        </div>
        <div className='flex flex-row flex-start md:justify-center items-center overflow-x-auto scrollbar-hide'>
            {sponsorLogos.map((logo, index) => (
                <Image key={index} src={logo} alt={`Sponsor ${index}`}
                        className='w-24 h-24 mx-4'
                />
            ))}
        </div>
    </div>
  )
}

export default SponsorLIst