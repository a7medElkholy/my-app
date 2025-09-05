"use client"
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'
import CartContextProvider from './context-cart'

export default function Providers({children} : {children : ReactNode}) {
  return (
    <SessionProvider><CartContextProvider>{children}</CartContextProvider></SessionProvider>

  )
}
