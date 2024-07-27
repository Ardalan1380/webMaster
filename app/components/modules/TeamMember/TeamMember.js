"use client"
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { teamMember } from '../../utils/TeamMember';
import Image from 'next/image';
import left from "@/public/images/To-Left.svg"
import right from "@/public/images/To-right.svg"

function TeamMember() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1280 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1280, min: 600 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 600, min: 200 },
      items: 1
    },
    
    
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className={`carousel-button-group mt-20  gap-4 flex justify-start 
        items-center max-[700px]:w-full max-[700px]:justify-center `}>
          
          <button type='button' onClick={() => previous()} className='bg-[#04041a] border-2 rounded-lg'>
            <Image priority={true} src={left} width={200} height={200} alt='right' className='w-[56px]'/>
          </button>

          <button type='button' className='block border-2 border-[#DADBE7] bg-[#F7F7F7] rounded-lg' onClick={() => 
         next ()}>
            <Image priority={true} src={right} width={200} height={200} alt='right' className='w-[56px] gap-3 ' />
           </button>

       </div>
    
     );
   };

 
  return (
    <div className='flex justify-center mx-auto w-[1200px] items-center flex-col max-[1200px]:w-[900px] max-[900px]:w-[380px] '>
        <p className='text-center text-white text-[38px] font-bold'>Team Member</p>
          <div className='w-[900px] my-10 flex-col max-[900px]:w-[600px] max-[600px]:w-full max-[600px]:ml-auto max-[600px]:flex max-[600px]:'>
              <Carousel
                responsive={responsive}
                arrows={false}
                customButtonGroup={<ButtonGroup />}
                renderButtonGroupOutside={true}
              >
                {
                  teamMember.map(item => (
                      <div className='w-[280px] min-h-[180px] border-2 rounded-lg flex flex-col p-2'>
                          <Image src={item.image} width={300} height={300} alt='img' className='w-[260px] flex justify-center mx-auto rounded-lg' />

                          <p className='text-white text-[16px] '>{item.title}</p>
                          <p className='text-white text-[13px] mt-2 mb-4'>{`(${item.skil})`}</p>
                          <p className='text-white text-[13px]'>{item.description}</p>
                      </div>
                  ))
                }
              </Carousel>
          </div>
    </div>
  )
}

export default TeamMember