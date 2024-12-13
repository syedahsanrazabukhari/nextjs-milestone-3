import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
        <>
            {/* header */}
            <header className='bg-[--dark-primary] py-3 flex justify-between max-sm:px-4 sm:justify-center'>
                <div className='flex gap-x-2 items-center'>
                    <Image src="/delivery.svg" alt="failed" width={16} height={16} />
                    <p className='body-sm text-white'>Free delivery on all orders over £50 with code easter checkout</p>
                </div>
                <Image className='sm:absolute right-4' src="/close.svg" alt="failed" width={24} height={24} />
            </header>




            {/* Navbar */}
            <nav>
                <div className="px-6 sm:px-7 py-5 flex justify-between items-center">
                    <Link href="/"> <Image src="/avion-logo.png" alt="Image failed" width={65} height={30} /></Link>

                    <div className='flex gap-x-12 items-center'>
                        <ul className="flex gap-x-8 text-[#726E8D] max-sm:hidden">
                            <li>About us</li>
                            <li>Contact</li>
                            <li>Blog</li>
                        </ul>

                        <div className="flex gap-x-4 max-sm:hidden">
                            <Image src="/nav-search.svg" alt="Image failed" width={16} height={16} />
                            <Image src="/nav-cart.svg" alt="Image-failed" width={16} height={16} />
                            <Image src="/nav-user.svg" alt="Image-failed" width={16} height={16} />
                        </div>

                        <Image src="/nav-hamburger.svg" alt="Image failed" width={16} height={16} className="sm:hidden" />
                    </div>
                </div>


                <ul className="flex gap-x-11 sm:justify-center text-[#726E8D] max-sm:px-6 py-4 sm:py-5 bg-[--light-gray] *:w-max *:shrink-0 max-sm:overflow-x-auto">
                    <li>All products</li>
                    <li>Plant pots</li>
                    <li>Ceramics</li>
                    <li>Tables</li>
                    <li>Chairs</li>
                    <li>Crockery</li>
                    <li>Tableware</li>
                    <li>Cutlery</li>
                </ul>
            </nav>




            <main>
                <section className='max-sm:space-y-10 px-6 sm:px-[128px] py-8 sm:py-[88px] sm:flex justify-between'>
                    <h1 className='sm:w-[704px]'>A brand built on the love of craftmanship, quality and outstanding customer service</h1>
                    <button className="btn btn-secondary max-sm:w-full max-sm:text-center">View our products</button>
                </section>



                <section className='py-8 sm:py-[60px] px-6 sm:px-20 sm:grid grid-cols-2 gap-x-4 max-sm:space-y-6'>
                    <div className='bg-[--dark-primary] py-9 px-8 sm:p-16 max-sm:space-y-14 sm:flex flex-col justify-between items-start'>
                        <div className='space-y-3 text-white'>
                            <h4 className='sm:hidden'>It started with a small idea</h4>
                            <h2 className='max-sm:hidden'>It started with a small idea</h2>
                            <p className='body-sm sm:hidden'>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
                            <p className='body-lg max-sm:hidden'>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
                        </div>

                        <button className='btn btn-opaque max-sm:w-full max-sm:text-center'>View collection</button>
                    </div>
                    <div>
                        <Image src="/about.png" alt="failed" width={630} height={478} />
                    </div>
                </section>



                <section className='sm:grid grid-cols-2'>
                    <Image src="/about-2.png" alt="failed" width={720} height={603} />

                    <div className='bg-[--light-gray] px-6 sm:pl-[84px] sm:pr-[100px] py-12 sm:pt-[72px] sm:pb-14 space-y-12 sm:space-y-[25px] flex flex-col justify-between'>
                        <div className='space-y-3'>
                            <h3 className='text-[--dark-primary]'>Our service isn’t just personal, it’s actually hyper personally exquisite</h3>
                            <p className='text-[#505977]'>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. </p>
                            <p className='text-[#505977]'>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                        </div>
                        <div>
                            <button className='btn btn-primary max-sm:w-full max-sm:text-center'>Get in touch</button>
                        </div>
                    </div>
                </section>




                <section>
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
                </section>





                <section className='sm:py-[52px] sm:px-[72px] sm:bg-[--light-gray]'>
                    <div className='py-12 sm:py-16 max-sm:px-9 bg-white space-y-[72px]'>
                        <div className='space-y-4 sm:w-[571px] sm:mx-auto sm:text-center'>
                            <h1>Join the club and get the benefits</h1>
                            <p className='text-center'>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                        </div>

                        <form className="sm:w-[472px] flex mx-auto">
                            <input type="email" placeholder="your@email.com" className="py-4 px-6 sm:px-8 bg-[--light-gray] grow" />
                            <button type="submit" className="btn btn-blue">Sign up</button>
                        </form>
                    </div>
                </section>

            </main>

            {/* <footer> */}
            <footer className='bg-[--dark-primary] pt-10 sm:pt-[53px] pr-[65px] sm:pr-[168px]  pl-6  sm:pl-[80px]'>
                <section className='text-white grid grid-cols-2 gap-x-[29px] sm:flex justify-between'>
                    <div className='space-y-4'>
                        <h1>Avion</h1>
                        <ul className='space-y-3'>
                            <li>21 New York Street</li>
                            <li>New York City</li>
                            <li>United States of America</li>
                            <li>432 34</li>
                        </ul>
                    </div>

                    <div className='space-y-[22px]'>
                        <p>Social links</p>
                        <div className='sm:flex gap-x-6 grid grid-cols-3 gap-y-6 '>
                            <Image src="/Logo--linkedin.svg" alt="failed" width={24} height={24} />
                            <Image src="/Logo--facebook.svg" alt="failed" width={24} height={24} />
                            <Image src="/Logo--instagram.svg" alt="failed" width={24} height={24} />
                            <Image src="/Logo--skype.svg" alt="failed" width={24} height={24} />
                            <Image src="/Logo--twitter.svg" alt="failed" width={24} height={24} />
                            <Image src="/Logo--pinterest.svg" alt="failed" width={24} height={24} />
                        </div>
                    </div>
                    <div className='space-y-3  max-sm:mt-[50px]' >
                        <p>Menu</p>
                        <ul className='text-sm space-y-3'>
                            <li>New arrivals</li>
                            <li>Best sellers</li>
                            <li>Recently viewed</li>
                            <li>Recently viewed</li>
                            <li>All products</li>
                        </ul>
                    </div>
                    <div className='space-y-3 max-sm:hidden '>
                        <p>Categories</p>
                        <ul className='text-sm space-y-3'>
                            <li>Crockery</li>
                            <li>Furniture</li>
                            <li>Homeware</li>
                            <li>Plant pots</li>
                            <li>Chairs</li>
                            <li>Crockery</li>
                        </ul>
                    </div>


                    <div className='space-y-3   max-sm:mt-[50px]'>
                        <p>Our company</p>
                        <ul className='text-sm space-y-3'>
                            <li>About us</li>
                            <li>Vacancies</li>
                            <li>Contact us</li>
                            <li>Privacy</li>
                            <li>Returns policy</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <div className='mt-[67px] border-b border-[--primary]' />
                </section>
                <p className='text-white mt-4 max-sm:text-center' >Copyright 2022 Avion LTD</p>

            </footer>
        </>

    )
}

export default About