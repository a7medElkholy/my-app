"use client"
import { signOut, useSession } from "next-auth/react";
import React from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { useCart } from './../../context-cart';

export default function Navbar() {
  const {cartCount} = useCart()
  console.log(cartCount);
  
  console.log(cartCount)
  const { status , data } = useSession()
  return (
    <nav className="w-full border-b text-black bg-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          ROUTE.CO
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-base font-medium">
          <a href=""><li className="hover:text-blue-600 cursor-pointer">Shop</li></a>
          <a href=""><li className="hover:text-blue-600 cursor-pointer">Categories</li></a>
          <a href=""><li className="hover:text-blue-600 cursor-pointer">Wishlist</li></a>
          <a href=""><li className="hover:text-blue-600 cursor-pointer">Brands</li></a>
        </ul>

        {/* Search + Cart */}
        <div className="flex items-center gap-6">
          {/* Search Input */}
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search for products..."
              className="pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 bg-gray-50 w-64"
            />
          </div>

          {/* Cart */}
          <a href="/card" className="relative cursor-pointer">
            <FiShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cartCount}
            </span>
          </a>
        </div>
        {  status === "loading" ? "loading" :  status === "authenticated" ? <button onClick={()=> signOut({callbackUrl : "/auth/login"})} className="hover:text-blue-600 cursor-pointer">Logout</button> :  <a href="/auth/login" className="hover:text-blue-600 cursor-pointer">Login</a>}
        <div>
        </div>
      </div>
    </nav>
  );
}
