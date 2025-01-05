"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

const CartProducts = () => {
    const [products, setProducts] = useState<any[]>();

    useEffect(() => {
        const fetchProducts = async () => {
            const cart = JSON.parse(localStorage.getItem('cart')!);
            if (cart) {
                let cartProducts = await client.fetch(`
                    *[_type == "Product" && id in $cart] {
                        id,
                        productName,
                        Productprice,
                        Productdetail,
                        "imageUrl": ProductImage.asset->url
                    }`
                    , { cart }
                );
                cartProducts = cartProducts.map((product: any) => ({ ...product, quantity: 1 }));
                setProducts(cartProducts);
            } else {
                alert('Cart is empty');
            }
        };
        fetchProducts();
    }, []);

    const increment = (i: number) => {
        const temp: any[] = products ? [...products] : [];
        temp[i].quantity && temp[i].quantity++;
        setProducts(temp);
    };
    const decrement = (i: number) => {
        const temp: any[] = products ? [...products] : [];
        (temp[i].quantity && temp[i].quantity > 1) && temp[i].quantity--;
        setProducts(temp);
    };

    const totalAmount = (): number => {
        return products?.reduce((acc, product) => acc + product.quantity * product.Productprice, 0);
    };

    const handleCheckout = () => {
        localStorage.removeItem('cart');
        setProducts([]);
    };

    return (
        <>
            <table className="mt-12 w-full">
                <thead className="max-sm:hidden">
                    <tr className="border-b border-[--border-gray] *:pb-4 body-sm">
                        <td>Product</td>
                        <td>Quantity</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                    {products?.map((product: any, i: any) => (
                        <tr className="sm:*:pt-5" key={product.id}>
                            <td>
                                <div className="flex gap-x-[21px] sm:items-center">
                                    <Image src={product.imageUrl} alt="Failed to load" width={64} height={64} className="size-16" />
                                    <div className="space-y-2 max-sm:mt-[19px] grow">
                                        <h4 className="text-[16px] leading-[20px]">{product.productName}</h4>
                                        <div>
                                            <p>£{product.Productprice}</p>
                                            <div className="py-3 px-4 sm:hidden flex items-center gap-x-8">
                                                <button onClick={() => increment(i)}>+</button>
                                                <span>{product.quantity}</span>
                                                <button onClick={() => decrement(i)}>-</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="py-3 px-4 max-sm:hidden flex items-center gap-x-8">
                                    <button onClick={() => increment(i)}>+</button>
                                    <span>{product.quantity}</span>
                                    <button onClick={() => decrement(i)}>-</button>
                                </div>
                            </td>
                            <td className="max-sm:hidden text-center sm:w-28">£{product.quantity * product.Productprice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pt-7 pb-[55px] sm:pb-[48px] w-fit ml-auto">
                <div className="space-y-3">
                    <div className="flex gap-x-4 items-center w-fit ml-auto">
                        <h4 className="text-[--primary]">Subtotal</h4>
                        <h3 className="text-[--dark-primary]">£{totalAmount()}</h3>
                    </div>
                    <p className="max-sm:whitespace-nowrap max-sm:w-fit ml-auto text-sm text-[--primary]">
                        Taxes and shipping are calculated at checkout
                    </p>
                </div>
                <Link href="/">
                    <button
                        type="button"
                        onClick={handleCheckout}
                        className="bg-[--dark-primary] max-sm:w-full block w-fit ml-auto text-white py-4 mt-8 sm:mt-4 px-[117px] sm:px-[48px]"
                    > Go to checkout
                    </button>
                </Link>
            </div>
        </>
    );
};

export default CartProducts;
