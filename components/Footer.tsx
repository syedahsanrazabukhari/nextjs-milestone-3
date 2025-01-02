import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-[--dark-primary] text-white pt-[40px] sm:pt-[58px] pb-6 px-6 sm:px-[82px]">
            <section className="grid grid-cols-2 gap-x-[96px] sm:flex sm:justify-between pb-12 border-b border-[--primary]">

                <div className="space-y-3 max-sm:w-max">
                    <h5>Menu</h5>
                    <ul className="space-y-3">
                        <li>New arrivals</li>
                        <li>Best sellers</li>
                        <li>Recently viewed</li>
                        <li>Popular this week</li>
                       <Link href="/products"> <li>All products</li></Link>
                    </ul>
                </div>

                <div className="space-y-3 max-sm:-order-1">
                    <h5>Categories</h5>
                    <ul className="space-y-3">
                        <li>Crockery</li>
                        <li>Furniture</li>
                        <li>Homeware</li>
                        <li>Plant pots</li>
                        <li>Chairs</li>
                        <li>Crockery</li>
                    </ul>
                </div>

                <div className="space-y-3 max-sm:mt-10">
                   <Link href="/"> <h5>Our company</h5></Link>

                    <ul className="space-y-3">
                        <Link href="/about"><li>About us</li></Link>
                        <li>Vacancies</li>
                        <li>Contact us</li>
                        <li>Privacy</li>
                        <li>Returns policy</li>
                    </ul>
                </div>

                <div className="space-y-4 col-span-2 max-sm:mt-10">
                    <h5>Join our mailing list</h5>

                    <form className=" flex">
                        <input type="email" placeholder="your@email.com" className="py-4 px-6 sm:px-8 bg-[#ffffff26] grow" />
                        <button type="submit" className="btn btn-primary text-nowrap">Sign up</button>
                    </form>
                </div>
            </section>




            <section className="pt-6 flex sm:justify-between items-center justify-center">
                <p className="body-sm">Copyright 2022 Avion LTD</p>

                <div className="flex gap-x-6 max-sm:hidden">
                    <Image src="/facebook.svg" alt="facebook" width={24} height={24} />
                    <Image src="/instagram.svg" alt="instagram" width={24} height={24} />
                    <Image src="/linkedin.svg" alt="linkedin" width={24} height={24} />
                    <Image src="/pinterest.svg" alt="pinterest" width={24} height={24} />
                    <Image src="/skype.svg" alt="skype" width={24} height={24} />
                    <Image src="/twitter.svg" alt="twitter" width={24} height={24} />
                </div>
            </section>
        </footer>
    )
}
