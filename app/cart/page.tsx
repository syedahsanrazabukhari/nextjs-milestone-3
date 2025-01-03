"use client"; // Ensure this is the first line

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function Cart() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        setQuantity(quantity > 1 ? quantity - 1 : 1); // Prevent negative quantities
    };

    interface QuantityEvent extends React.ChangeEvent<HTMLInputElement> { }

    const handleQuantity = (e: QuantityEvent) => {
        setQuantity(Number(e.target.value));
    };

    const products = { price: 85 }; 

    return (
        <>
            <Navbar />
            <main>
                <section className="pt-9 sm:pt-16 pl-6 sm:pl-[188px] pr-6 sm:pr-[193px] bg-[--light-gray]">
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
                            <tr className="sm:*:pt-5">
                                <td>
                                    <div className="flex gap-x-[21px] sm:items-center">
                                        <img src="/cart-1.svg" alt="Failed to load" />
                                        <div className="space-y-2 max-sm:mt-[19px]">
                                            <h4 className="text-[16px] leading-[20px]">Graystone vase</h4>
                                            <p className="text-sm w-[179px]">A timeless ceramic vase with a tri color grey glaze.</p>
                                            <p>£85</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="py-3 px-4 max-sm:hidden flex items-center gap-x-8">
                                        <button onClick={increment} className="text-black">+</button>
                                        <span>{quantity}</span>
                                        <button onClick={decrement} className="text-black">-</button>
                                    </div>
                                </td>
                                <td className="max-sm:hidden">{quantity*products.price}</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="pt-7 pb-[55px] sm:pb-[48px] w-fit ml-auto">
                        <div className="space-y-3">
                            <div className="flex gap-x-4 items-center w-fit ml-auto">
                                <h4 className="text-[--primary]">Subtotal</h4>
                                <h3 className="text-[--dark-primary]">£{85 * quantity}</h3>
                            </div>
                            <p className="max-sm:whitespace-nowrap max-sm:w-fit ml-auto text-sm text-[--primary]">
                                Taxes and shipping are calculated at checkout
                            </p>
                        </div>
                        <Link href="/">
                            <button type="submit" className="bg-[--dark-primary] max-sm:w-full block w-fit ml-auto text-white py-4 mt-8 sm:mt-4 px-[117px] sm:px-[48px]">
                                Go to checkout
                            </button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
