import React from 'react';
import rocket from "@/public/images/Services/rocket.svg";
import chart from "@/public/images/Services/chart.svg";

import Image from 'next/image';

function Services() {
  return (
    <div className='bg-[#161435] w-full justify-center mx-auto items-center flex flex-col min-h-[700px]'>
      <div className='flex flex-col'>
        <h3 className='mt-5 text-white text-[38px] font-bold max-[600px]:text-[28px] max-[600px]:text-center'>
            Start Growing Your Business
        </h3>

        <p className='text-white max-[600px]:text-center'>some text some text some text some text some textsome textsome text</p>
      </div>
        
            
            <div className='w-[990px] flex justify-center mx-auto mt-5 max-[990px]:flex-col max-[990px]:w-[600px] max-[990px]:items-center max-[990px]:mb-4 max-[600px]:w-[380px]'>
                  <div className='border-2 w-[300px] flex items-center flex-col min-h-[450px]h-[450px] bg-[#1d1a3a]  mx-4 rounded-lg border-[#161435] shadow-[0px_0px_45px_56px_rgba(0,0,0,0.1)]'>
                          <Image src={chart} width={400} height={400} alt='rocket' className='bg-[#756df0] w-[100px] mt-2 h-[100px] rounded-full p-3' />
                          <p className='text-white text-[25px] mt-2'>test text</p>
                        <p className='text-white text-[30px] font-bold'>$80.00</p>

                        <div className='text-left text-white gap-2 mt-9 ml-6 w-full'>
                        <p>somr text for services</p>
                        <p className='my-2'>somr text for services</p>
                        <p>somr text for services</p>
                        <p className='my-2'>somr text for services</p>
                        <p>somr text for services</p>
                        <p className='my-2'>somr text for services</p>
                        <p>somr text for services</p>
                        </div>
                        <button className='my-4 border-2 border-[#756df0] py-2 px-3 hover:bg-[#756df0] transi transition ease-in-out delay-50 text-white'>Get Started</button>
                        
                    </div>
                    <div className='border-2 w-[300px] flex items-center flex-col min-h-[450px]h-[450px] bg-[#1d1a3a] mx-4 rounded-lg border-[#161435] shadow-[0px_0px_45px_56px_rgba(0,0,0,0.1)] max-[990px]:my-3'>
                    <Image src={rocket} width={400} height={400} alt='rocket' className='bg-[#756df0] w-[100px] mt-2 h-[100px] rounded-full p-3' />
                    <p className='text-white text-[25px] mt-2'>test text</p>
                    <p className='text-white text-[30px] font-bold'>$80.00</p>

                    <div className='text-left text-white gap-2 mt-9 ml-6 w-full'>
                    <p>somr text for services</p>
                    <p className='my-2'>somr text for services</p>
                    <p>somr text for services</p>
                    <p className='my-2'>somr text for services</p>
                    <p>somr text for services</p>
                    <p className='my-2'>somr text for services</p>
                    <p>somr text for services</p>
                    </div>

                    <button className='my-4 border-2 border-[#756df0] py-2 px-3 hover:bg-[#756df0] transi transition ease-in-out delay-50 text-white'>Get Started</button>
                        
                    </div>
                    <div className='border-2 w-[300px] flex items-center flex-col min-h-[450px]h-[450px] bg-[#1d1a3a] mx-4 rounded-lg border-[#161435] shadow-[0px_0px_45px_56px_rgba(0,0,0,0.1)]'>
                    <Image src={rocket} width={400} height={400} alt='rocket' className='bg-[#756df0] w-[100px] mt-2 h-[100px] rounded-full p-3' />
                    <p className='text-white text-[25px] mt-2'>test text</p>
                    <p className='text-white text-[30px] font-bold'>$80.00</p>

                    <div className='text-left text-white gap-2 mt-9 ml-6 w-full'>
                    <p>somr text for services</p>
                    <p className='my-2'>somr text for services</p>
                    <p>somr text for services</p>
                    <p className='my-2'>somr text for services</p>
                    <p>somr text for services</p>
                    <p className='my-2'>somr text for services</p>
                    <p>somr text for services</p>
                    </div>

                    <button className='my-4 border-2 border-[#756df0] py-2 px-3 hover:bg-[#756df0] transi transition ease-in-out delay-50 text-white'>Get Started</button>
                        
                    </div>
            </div>
            
    </div>
  )
}

export default Services