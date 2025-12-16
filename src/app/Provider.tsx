"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useState } from 'react'

const Provider = ({children}:{children:React.ReactNode}) => {
    const[queryClient]=useState(()=>{
         return new QueryClient({
            defaultOptions:{
                queries:{
                    retry:2
                }
            }
        })
    })
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default Provider