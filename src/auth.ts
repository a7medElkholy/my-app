import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions : NextAuthOptions = {
  pages:{signIn : "/auth/login"},
    providers: [
  CredentialsProvider({
   
    name: 'Credentials',
   
    credentials: {
      email: { label: "email", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },

    async authorize(credentials) {
      
      const res = await fetch(`${process.env.API_BASE_URL}/api/v1/auth/signin`, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
      })
      const data = await res.json()

      // If no error and we have user data, return it
      if (res.ok) {
        return {  id: "5" , user: data?.user , token: data?.token }
      }
      
      else{
        throw Error (data?.message || "error in the data");
      }
    }
  })
],

  callbacks : {
    async jwt({ token , user }){
      if(user){
        token.user = user.user
        token.token = user.token
      }

      return token ;
    },

     async session({session , token }){
      session.user = token.user as {
        name: string;
        email: string;
        role: string 
    };

      session.token = token.token

      return session ;
    }
  }

}

