
import MainSlider from "./ui/MainSlider";
import ProductCard from "./(main)/products/ProductCard";
import { FaProductHunt } from "react-icons/fa";
import { IProduct } from "./types/productCard.type";
import getUserCart from "@/cart";


export default async function Home() {
  
  const cartData = await getUserCart();
  console.log(cartData);
  
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/products",{
     cache : "force-cache",
  });
  const {data} = await res.json();
  console.log(data);
  

  return (
   <main className="container mx-auto">
     <MainSlider/>
     <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
       {data.map((product : IProduct)=><ProductCard key={product._id} product={product} />)}
     </section>
   </main>
  );
}
