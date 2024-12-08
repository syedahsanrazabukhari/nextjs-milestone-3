import { Footer, Navbar } from "@/components";

export default function Cart() {
    return (
        <>
            <Navbar />



            
            <main>
                <section className=" pt-9 sm:pt-16 pl-6 sm:pl-[188px] pr-6 sm:pr-[193px] bg-[--light-gray] ">
                    <h1 className="max-sm:text-[24px]">Your shopping cart</h1>

                    <table className="mt-12 w-full">
                        <thead className="max-sm:hidden">
                            <tr className="border-b border-[--border-gray] *:pb-4 body-sm">
                                <td>Product</td>
                                <td>Quantity</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" sm:*:pt-5 ">
                                <td>
                                    <div className="flex gap-x-[21px] sm:items-center">
                                        <img src="/cart-1.svg" alt="Failed to load" />
                                        <div className="space-y-2 max-sm:mt-[19px]">
                                            <h4 className="text-[16px] leading-[20px]">Graystone vase</h4>
                                            <p className="text-sm w-[179px]">A timeless ceramic vase with
                                                a tri color grey glaze.</p>
                                            <p >£85</p>
                                            <div className="py-3 px-4  max-sm:visible flex items-center gap-x-8">
                                                <span className="text-[--border-gray]">+</span>
                                                <span>1</span>
                                                <span className="text-[--border-gray]">-</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="py-3 px-4 max-sm:hidden flex items-center gap-x-8">
                                        <span className="text-[--border-gray]">+</span>
                                        <span>1</span>
                                        <span className="text-[--border-gray]">-</span>
                                    </div>
                                </td>

                                <td className="max-sm:hidden">£85</td>
                            </tr>

                            <tr className=" sm:*:pt-5 border-b border-[--border-gray] *:pb-4 ">
                                <td className="">
                                    <div className="flex gap-x-[21px] sm:items-center">
                                        <img src="/cart-2.svg" alt="Failed to load" />
                                        <div className="space-y-2 max-sm:mt-[17px]">
                                            <h4 className="text-[16px] leading-[20px]">Basic white vase</h4>
                                            <p className="text-sm w-[179px]">ABeautiful and simple this is
                                                one for the classics</p>
                                            <p >£85</p>
                                            <div className="py-3 px-4  max-sm:visible flex items-center gap-x-8">
                                                <span className="text-[--border-gray]">+</span>
                                                <span>1</span>
                                                <span className="text-[--border-gray]">-</span>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="py-3 px-4 max-sm:hidden flex items-center gap-x-8">
                                        <span className="text-[--border-gray]">+</span>
                                        <span>1</span>
                                        <span className="text-[--border-gray]">-</span>
                                    </div>
                                </td>

                                <td className="max-sm:hidden">£85</td>
                            </tr>
                        </tbody>
                    </table>


                    <div className="pt-7 pb-[55px] sm:pb-[48px] w-fit ml-auto">
                        <div className="space-y-3">
                            <div className="flex gap-x-4 items-center w-fit ml-auto">
                                <h4 className="text-[--primary]"> Subtotal</h4>
                                <h3 className=" text-[--dark-primary]">£210</h3>
                            </div>
                            <p className="max-sm:whitespace-nowrap max-sm:w-fit ml-auto text-sm text-[--primary]">Taxes and shipping are calculated at checkout</p>
                        </div>
                        <button type="submit" className="bg-[--dark-primary] max-sm:w-full block w-fit ml-auto text-white py-4 mt-8 sm:mt-4 px-[117px] sm:px-[48px]">Go to checkout</button>
                    </div>
                </section>
            </main>





            <Footer />
        </>
    )
}