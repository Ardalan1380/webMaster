
"use client"
import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { projects } from '../../utils/projects';
import ProjectsCard from './ProjectsCard';



function Projects() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1280 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1280, min: 800 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 800, min: 200 },
      items: 1
    },
    
    
  };


  return (
    <div className='min-h-[500px] bg-[#22212c] text-center '>
        <p className='text-white font-bold text-[40px]'>some of our projects</p>
          <div className='w-[1200px] flex justify-center mx-auto items-center mt-10 max-[1200px]:w-[900px] max-[900px]:w-[600px] max-[600px]:w-[390px]'>
        <Carousel
          responsive={responsive}
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
          {
            projects.map((item , index) => (
              <ProjectsCard item={item} key={index} />
            ))
          }

        </Carousel>
          </div>
    </div>
  )
}

export default Projects