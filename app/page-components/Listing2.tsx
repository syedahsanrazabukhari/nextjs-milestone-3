import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Listing2 = () => {
  return (
    <>
      <div className='px-8 py-6 lg:px-[80px] lg:py-[60px] flex flex-col lg:flex-row lg:gap-4 gap-6'>
      <div className='lg:w-[643px] lg:h-[478px]  bg-[#2A254B] lg:pl-[64px] px-[32px] pt-[36px] lg:py-[64px] '>
                    <div className='mb-[56px] lg:mb-[205px]'>
                        <h4 className='font-normal lg:text-[32px] text-[20px] leading-7 lg:leading-[39.63px] text-white mb-5'>It started with a small idea</h4>
                        <p className='font-normal lg:text-[18px] tex-[14px] leading-[21px] lg:leading-[24.3px] text-[white]'>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
                    </div>
                   <Link href="/products"> <button className='py-4 px-[66px] mb-[30px]  lg:px-8 lg:mt-[48px] lg:mb-3 flex lg:gap-5 gap-[10px]  text-[16px] leading-6 font-normal  bg-[#F9F9F926] text-white'>
                        View collection
                    </button></Link>
      </div>
      <Image src="/about.png" alt='Listing2' width={643} height={478} className='hidden lg:block'></Image>
      <Image src="/about.png" alt='Listing2' width={342} height={259} className='lg:hidden block w-[342px]'></Image>
    

      </div>
    </>
  )
}

export default Listing2