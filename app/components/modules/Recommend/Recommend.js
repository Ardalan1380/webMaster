import React from 'react';
import styles from "./Recommend.module.css";

//img 
import team from "@/public/images/Recommend/team.svg"
import Image from 'next/image';
import { FaAngleDoubleRight } from "react-icons/fa";


function Recommend() {
  return (
    <div className='w-[1200px] mx-auto -mt-[90px] flex justify-center items-center max-[1200px]:w-[900px] max-[900px]:flex-col max-[900px]:-mt-8 max-[900px]:mb-5 max-[900px]:w-[500px] max-[560px]:mt-1 max-[500px]:w-[380px]'>
        <div className='bg-[#1e2157] rounded-md w-[300px] flex flex-col min-h-[200px]'>
          <div className='flex justify-between'>
        <Image src={team} width={500} height={500} alt='team' className='w-[50px] h-[80px] p-1' />
        <FaAngleDoubleRight className='m-4 text-[25px] bg-[#060829] text-[#21245f]' />
          </div>
          <h3 className='text-white text-[22px] ml-1'>Great Experiences</h3>
            <p className='ml-1 text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            </p>
        </div>
        <div className=' w-[300px] mx-4 rounded-md bg-[#21245f] min-h-[200px] max-[900px]:my-5'>

          <div className='flex justify-between'>
          <Image src={team} width={500} height={500} alt='team' className='w-[50px] h-[80px] p-1' />
          <FaAngleDoubleRight className='m-4 text-[25px] bg-[#060829] text-[#21245f]' />
          </div>
          <h3 className='text-white text-[22px] ml-1'>Great Experiences</h3>
            <p className='ml-1 text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            </p>
          </div>
        <div className='bg-[#1e2157] w-[300px] rounded-md min-h-[200px]'>
          <div className='flex justify-between'>
           <Image src={team} width={500} height={500} alt='team' className='w-[50px] h-[80px] p-1' />
          <FaAngleDoubleRight className='m-4 text-[25px] bg-[#060829] text-[#21245f]' />
          </div>
          <h3 className='text-white text-[22px] ml-1'>Great Experiences</h3>
            <p className='ml-1 text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            </p>
        </div>
    </div>
  )
}

export default Recommend