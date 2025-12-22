"use client"

import { useModule } from '@/store/useModule'
import { useMutation } from '@tanstack/react-query'
import axios from '@/api/axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useIsLogin } from '@/store/useIsLogin'
import { parseSetCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import AuthFrist from './AuthFrist'
interface userTypeRegister{
  name:string,
   email:string,
  password:string
}
interface userTypeLogin{
   email:string,
  password:string
}
const LoginAndSignUp = () => {
 const{mutate:register,isSuccess:registerSuccess}= useMutation({
  mutationFn:async(user:userTypeRegister)=>{
    const{data}=await axios.post("/api/user/register",{
      name:user.name,
      email:user.email,
      password:user.password
    })
    return data
  }
  })
 const{mutate:login,isSuccess:loginSuccess}= useMutation({
  mutationFn:async(user:userTypeLogin)=>{
    const{data}=await axios.post("/api/user/login",{
      email:user.email,
      password:user.password
    })
    return data
  }
  })

 
  const{register:registerSignUP,handleSubmit:submitSignUP}=useForm({
    defaultValues:{
      name:"",
      email:"",
      password:""
    }
  })
  const{register:registerLogin,handleSubmit:submitLogin}=useForm({
    defaultValues:{
      email:"",
      password:""
    }
  })
  const{isOpen,setIsOpen}=useModule()
  const [moveToSignUP,setMoveToSignUP]=useState(false)
  const{setIsLogin}=useIsLogin()
  
  return (
    <>
    {isOpen&&<div onClick={()=>setIsOpen(false)} className="fixed inset-0 top-0  left-0  z-30 flex items-center justify-center bg-black/50">
     {!moveToSignUP? <div onClick={(e)=>{
          e.stopPropagation()
      }} className="flex  rounded-md flex-col justify-center items-center fixed  py-12 px-9 gap-4 bg-white z-50">
          <div>
            <p className="text-[24px] font-medium text-primary">User <span className="text-gray-600">Login</span></p>
          </div>
          <form onSubmit={submitLogin(({email,password}) => {
            console.log("hi")
            login({email:email,password:password})
          })} className="flex flex-col gap-4" 
           >
            <div className="flex flex-col gap-2">
              <p className="text-gray-600 text-[14px]">Email</p>
              <input {...registerLogin("email",{
                required:true
              })}  placeholder="Type here" className="border rounded-md text-[14px] placeholder:text-gray-400 border-gray-200 w-75 p-2 outline-[#4fbf8b]" type="email" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-600 text-[14px]">Password</p>
              <input {...registerLogin("password",{
                required:true
              })} placeholder="Type here" className="border rounded-md text-[14px] placeholder:text-gray-400 border-gray-200 w-75 p-2 outline-[#4fbf8b]" type="password" />
            </div>
            <div className="flex">
              <p className="text-gray-600 text-[14px]">Create an account? <span onClick={()=>{
                setMoveToSignUP(true)
              }} className="text-primary cursor-pointer">click here</span></p>
            </div>
            <div className="flex justify-center ">
              <button onClick={()=>{
                {if(loginSuccess){
                setIsLogin(true)
                setIsOpen(false)
                }}
              }} type="submit" className="bg-primary text-white px-32 rounded-md py-2 text-[14px] cursor-pointer ">Login</button>
            </div>
            
          </form>
      </div>:<div onClick={(e)=>{
          e.stopPropagation()
      }} className="flex rounded-md flex-col justify-center items-center fixed top-1/2 left-1/2 -translate-1/2 py-12 px-9 gap-4 bg-white z-50">
          <div>
            <p className="text-[24px] font-medium text-primary">User <span className="text-gray-600">Sign Up</span></p>
          </div>
          <form className="flex flex-col gap-4" onSubmit={submitSignUP(({email,name,password}) => {
            register({email:email,name:name,password:password})
          })}
          >
            <div className="flex flex-col gap-2">
              <p className="text-gray-600 text-[14px]">Name</p>
              <input {...registerSignUP("name",{
                required:true
              })} placeholder="Type here" className="border rounded-md text-[14px] placeholder:text-gray-400 border-gray-200 w-75 p-2 outline-[#4fbf8b]" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-600 text-[14px]">Email</p>
              <input {...registerSignUP("email",{
                required:true
              })} placeholder="Type here" className="border rounded-md text-[14px] placeholder:text-gray-400 border-gray-200 w-75 p-2 outline-[#4fbf8b]" type="email" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-600 text-[14px]">Password</p>
              <input {...registerSignUP("password",{
                required:true
              })} placeholder="Type here" className="border rounded-md text-[14px] placeholder:text-gray-400 border-gray-200 w-75 p-2 outline-[#4fbf8b]" type="password" />
            </div>
            <div className="flex">
              <p className="text-gray-600 text-[14px]">Already have account?<span onClick={()=>{
                setMoveToSignUP(false)
              }} className="text-primary cursor-pointer">click here</span></p>
            </div>
            <div className="flex justify-center ">
              <button onClick={()=>{
                if(registerSuccess){
                  setMoveToSignUP(false)
                }
              }} type="submit" className="bg-primary text-white px-24 rounded-md py-2 text-[14px] cursor-pointer ">Create Account</button>
            </div>
          </form>
      </div>} 

    </div>}
    

    </>
  )
}

export default LoginAndSignUp