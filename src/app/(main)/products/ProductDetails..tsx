import { IProduct } from "@/app/types/productCard.type";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaBox, FaShoppingCart } from "react-icons/fa";
import { MdTrendingUp, MdDateRange } from "react-icons/md";

export default function ProductDetails(data : {data : IProduct}) {
    
  return (
    <div className="flex justify-center p-4">
      <div className="max-w-5xl bg-white shadow-lg rounded-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            src={data.data.imageCover}
            alt={data.data.title}
            width={500}
            height={500}
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Product Info */}
        <div className="pt-10">
          {/* Title & Rating */}
          <h1 className="text-2xl font-bold mb-2">{data.data.title}</h1>
          <div className="flex items-center gap-2 mb-6">
            <div className="flex text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <span className="text-gray-600 font-medium">{data.data.ratingsAverage}/5</span>
            <span className="text-gray-400">({data.data.ratingsQuantity} reviews)</span>
          </div>

          {/* Price */}
          <p className="text-3xl font-bold mb-6">${data.data.price}</p>

          {/* Description */}
          <h2 className="font-semibold mb-4">Description</h2>
          <p className="text-gray-600 mb-8">{data.data.description}</p>

          {/* Stock & Sales */}
          <div className="flex flex-wrap gap-8 mb-10">
            <div className="flex items-center gap-2 text-gray-700">
              <FaBox className="text-lg" />
              <span className="font-semibold">{data.data.quantity} units</span>
              <span className="text-gray-500">Available Stock</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MdTrendingUp className="text-lg" />
              <span className="font-semibold">{data.data.sold}</span>
              <span className="text-gray-500">Total Sold</span>
            </div>
          </div>

          {/* Brand & Category */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <p>
              <span className="text-gray-500">Brand:</span>{" "}
              <span className="font-medium bg-gray-200 px-2 py-1 rounded">{data.data.brand.name}</span>
            </p>
            <p>
              <span className="text-gray-500">Category:</span>{" "}
              <span className="font-medium bg-blue-100 text-blue-600 px-2 py-1 rounded">{data.data.category.name}</span>
            </p>
          </div>

          {/* Add to Cart */}
          <button className="w-full bg-gray-900 text-white flex items-center justify-center gap-2 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition">
            <FaShoppingCart /> Add to Cart
          </button>

          {/* Dates */}
          <div className="flex justify-between items-center text-sm text-gray-500 mt-6 border-t pt-4">
            <p className="flex items-center gap-1">
              <MdDateRange /> Added: {data.data.createdAt}</p>
            <p className="flex items-center gap-1">
              <MdDateRange /> Updated: {data.data.updatedAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
