import React from 'react';
import styles from "./Details.module.css"

//img
import team from "@/public/images/Details/team.jpg";
import Image from 'next/image';


function Details() {
  return (
    <div className='my-10 flex w-[1200px] mx-auto justify-center max-[1200px]:w-[900px] max-[900px]:flex-col-reverse max-[900px]:items-center max-[900px]:w-[500px] max-[500px]:w-[380px]'>
        <div className='flex flex-col max-[900px]:items-center max-[900px]:w-[380px]'>
            <div className='flex text-purple-700 w-[200px] items-center'>
            <span className=''>test text text</span>
            <hr className='w-[40%] mt-5 bg-purple-800' />
            </div>
            <h4 className='text-white text-[40px] w-[450px] font-bold max-[500px]:w-[350px] max-[500px]:text-[30px]'>
                We Provide the Best Digital Market Services
            </h4>
            <p className='w-[400px] max-[500px]:w-[350px] text-white'>Lorem ipsum dolor  amet, dolor  amet,dolor  amet,dolor  amet, consec amet, consec amet, consec amet, consec sit amet, consectetur adipsed turpis tincidunt id aliquet.</p>

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