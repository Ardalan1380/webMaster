import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";



function Footer() {
  return (
    <div className='bg-[#22212c] min-h-[200px] w-full flex justify-center '>
        <div className='w-[1200px] flex mx-auto justify-around my-[50px] max-[1200px]:w-[900px] max-[900px]:flex-col '>

            <div className='flex flex-col max-[900px]:w-[600px] max-[900px]:mx-auto max-[900px]: items-center max-[600px]:w-[380px]'>
                <h3 className='text-white text-[35px] font-bold max-[900px]:text-center'>
                    <span className='text-[#756df0]'>A</span>storiax
                </h3>
                <p className='mt-2 w-[230px] text-white max-[900px]:text-center max-[900px]:mb-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor in. Egestas.
                </p>

                <div className='flex w-[80px] justify-between'>
                        <FaInstagram className=' text-blue-500 text-[20px] cursor-pointer' />
                        <FaWhatsapp className='text-[#F7F7F7] text-[20px] cursor-pointer' />
                        <FaTelegram className='text-[#F7F7F7] text-[20px] cursor-pointer' />
                </div>
            </div>


            <div className='flex flex-col max-[900px]:mx-auto max-[900px]: items-center max-[900px]:my-5'>
                  <p className='text-[25px] text-white font-bold mb-4'>Contact Us</p>
                  <div className='flex flex-col'>
                    <div className='flex items-center'>
                      <label className='w-full text-white mr-2'>Full Name :</label>
                      <input type='text' className='rounded-lg p-1 border-none outline-none' placeholder="full name ..." />
                    </div>
                    <div className='flex items-center my-3'>
                      <label className='w-full text-white text-center'>Email :</label>
                      <input type='text' className='rounded-lg p-1 border-none outline-none' placeholder="Email ..." />
                    </div>

                    <div className='flex '> 
                        <label className=' text-white text-left flex ml-2'>
                            message:
                        </label>
                            <textarea className='rounded-lg p-1 border-none w-full ml-2 outline-none' placeholder='message'/>
                    </div>
                  </div>
            </div>

            <div className='flex flex-col max-[900px]:mx-auto max-[900px]: items-center'>
              <p className='text-white text-[25px] font-bold'>Community</p>
              <div className='flex items-center my-2'>
                  <FiPhone className='text-white mr-1' />
                  <p className='text-white'>+98 000 000 000</p>
              </div>

              <div className='flex items-center mb-2'>
                <CiLocationOn className='text-white mr-1' />
                <p className='text-white'>Iran, Tabriz</p>
              </div>
            </div>

        </div>


       

    </div>
  )
}

export default Footer