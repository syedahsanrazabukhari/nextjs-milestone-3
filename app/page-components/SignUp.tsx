import React from 'react'
import { IoCheckmarkCircle } from "react-icons/io5";

const SignUp = () => {
    return (
        
        <div className='bg-SignUp bg-cover bg-center h-[373px] w-[390px] lg:h-[444px] lg:w-full lg:pt-[97px] pt-[24px]'>
            <div className='w-[329px]  lg:w-[494px]  lg:ml-[473px] ml-[24px] flex flex-col gap-5  lg:gap-[30px] '>
                <h2 className='w-full lg:text-[32px] text-[24px] leading-[33.6px] lg:leading-[44.8px] lg:text-center font-normal text-white'>
                    Join the club and get the benefits</h2>
                <p className='lg:text-[18px] text-[14px] leading-[21px] lg:leading-[27px] lg:text-center font-normal text-white'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                <div className='flex flex-col lg:flex-row lg:gap-[36px] '>
                    <div className='flex lg:gap-1 gap-2'>
                        <IoCheckmarkCircle className='text-white flex  items-center mt-1' size={16} />
                        <p className='text-[16px] leading-6 text-center'>Exclusive offers</p>
                    </div>
                    <div className='flex lg:gap-1 gap-2'>
                        <IoCheckmarkCircle className='text-white flex  items-center mt-1' size={16} />
                        <p className='text-[16px] leading-6 text-center'>Free events</p>
                    </div>
                    <div className='flex lg:gap-1 gap-2'>
                        <IoCheckmarkCircle className='text-white flex  items-center mt-1' size={16} />
                        <p className='text-[16px] leading-6 text-center'>Large discounts</p>
                    </div>
                </div>

            </div>

            <div className='flex lg:ml-[473px] mx-[24px] mt-[28px] lg:mt-10'>
            <div className='lg:w-[354px] h-[56px] w-[224px] bg-[#F9F9F9] '>
                <input type="text" placeholder='your@email.com' className='bg-transparent h-full w-full pl-[32px] text-[#00000066] border-none' />
            </div>
            <button className='font-normal h-[56px] text-[16px] leading-6 py-4 lg:px-8 px-5 flex gap-[10px] bg-[#2A254B] text-white'>Sign up</button>

            </div>
           
        </div>
    )
}

export default SignUp