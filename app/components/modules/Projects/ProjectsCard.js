import Image from 'next/image'
import React from 'react'

function ProjectsCard({item}) {
    console.log(item)
  return (
    <div className='w-[300px] min-[350px] border-2 mb-10 rounded-xl flex flex-col mx-auto justify-center items-center p-2'>
        <Image src={item.img} width={400} height={400} alt='project' className='w-[350px] rounded-xl h-[200px]' /> 
        <p className='text-[19px] text-white font-semibold mt-3 mb-6'>{item.title}</p>
        <p className='text-left text-white mb-3 ml-2'>{item.text}</p>
    </div> 
  )
}

export default ProjectsCard