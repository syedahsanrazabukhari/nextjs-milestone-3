// usecl
// import { useEffect, useState } from "react";

// // Async function to fetch product data
// async function fetchProductData() {
//     const res = await fetch('/api/products'); // Replace with your actual API endpoint
//     const data = await res.json();
//     return data;
// }

// interface Product {
//     id: string;
//     name: string;
//     price: number;
// }

// export default function ProductCart() {
//     const [product, setProduct] = useState<Product | null>(null);

//     useEffect(() => {
//         const fetchData = async () => {
//             const productData = await fetchProductData();
//             setProduct(productData);
//         };

//         fetchData();
//     }, []);

//     if (!product) return <div>Loading...</div>;

//     return (
//         <div>
//             <h4>{product.name}</h4>
//             <p>Price: £{product.price}</p>
//         </div>
//     );
// }