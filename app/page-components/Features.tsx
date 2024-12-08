import React from 'react'
import Image from 'next/image'

const Features = () => {

    return (


        <>
            <div className='px-[24px] py-[49px] lg:py-[80px] lg:px-[82px]'>
                <h4 className='lg:text-center font-normal lg:text-[24px] tex-[20px]  lg:leading-[33.6px] leading-7 text-[#2A254B]'>What makes our brand different</h4>

                <div className='mt-[36px] lg:mt-[57px] flex flex-col lg:flex-row lg:gap-[22px] gap-[26px]'>
                    {/* 1 */}
                    <div className='lg:p-[48px] py-[28px] px-6 bg-[#F9F9F9] '>
                        <div className='flex flex-col gap-3'>
                            <Image src="/different-1.svg" alt='Delivery' width={24} height={24}></Image>
                            <h4 className='text-[20px] text-[#2A254B] leading-7 font-normal '>Next day as standard</h4>
                            <p className='text-[16px] text-[#2A254B] leading-6 font-normal'>Order before 3pm and get your order the next day as standard</p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className=' lg:p-[48px] py-[28px] px-6 bg-[#F9F9F9] '>
                        <div className='flex flex-col gap-3'>
                            <Image src="/different-2.svg" alt='Checkmark--outline' width={24} height={24}></Image>
                            <h4 className='text-[20px] text-[#2A254B] leading-7 font-normal '>Made by true artisans</h4>
                            <p className='text-[16px] text-[#2A254B] leading-6 font-normal'>Handmade crafted goods made with real passion and craftmanship</p>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className='lg:p-[48px] py-[28px] px-6 bg-[#F9F9F9] '>
                        <div className='flex flex-col gap-3'>
                            <Image src="/different-3.svg" alt='Purchase' width={24} height={24}></Image>
                            <h4 className='text-[20px] text-[#2A254B] leading-7 font-normal '>Unbeatable prices</h4>
                            <p className='text-[16px] text-[#2A254B] leading-6 font-normal'>For our materials and quality you won&apos;t find better prices anywhere</p>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className='lg:p-[48px] py-[28px] px-6 bg-[#F9F9F9] '>
                        <div className='flex flex-col gap-3'>
                            <Image src="/different-4.svg" alt='Sprout' width={24} height={24}></Image>
                            <h4 className='text-[20px] text-[#2A254B] leading-7 font-normal '>Next day as standard</h4>
                            <p className='text-[16px] text-[#2A254B] leading-6 font-normal'>We use 100% recycled to ensure our footprint is more manageable</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Features