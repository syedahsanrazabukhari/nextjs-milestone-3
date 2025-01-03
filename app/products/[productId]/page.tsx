import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import AddToCartBtn from "@/components/AddToCartBtn";

interface Params {
    params: Promise<{ productId: string }>
};

export default async function details({ params }: Params) {
    const { productId } = await params;
    const product = await client.fetch(`*[_type == "Product"  && id == ${productId}]{
    id,
    productName,
    Productprice, 
    Productdetail,
    "imageUrl": ProductImage.asset->url  
  }`);

    return (
        <>
            <Navbar />
            <section className="sm:flex items-center gap-x-16 py-12 sm:py-24 px-10 max-sm:space-y-6">
                <Image
                    src={product[0].imageUrl}
                    alt="product Image"
                    width={305}
                    height={375}
                    className="w-full" />
                <div className="space-y-4 flex flex-col items-start">
                    <h1 className="text-[37px] sm:text-[50px]">{product[0].productName}</h1>
                    <p className="text-black text-[20px] text-justify"><b>Details:</b> {product[0].Productdetail} </p>
                    <div className="flex gap-x-4  text-[20px] ">
                        <p className="font-bold">Price:</p>
                        <p>£{product[0].Productprice}</p>
                    </div>
                    <AddToCartBtn id={Number(productId)} />

                </div>
            </section>
            <Footer />
        </>
    )
}