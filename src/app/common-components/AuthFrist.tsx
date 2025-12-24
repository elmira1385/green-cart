"use client";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { TProductsResponse } from "../UI/BestSellers";
import axios from "@/api/axios";
import { useIsLogin } from "@/store/useIsLogin";

const AuthFrist = () => {
  const{setIsLogin}=useIsLogin()
  const { data ,isSuccess } = useQuery<TProductsResponse>({
    queryKey: ["first"],
    queryFn: async () => {
      const { data } = await axios.get("/api/user/is-auth");
      return data;
    }
  });
  useEffect(()=>{
 if(data?.success===true){
  setIsLogin(true)
  
 }
  },[isSuccess])
  return <div></div>;
};

export default AuthFrist;
