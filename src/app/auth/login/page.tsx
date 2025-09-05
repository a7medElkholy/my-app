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
import { signIn } from "next-auth/react"
import { email } from './../../../../node_modules/zod/v4/classic/schemas';
import { OK } from './../../../../node_modules/zod/v3/helpers/parseUtil';
import { useRouter } from "next/navigation"

const formSchema = z.object({
  email : z.email(),
  password : z.string()
})


export default function ProfileForm() {

   const router = useRouter()
   const form = useForm({resolver:zodResolver(formSchema) , defaultValues :{
    email : "",
    password : ""
  }})
  

  const onSubmit = async (data : z.infer<typeof formSchema>) => {

     const res =  await signIn("credentials" ,{
      email : data?.email ,
      password : data?.password,
      callbackUrl : "/" , 
      redirect : false
     })

     if(!res?.ok){
      console.log(res?.error);
     }

     else{
      router.replace("/");
     }

    console.log(res);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-12 max-w-96 mx-auto">
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
        <Button className="rounded-2xl cursor-pointer" type="submit">Submit</Button>
      </form>
    </Form>
  )
}