import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Listing = () => {
  return (
    <>
      <div className='w-390 lg:w-full pt-6 pb-7 px-6 lg:px-[80px]'>
                <div className=' grid grid-cols-2 grid-rows-2 gap-[15px] lg:flex lg:gap-5 '>
                   {/* list 1 */}
                   <div className=' flex flex-col gap-2 lg:gap-6 text-[#2A254B]'>
                         <Image src="home-product-1.svg" alt='List Card1' width={100} height={100} className='w-[163px] h-[201px] lg:w-[305px] lg:h-[375px]'></Image>
                         <h4 className='text-[20px] leading-7 font-normal'>Rustic Vase Set</h4>
                        <p className='text-[18px] leading-7 font-normal'>£399</p>
                   </div>
                     {/* list 2 */}
                     <div className=' flex flex-col gap-2 lg:gap-6 text-[#2A254B]'>
                         <Image src="home-product-2.svg" alt='List Card2' width={163} height={201} className='w-[163px] h-[201px] lg:w-[305px] lg:h-[375px]'></Image>
                         <h4 className='text-[20px] leading-7 font-normal'>Rustic Vase Set</h4>
                        <p className='text-[18px] leading-7 font-normal'>£399</p>
                   </div>  {/* list 3 */}
                   <div className=' flex flex-col gap-2 lg:gap-6 text-[#2A254B]'>
                         <Image src="home-product-3.svg" alt='List Card3' width={163} height={201} className='w-[163px] h-[201px] lg:w-[305px] lg:h-[375px]'></Image>
                         <h4 className='text-[20px] leading-7 font-normal'>Rustic Vase Set</h4>
                        <p className='text-[18px] leading-7 font-normal'>£399</p>
                   </div>  {/* list 4 */}
                   <div className=' flex flex-col gap-2 lg:gap-6 text-[#2A254B]'>
                         <Image src="home-product-4.svg" alt='List Card4' width={163} height={201} className='w-[163px] h-[201px] lg:w-[305px] lg:h-[375px]'></Image>
                         <h4 className='text-[20px] leading-7 font-normal'>Rustic Vase Set</h4>
                        <p className='text-[18px] leading-7 font-normal'>£399</p>
                   </div>
                </div>       
               <Link href="/products"> <button className='py-4 px-[100px] mt-10 lg:px-8  mx-auto lg:mt-[48px] lg:mb-3 flex lg:gap-5 gap-[10px] items-center text-[16px] leading-6 font-normal  bg-[#F9F9F9] text-[#2A254B] '>
                        View collection
                </button>   </Link>     
      </div>
     
      
    </>
  )
}

export default Listing