import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
export default async function details({ params }: { params: { productId: string } }) {
    const { productId } = params;
    const product = await client.fetch(`*[_type == "Product"  && id == ${productId}]{
    id,
    productName,
    Productprice, 
    Productdetail,
    "imageUrl": ProductImage.asset->url  
  }`);

    console.log(product);



    return (
        <>
            <Navbar />
            <section className="flex items-center gap-x-16 py-24 px-10 ">
                <Image
                    src={product[0].imageUrl}
                    alt="product Image"
                    width={305}
                    height={375}
                    className="" />
                <div className="space-y-4 flex flex-col items-start">
                    <h1 className="text-[50px]">{product[0].productName}</h1>
                    <p className="text-black text-[20px]"><b>Details:</b> {product[0].Productdetail} </p>
                    <div className="flex gap-x-4  text-[20px] ">
                        <p className="font-bold">Price:</p>
                        <p>£{product[0].Productprice}</p>
                    </div>
                    <button className="py-4 px-10 flex items-center gap-x-2  rounded-lg text-black">
                        <Image src="/nav-cart.svg" alt="cart" width={30} height={30} />
                        <p>Add to Cart</p>
                    </button>

                </div>
            </section>
            <Footer />
        </>
    )
}