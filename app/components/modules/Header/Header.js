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

function Header({onLinkClick}) {
  const [open , setOpen] = useState(false)
  return (
    <main className='min-h-[100vh] max-[500px]:min-h-[200px]'>
        <div className='w-[900px] rounded-lg border-2 h-[60px] backdrop-blur-lg flex justify-between mx-auto mt-[30px] p-1  max-[700px]:w-[550px] max-[560px]:hidden'>
        
            <Image src={logo} width={300} height={300} alt='logo' className='w-[50px] h-[50px] rounded-[50%] z-10' />

            <ul className='flex justify-around p-2 text-white w-[250px]'>
                <li className='cursor-pointer tex-[21px] font-semibold hover:border-b-2 duration-100' onClick={() => onLinkClick('projects')}>نمونه کارها</li>
                <li className='mx-2 cursor-pointer tex-[21px] font-semibold hover:border-b-2 duration-100' onClick={() => onLinkClick('services')}>سرویس ها</li>
                <li className='cursor-pointer tex-[21px] font-semibold hover:border-b-2 duration-100' onClick={() => onLinkClick('about')}>درباره ما</li>
            </ul>
        </div>


        {/* <div className={`top-0 right-0 fixed w-full  backdrop-blur-lg m-auto items-center hidden max-[560px]:flex min-h-[100px] ${open ? "justify-end" : "justify-between"} `}>
        <IoMenuSharp className={`text-white justify-end m-9 text-[30px] ${open ? "hidden" : "flex"}`} onClick={() => setOpen(true)} />
        <p className={`text-white text-[30px] ml-7`}>Astoriax</p>
      </div> */}

      {/* <div className={`fixed top-0 right-0 z-20 h-full ${styles.menuContainer} ${open ? styles.menuContainerOpen : ""}`}>
        <div className='w-[250px] h-full bg-[#1f1d3b] opacity-85 flex flex-col items-center'>
    
          <ul className='flex flex-col justify-center mx-auto items-center p-2 text-white w-[250px]'>
          <div className='w-full flex justify-end m-4 top-0 items-center mr-[80px]'>
            <IoMdClose className='text-white text-[35px] font-bold' onClick={() => setOpen(false)} />
          </div>
              <li onClick={() => { onLinkClick('home'); setOpen(false); }}>خانه</li>
              <li className='my-8' onClick={() => { onLinkClick('services'); setOpen(false); }}>سرویس ها</li>
              <li onClick={() => { onLinkClick('about'); setOpen(false); }}>درباره ما</li>
            </ul>
        </div>

        </div> */}
        <div className={`top-0 right-0 fixed w-full backdrop-blur-lg  items-center ${open ? "justify-end" : "justify-between"} p-4 min-h-[60px] hidden max-[560px]:flex`}>
        <IoMenuSharp
          className={`text-white text-[30px] cursor-pointer ${open ? 'hidden' : 'flex'}`}
          onClick={() => setOpen(true)}
        />
        <p className="text-white text-[30px]">Astoriax</p>
      </div>

      <div
          className={`fixed top-0 right-0 backdrop-blur-lg h-full z-20 ${styles.menuContainer} ${open ? styles.menuContainerOpen : ''} transition-all duration-300`}
        // style={{ transform: open ? 'translateX(0)' : 'translateX(100%)', backgroundColor: 'rgba(31, 29, 59, 0.85)' }}
      >
        <div className="w-[250px] h-full flex flex-col items-center">
          <div className="w-full flex justify-end p-4">
            <IoMdClose className="text-white text-[35px] font-bold cursor-pointer" onClick={() => setOpen(false)} />
          </div>

          <ul className="flex flex-col justify-center items-center text-white w-full p-4">
            <li
              className="cursor-pointer my-4"
              onClick={() => {
                onLinkClick('home');
                setOpen(false);
              }}
            >
              صفحه اصلی
            </li>
            <li
              className="cursor-pointer my-4"
              onClick={() => {
                onLinkClick('services');
                setOpen(false);
              }}
            >
              سرویس ها
            </li>
            <li
              className="cursor-pointer my-4"
              onClick={() => {
                onLinkClick('about');
                setOpen(false);
              }}
            >
              درباره ما
            </li>
          </ul>
        </div>
        </div>


        <section className='flex flex-col items-center -mt-10 justify-center shadow[0_0_10px_rgba(204,204,204)] overflow-hidden min-h[100vh] max-[700px]:-mt-[200px] max-[560px]:'>
            <span className={`absolute w-full h-full -z-10 ${styles.cover} bg-[#090c17] max-[700px]:h-[800px]`}>
                <span className=' absolute w-full h-full bg-[#000517] opacity-65 z-0'></span>
            </span>

            <div className="flex mt-[100px] max-[700px]:flex-col-reverse max-[560px]:mb-[40px]">
            <div className="mr-[150px] max-[900px]:mr-0">
          <h1 className='text-white text-[2rem]'>به آستوریاکس خوش آمدید</h1>
          <h3 className='text-white mb-8 text-[15px]'>
           آستوریاکس همراه شما برای درخشش در دنیای دیجیتال
          </h3>

            <Link href="/" className='bg-[#0d0179] mt-[80px] p-[10px] text-white  text-[1.2rem] hover:bg-[#1200af]'>
            بزن بریم 
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
