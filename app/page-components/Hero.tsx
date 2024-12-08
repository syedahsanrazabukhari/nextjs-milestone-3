import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div>
            {/* for desktop */}
            <div className='hidden lg:block lg:bg-heroImage bg-cover bg-center lg:h-[704px] lg:w-full lg:py-[130px] lg:pl-[730px] lg:pr-[80px]'>

                <div className=' bg-white pl-[53px] py-[47px]'>
                    <div className='mb-[157px]'>
                        <h2 className='font-normal text-[32px] leading-[44.8px] text-[#22202E] mb-5'>Luxury homeware for people who love timeless design quality</h2>
                        <p className='font-normal text-[18px] leading-[27px] text-[#5B5676]'>Shop the new Spring 2022 collection today</p>
                    </div>
                    <button className='py-4 px-8 flex gap-5 bg-[#F9F9F9] text-[#2A254B] '>
                        View collection
                    </button>
                </div>

            </div>
            {/* for mobile */}
            <div className='lg:hidden w-[390px] '>
                <div className='w-[341px] mx-[23px] mt-[47px] mb-8 flex flex-col gap-8'>
                        <h2 className='font-normal text-[24px] leading-[29.52px] text-[#22202E] '>Luxury homeware for people who love timeless design quality</h2>
                        <p className='font-normal text-[16px] leading-[21.6px] text-[#5B5676]'>With our new collection, view over 400 bespoke pieces from homeware through to furniture today</p>
                    <button className='w-full h-[56px] flex items-center justify-center gap-5  bg-[#F9F9F9] text-[#2A254B] '>
                        View collection
                    </button>
                </div>
                <Image src="/hero2.png" alt="Hero Image" width={390} height={304}></Image>
            </div>

        </div>
    )
}

export default Hero