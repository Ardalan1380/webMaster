import React from 'react';
import styles from "./Details.module.css"

//img
import team from "@/public/images/Details/team.jpg";
import Image from 'next/image';


function Details() {
  return (
    <div className='my-10 flex w-[1200px] mx-auto justify-center max-[1200px]:w-[900px] max-[900px]:flex-col-reverse max-[900px]:items-center max-[900px]:w-[500px] max-[500px]:w-[380px]'>
        <div className='flex flex-col max-[900px]:items-center max-[900px]:w-[380px]'>
            <div className='flex w-[350px] items-center'>
            <span className='w-[70%] text-purple-200'>آستوریاکس چه هدفی دارد</span>
            <hr className='w-[60%] mt-5 bg-purple-800' />
            </div>
            <h4 className='text-white text-[40px] w-[450px] font-bold max-[500px]:w-[350px] max-[500px]:text-[30px]'>
            ما در آستوریاکس دنبال چه اهدافی هستیم
            </h4>
            <p className='w-[400px] max-[500px]:w-[350px] text-white'>
            در آستوریاکس، هدف ما این است که کسب‌وکار شما را به سطحی بالاتر ارتقاء دهیم. با ارائه مشاوره‌های تخصصی و استراتژیک، شما را در مسیر موفقیت همراهی می‌کنیم تا با اطمینان و دید روشن به اهداف تجاری خود دست یابید. در این مسیر، تیم ما با بهره‌گیری از بهترین روش‌ها و ابزارهای روز دنیا، به شما کمک می‌کند تا از رقبای خود پیشی بگیرید.
            </p>

            <div className='flex w-[400px] my-10 max-[400px]:w-[380px] max-[500px]:flex-col max-[500px]:items-center'>
                <div className='w-[200px] bg-gray-700 p-1 rounded-lg max-[500px]:mb-4'>
                    <p className='text-white text-left text-[18px] font-semibold'>
                        The Best Services
                    </p>
                    <p className='text-white'>
                    consec sit amet, consectetur adipsed turpis tincidunt
                    </p>
                </div>
                <div className='w-[200px] bg-gray-700 mx-1 p-1 rounded-lg'>
                    <p className='text-white text-left text-[18px] font-semibold'>
                        The Best Services
                    </p>
                    <p className='text-white'>
                    consec sit amet, consectetur adipsed turpis tincidunt
                    </p>
                </div>
            </div>

            <div className='max-[900px]:w-auto'>
                <p className='text-white max-[900px]:w-fit max-[500px]:w-[350px]'>
                consec sit amet, consectetur adipsed turpis tinciduntconsec sit amet, consectetur adipsed turpis tincidunt
                consec sit amet, consectetur adipsed turpis tincidunt
                </p>
            </div>
            
        </div>
        <Image src={team} width={300} height={300} alt="team" className='w-[400px] ml-[260px] rounded-[50%] h-[400px] object-fill max-[1100px]:ml-0 max-[500px]:w-[300px] max-[500px]:h-[300px]' />
    </div>
  )
}

export default Details