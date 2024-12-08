import { Footer, Navbar } from "@/components";
import Image from "next/image";

interface ProductCard {
  name: string;
  price: number;
  image: string;
}

const products: ProductCard[] = [
  {
    name: "The Dandy chair",
    price: 250,
    image: "/products/product-1.png"
  },
  {
    name: "Rustic Vase Set",
    price: 155,
    image: "/products/product-2.png"
  },
  {
    name: "The Silky Vase",
    price: 125,
    image: "/products/product-3.png"
  },
  {
    name: "The Lucy Lamp",
    price: 399,
    image: "/products/product-4.png"
  },
  {
    name: "The Dandy chair",
    price: 250,
    image: "/products/product-5.png"
  },
  {
    name: "Rustic Vase Set",
    price: 155,
    image: "/products/product-6.png"
  },
  {
    name: "The Silky Vase",
    price: 125,
    image: "/products/product-7.png"
  },
  {
    name: "The Lucy Lamp",
    price: 399,
    image: "/products/product-8.png"
  },
  {
    name: "The Dandy chair",
    price: 250,
    image: "/products/product-1.png"
  },
  {
    name: "Rustic Vase Set",
    price: 155,
    image: "/products/product-2.png"
  },
  {
    name: "The Silky Vase",
    price: 125,
    image: "/products/product-3.png"
  },
  {
    name: "The Lucy Lamp",
    price: 399,
    image: "/products/product-4.png"
  }
];


export default function Home() {
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
        <section className="px-6 sm:px-20 py-7 sm:pb-10 space-y-10 sm:space-y-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 sm:gap-x-5 gap-y-5 sm:gap-y-12">
            {products.map((product: ProductCard, i: number) => (
              <div key={i}>
                <Image src={product.image} alt="Failed to load" width={305} height={375} />
                <h4 className="mt-6">{product.name}</h4>
                <p className="body-lg mt-2">£{product.price}</p>
              </div>
            ))}
          </div>

          <button className="btn btn-secondary max-sm:w-full sm:mx-auto sm:block">View collection</button>
        </section>
      </main>



      <Footer />
    </>
  );
}