import CartProducts from "@/components/CartProducts";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function Cart() {


    return (
        <>
            <Navbar />


            <main>
                <section className="pt-9 sm:pt-16 pl-6 sm:pl-[188px] pr-6 sm:pr-[193px] bg-[--light-gray]">
                    <h1 className="max-sm:text-[24px]">Your shopping cart</h1>

                    <CartProducts />
                </section>
            </main>


            <Footer />
        </>
    );
}