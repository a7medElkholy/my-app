"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useRouter } from "next/navigation"
import { useState } from "react"

const formSchema = z.object({
  email : z.email(),
  password : z.string().regex(/^[A-Z][a-z]{8,}/),
  rePassword : z.string().regex(/^[A-Z][a-z]{8,}/),
  name : z.string().min(3),
  phone : z.string().min(11)
}).refine((data)=> data.password === data.rePassword , {
    error: "wrong confirm password"
} )


export default function ProfileForm() {
    const [isloading , setIsLoading ] = useState(false);
   const router = useRouter()
   const form = useForm({resolver:zodResolver(formSchema) , defaultValues :{
    email : "",
    password : "",
    rePassword : "",
    name:"",
    phone:"",

  }})
  

  const onSubmit = async (data : z.infer<typeof formSchema>) => {

    try{
        setIsLoading(true);
        const res = fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/signup`,{
            method: "POST" ,
            body: JSON.stringify(data),
            headers: {
                "Content-Type" : "application/json"
            }
        })
          router.push("/auth/login")        

    }

    catch{
        console.log(data.phone);
    }

    finally{
        setIsLoading(false);
    }

    console.log(process.env.NEXT_PUBLIC_API_BASE_URL);
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-12 max-w-96 mx-auto">

         {/* ================== name ================= */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Ahmed" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ================== email ================= */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="exapmle@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ================== password ================= */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="*************" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ================== rePassword ================= */}
        <FormField
          control={form.control}
          name="rePassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>rePassword</FormLabel>
              <FormControl>
                <Input placeholder="*************" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

         {/* ================== phone ================= */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>phone</FormLabel>
              <FormControl>
                <Input placeholder="01000000000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="rounded-2xl cursor-pointer" type="submit">Submit</Button>
      </form>
    </Form>
  )
}