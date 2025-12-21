
import { TProductsResponse } from '@/app/UI/BestSellers';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import EachInformation from './EachInformation';

const page = async(props:PageProps<"/allProducts/[...id]">) => {
    const{id}=await props.params
   
    
  
  return (
  <EachInformation postId={id}/>
  )
}

export default page