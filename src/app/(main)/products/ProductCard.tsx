"use client"
import React from "react";
import { FaStar } from 'react-icons/fa';
import  Image  from 'next/image';
import { IProduct } from "@/app/types/productCard.type";

export default function ProductCard({product} : {product : IProduct} ) {
  function truncateText(text: string, maxLength: number) {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
  return (
    <div className="bg-zinc-100 shadow-md rounded-2xl overflow-hidden px-2 pb-2 flex flex-col">
  <Image
    src={product?.imageCover}
    alt={product.title}
    width={220}
    height={300}
    className="w-full h-64 object-contain rounded-[35px]"
  />
  <a href={product._id} className="text-lg font-semibold mt-3">{truncateText(product.title, 20)}</a>
  <p className="text-green-600 font-medium">{product.brand.name}</p>
  <div className="flex items-center justify-between w-full mt-2 px-2">
    <span className="font-bold">{product.price} EGP</span>
    <div className="flex items-center gap-1 text-yellow-500">
      <span className="text-black">{product.ratingsAverage}</span>
      <FaStar className="w-5 h-5 fill-yellow-500" />
    </div>
  </div>

  {/* Spacer ياخد المساحة الفاضية */}
  <div className="flex-1"></div>
  
  <button className="mt-4 bg-black w-full text-white py-1 px-4 rounded-full hover:bg-gray-800 transition">
    add to card
  </button>
</div>
  );
}

