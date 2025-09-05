// "use server"
import { getUserToken } from "./lib/server-utils";

export default async function getUserCart() {
    const token = await getUserToken();
    const res = await fetch (`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/cart`,{
        headers : {
            token ,
        }
    })
console.log(res)
    if(!res.ok){
    throw new Error(`HTTP error ! status : ${res.status}`)
    }

    const result = await res.json();
    return result.data ;

}