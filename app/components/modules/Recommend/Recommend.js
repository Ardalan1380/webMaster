import React from 'react';
import styles from "./Recommend.module.css";

//img 
import team from "@/public/images/Recommend/team.svg"
import Image from 'next/image';
import { FaAngleDoubleRight } from "react-icons/fa";


function Recommend() {
  return (
    <div className='w-[1110px] mx-auto -mt-[90px] flex justify-evenly items-center max-[1200px]:w-[900px] max-[900px]:flex-col max-[900px]:-mt-8 max-[900px]:mb-5 max-[900px]:w-[500px] max-[560px]:mt-1 max-[500px]:w-[380px]'>
        <div className='bg-[#1e2157] rounded-md w-[350px] flex flex-col min-h-[250px] p-2'>
          <div className='flex justify-between'>
        <Image src={team} width={500} height={500} alt='team' className='w-[50px] h-[80px] p-1' />
        <FaAngleDoubleRight className='m-4 text-[25px] bg-[#060829] text-[#21245f]' />
          </div>
          <h3 className='text-white text-[22px] ml-1'>مشاوره کسب‌وکار</h3>
            <p className='ml-1 text-white'>
             در آستوریاکس، با ارائه مشاوره‌های تخصصی و تحلیل‌های دقیق، به شما کمک می‌کنیم تا کسب‌وکارتان را به‌صورت بهینه مدیریت کرده و ریسک‌ها را کاهش دهید.
            </p>
        </div>

        <div className='bg-[#1e2157] rounded-md w-[350px] flex flex-col min-h-[250px] p-2 max-[900px]:my-3  '>
          <div className='flex justify-between'>
          <Image src={team} width={500} height={500} alt='team' className='w-[50px] h-[80px] p-1' />
          <FaAngleDoubleRight className='m-4 text-[25px] bg-[#060829] text-[#21245f]' />
          </div>
          <h3 className='text-white text-[22px] ml-1'>
          طراحی گرافیک
          </h3>
            <p className='ml-1 text-white'>
            تیم طراحی گرافیک ما با ارائه طرح‌های خلاقانه و متمایز، به شما کمک می‌کند تا هویت بصری برند خود را به بهترین شکل به مخاطبانتان ارائه دهید.
            </p>
          </div>

        <div className='bg-[#1e2157] rounded-md w-[350px] flex flex-col min-h-[250px] p-2'>
          <div className='flex justify-between'>
           <Image src={team} width={500} height={500} alt='team' className='w-[50px] h-[80px] p-1' />
          <FaAngleDoubleRight className='m-4 text-[25px] bg-[#060829] text-[#21245f]' />
          </div>
          <h3 className='text-white text-[22px] ml-1'>دیجیتال مارکتینگ</h3>
            <p className='ml-1 text-white'>
            با خدمات دیجیتال مارکتینگ ما، کسب‌وکار شما در فضای آنلاین بیشترین دیده‌شدن را تجربه خواهد کرد. از سئو گرفته تا طراحی کمپین‌های تبلیغاتی، تیم ما شما را در هر مرحله همراهی می‌کند تا به مخاطبان هدف خود دست پیدا کنید.
            </p>
        </div>

    </div>
  )
}

export default Recommend