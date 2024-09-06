import Image from 'next/image'
import React from 'react'
import styles from "./ProjectsCard.module.css"

function ProjectsCard({item}) {
  return (
    <>
    <div className={`w-[300px] min-[350px] border-2 mb-10 rounded-xl duration-1000 flex flex-col mx-auto justify-center items-center p-2 ${styles.cartContainer}`}>
      <div className={`relative flex justify-center items-center ${styles.imgContainer}`}>
        <Image 
          src={item.img} 
          width={400} 
          height={400} 
          alt='project' 
          className='w-[350px] rounded-xl h-[200px] relative' 
        /> 
        <button className={`absolute w-full h-full ${styles.btn}`}>
          مشاهده وبسایت
        </button>
      </div>
      <p className={`text-[19px] text-white font-semibold mt-3 mb-6`}>{item.title}</p>
      <p className='text-right text-white mb-3 ml-2'>{item.text}</p>
    </div>
    </>
    
  )
}

export default ProjectsCard