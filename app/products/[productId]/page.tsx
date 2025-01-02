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
    "imageUrl": ProductImage.asset->url  
  }`);

    console.log(product);



    return (
        <>
            <Navbar />
            <h1>{product[0].productName}</h1>
            <p>£{product[0].Productprice}</p>
            <Image src={product[0].imageUrl} alt="product Image" width={305} height={375} />
            <Footer />
        </>
    )
}