"use client"
import React, { useState } from 'react'
import styles from "./Header.module.css"
import Link from 'next/link'
import Image from 'next/image'

import { IoMdClose } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";


//imgs
import head from "@/public/images/head/header.jpg";
import logo from "@/public/images/logo/logo.jpg";

function Header() {
  const [open , setOpen] = useState(false)
  return (
    <main className='min-h-[100vh] max-[500px]:min-h-[200px]'>
        <div className='w-[700px] rounded-lg border-2 h-[60px] backdrop-blur-lg flex justify-between mx-auto mt-[30px] p-1  max-[700px]:w-[550px] max-[560px]:hidden'>
            <ul className='flex justify-around p-2 text-white w-[250px]'>
                <li>Home</li>
                <li className='mx-2'>Services</li>
                <li>About us</li>
            </ul>
            <Image src={logo} width={300} height={300} alt='logo' className='w-[50px] h-[50px] rounded-[50%] z-10' />
        </div>


        <div className='top-0 right-0 justify-between backdrop-blur-lg m-auto items-center hidden max-[560px]:flex min-h-[100px] '>
      <p className='text-white text-[30px] ml-7'>Astoriax</p>
      <IoMenuSharp className={`text-white  justify-end m-9 text-[30px] ${open ? "hidden" : "flex"}`} onClick={() => setOpen(true)} />
        </div>

        <div className={`w-full justify-end top-0 left-0 z-20 absolute h-full ${open ? "flex" : "hidden"}`}>
        <div className='w-[250px] h-full bg-[#1f1d3b] opacity-85 flex flex-col  items-center'>
          <div className='w-full flex justify-end m-4 bottom-0 h-[20%] top-0 items-center mr-[80px]'>
            <IoMdClose className='bottom-0 text-white text-[35px] font-bold' onClick={() => setOpen(false)}/>
          </div>

        <ul className='flex flex-col justify-center mx-auto items-center p-2 text-white w-[250px]'>
                <li>Home</li>
                <li className='my-8'>Services</li>
                <li>About us</li>
            </ul>
        </div>

        </div>


        <section className='flex flex-col items-center -mt-10 justify-center shadow[0_0_10px_rgba(204,204,204)] overflow-hidden min-h[100vh] max-[700px]:-mt-[200px] max-[560px]:'>
            <span className={`absolute w-full h-full -z-10 ${styles.cover} bg-[#090c17] max-[700px]:h-[800px]`}>
                <span className=' absolute w-full h-full bg-[#000517] opacity-65 z-0'></span>
            </span>

            <div className="flex mt-[100px] max-[700px]:flex-col-reverse max-[560px]:mb-[40px]">
            <div className="mr-[150px] max-[900px]:mr-0">
          <h1 className='text-white text-[2rem]'>Wellcome Astoriax</h1>
          <h3 className='text-white mb-8 text-[1.1rem]'>
           We Are Digital Market Team
          </h3>

            <Link href="/" className='bg-[#0d0179] mt-[80px] p-[10px] text-white  text-[1.2rem] hover:bg-[#1200af]'>
            Let see the services
            </Link>
            </div>
          
          
        <div>
        <Image src={head} width={600} height={600} alt="online shop" className="w-[450px] h-[450px] object-cover rounded-[50%] shadow[0px_0px_10px_rgba(102,102,102)] max-[700px]:w-[300px] max-[700px]:h-[300px] max-[700px]:mt-[100px] max-[560px]:mt-[140px]" />
        </div>
        </div>
        </section>
    </main>
  )
}

export default Header
