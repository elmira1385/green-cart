"use client"
import React, { useState } from "react";
import { TProductsResponse } from "../UI/BestSellers";
import { useQuery } from "@tanstack/react-query";
import axios from "@/api/axios";
import { useIsLogin } from "@/store/useIsLogin";

const IFIsLogin = () => {
    const[isShow,setIsShow]=useState(false)
    const[logout,setLogout]=useState(false)
    const{setIsLogin}=useIsLogin()
    const { data,isSuccess } = useQuery<TProductsResponse>({
    queryKey: ["logout"],
    queryFn: async () => {
      const { data } = await axios.get("/api/user/logout");
      return data;
    },
    enabled:logout
  });
  return (
    <div onMouseMove={()=>{
        setIsShow(true)
        }} onMouseLeave={()=>{
            setIsShow(false)
        }} className="relative group size-10">
        <img  src="./ifislogin.png" alt="" />
        {isShow&&<ul className=" absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40">
        <a
          href="https://greatstack.dev/go/grocery"
          className="p-2 pl-3 hover:bg-green-100 cursor-pointer block"
        >
          Source Code
        </a>
        <li onClick={()=>{
          setLogout(true)
          if(isSuccess){
             setIsLogin(false)
          }
        }}  className="p-1.5 pl-3 hover:bg-green-100 cursor-pointer">Logout</li>
      </ul>}
    </div>
  );
};

export default IFIsLogin;
