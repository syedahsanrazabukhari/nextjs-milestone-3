import { client } from "@/sanity/lib/client";
import { IoCheckmarkCircle } from "react-icons/io5";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const data = await client.fetch(`*[_type == "Product"]{
    id,
  productName,
  Productprice, 
  "imageUrl": ProductImage.asset->url  
}`);



  return (
    <>
      <Navbar />
      {/* hero section */}
      <div>
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
        <div className='lg:hidden w-[390px] '>
          <div className='w-[341px] mx-[23px] mt-[47px] mb-8 flex flex-col gap-8'>
            <h2 className='font-normal text-[24px] leading-[29.52px] text-[#22202E] '>Luxury homeware for people who love timeless design quality</h2>
            <p className='font-normal text-[16px] leading-[21.6px] text-[#5B5676]'>With our new collection, view over 400 bespoke pieces from homeware through to furniture today</p>
            <Link href="/products"> <button className='w-full h-[56px] flex items-center justify-center gap-5  bg-[#F9F9F9] text-[#2A254B] '>
              View collection
            </button></Link>
          </div>
          <Image src="/bg-hero.png" alt="Hero Image" width={390} height={304}></Image>
        </div>

      </div>

      {/* our services */}
      <div className='px-[24px] py-[49px] lg:py-[80px] lg:px-[82px]'>
        <h4 className='lg:text-center font-normal lg:text-[24px] tex-[20px]  lg:leading-[33.6px] leading-7 text-[#2A254B]'>What makes our brand different</h4>

        <div className='mt-[36px] lg:mt-[57px] flex flex-col lg:flex-row lg:gap-[22px] gap-[26px]'>

          <div className='lg:p-[48px] py-[28px] px-6 bg-[#F9F9F9] '>
            <div className='flex flex-col gap-3'>
              <Image src="/different-1.svg" alt='Delivery' width={24} height={24}></Image>
              <h4 className='text-[20px] text-[#2A254B] leading-7 font-normal '>Next day as standard</h4>
              <p className='text-[16px] text-[#2A254B] leading-6 font-normal'>Order before 3pm and get your order the next day as standard</p>
            </div>
          </div>

          <div className=' lg:p-[48px] py-[28px] px-6 bg-[#F9F9F9] '>
            <div className='flex flex-col gap-3'>
              <Image src="/different-2.svg" alt='Checkmark--outline' width={24} height={24}></Image>
              <h4 className='text-[20px] text-[#2A254B] leading-7 font-normal '>Made by true artisans</h4>
              <p className='text-[16px] text-[#2A254B] leading-6 font-normal'>Handmade crafted goods made with real passion and craftmanship</p>
            </div>
          </div>


          <div className='lg:p-[48px] py-[28px] px-6 bg-[#F9F9F9] '>
            <div className='flex flex-col gap-3'>
              <Image src="/different-3.svg" alt='Purchase' width={24} height={24}></Image>
              <h4 className='text-[20px] text-[#2A254B] leading-7 font-normal '>Unbeatable prices</h4>
              <p className='text-[16px] text-[#2A254B] leading-6 font-normal'>For our materials and quality you won&apos;t find better prices anywhere</p>
            </div>
          </div>

          <div className='lg:p-[48px] py-[28px] px-6 bg-[#F9F9F9] '>
            <div className='flex flex-col gap-3'>
              <Image src="/different-4.svg" alt='Sprout' width={24} height={24}></Image>
              <h4 className='text-[20px] text-[#2A254B] leading-7 font-normal '>Next day as standard</h4>
              <p className='text-[16px] text-[#2A254B] leading-6 font-normal'>We use 100% recycled to ensure our footprint is more manageable</p>
            </div>
          </div>
        </div>
      </div>



      {/* third section */}
      <div className='w-390 lg:w-full pt-6 pb-7 px-6 lg:px-[80px]'>
        <div className='grid grid-cols-2 grid-rows-2 gap-[15px] lg:flex lg:gap-5'>
          {data.slice(0, 4).map((product: any) => (
            <Link key={product._id} href={`/products/${product.id}`} className='flex flex-col gap-2 lg:gap-6 text-[#2A254B] border shadow-xl transition-transform duration-300 hover:z-10 hover:scale-105 p-4 sm:p-6 rounded-lg'>
              <Image
                src={product.imageUrl || 'default-image.jpg'}
                alt={product.productName}
                width={100}
                height={100}
                className='w-[163px] h-[201px] lg:w-[305px] lg:h-[375px]'
              />
              <h4 className='text-[20px] leading-7 font-normal'>{product.productName}</h4>
              <p className='text-[18px] leading-7 font-normal'>
                {product.Productprice ? `£${product.Productprice}` : 'Price not available'}
              </p>
            </Link>
          ))}
        </div>

        <Link href="/products">
          <button className='py-4 px-[100px] mt-10 lg:px-8 mx-auto lg:mt-[48px] lg:mb-3 flex lg:gap-5 gap-[10px] items-center text-[16px] leading-6 font-normal bg-[#F9F9F9] text-[#2A254B]'>
            View collection
          </button>
        </Link>
      </div>

      {/* fourth section */}
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




      {/* fifth section  */}

      <div className='bg-benefitHome bg-cover bg-center h-[373px] w-[390px] lg:h-[444px] lg:w-full lg:pt-[97px] pt-[24px]'>
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
          <button type='submit' className='font-normal h-[56px] text-[16px] leading-6 py-4 lg:px-8 px-5 flex gap-[10px] bg-[#2A254B] text-white'>Sign up</button>

        </div>

      </div>













      <Footer />
    </>
  );
}