import React from 'react'
import ProductDetails from '../(main)/products/ProductDetails.'
import { log } from 'console';

export default async function page({params}: { params : { id:string } }) {
    const {id} = await params

    async function getProductDetails (id:string){
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`,{
            cache : "force-cache",
        })
        const {data} = await res.json();
        return data ;
    }

    const data = await getProductDetails(id);
    
  return (
    <div>
      <ProductDetails data={data}/>
    </div>
  )
}