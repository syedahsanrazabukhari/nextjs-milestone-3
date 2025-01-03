import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";



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


      <main>
        {/* Hero */}
        <section className="h-[146px] sm:h-[209px] bg-cover bg-center sm:pl-20 pb-8 sm:pb-9 content-end text-white max-sm:text-center" style={{ backgroundImage: "url(/product-hero-bg.jpeg)" }}>
          <h1>All products</h1>
        </section>

        {/* Cateogries */}
        <section className=" px-6 sm:px-6 py-5 sm:py-2 flex justify-between items-center">
          <ul className="flex gap-x-4 sm:gap-x-3">
            <li className="flex gap-x-2 items-center py-3 px-6 max-sm:hidden">
              <p>Category</p>
              <Image src="/caret-down.svg" alt="Failed to load" width={16} height={16} />
            </li>

            <li className="flex gap-x-2 items-center py-3 px-6 max-sm:hidden">
              <p>Product type</p>
              <Image src="/caret-down.svg" alt="Failed to load" width={16} height={16} />
            </li>

            <li className="flex gap-x-2 items-center py-3 sm:px-6 max-sm:bg-[--light-gray] max-sm:w-full max-sm:shrink-0 max-sm:justify-center">
              <p className="max-sm:hidden">Price</p>
              <p className="sm:hidden">Filters</p>
              <Image src="/caret-down.svg" alt="Failed to load" width={16} height={16} />
            </li>

            <li className="flex gap-x-2 items-center py-3 sm:px-6 max-sm:bg-[--light-gray] max-sm:w-full max-sm:shrink-0 max-sm:justify-center">
              <p className="max-sm:hidden">Brand</p>
              <p className="sm:hidden">Sorting</p>
              <Image src="/caret-down.svg" alt="Failed to load" width={16} height={16} />
            </li>
          </ul>

          <div className="flex items-center gap-x-4 max-sm:hidden">
            <span className="body-sm">Sorting by:</span>
            <div className="flex gap-x-2 items-center py-3 px-6">
              <p>Date added</p>
              <Image src="/caret-down.svg" alt="Failed to load" width={16} height={16} />
            </div>
          </div>
        </section>




        {/* Products */}
        <div className='w-390 lg:w-full pt-6 pb-7 px-6 lg:px-[80px]'>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[15px]'>
            {data.map((product: any) => (
              <Link href={`/products/${product.id}`}
                key={product.id}
                className='flex flex-col gap-2 lg:gap-6 text-[#2A254B] border shadow-xl transition-transform duration-300 hover:z-10 hover:scale-105 p-4 sm:p-6 rounded-lg'
              >
                {/* Render image */}
                <Image
                  src={product.imageUrl || 'default-image.jpg'} // Add fallback for missing image
                  alt={product.productName}
                  width={305}
                  height={375}
                  className='w-full'
                />
                <h4 className='text-[14px] lg:text-[20px] leading-5 lg:leading-7 font-normal'>{product.productName}</h4>
                <p className=' text-[12px] lg:text-[18px] leading-5 lg:leading-7 font-normal'>
                  {product.Productprice ? `£${product.Productprice}` : 'Price not available'}
                </p>
              </Link>
            ))}
          </div>
          <button className='py-4 px-[100px] mt-10 lg:px-8 mx-auto lg:mt-[48px] lg:mb-3 flex lg:gap-5 gap-[10px] items-center text-[16px] leading-6 font-normal bg-[#F9F9F9] text-[#2A254B]'>
            View collection
          </button>
        </div>
      </main>



      <Footer />
    </>
  );
}