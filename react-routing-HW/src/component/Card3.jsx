import React from 'react'
import Cards from './Cards'


export default function () {
  return (
    <>
   <div className="h-[100vh] flex items-end bg-cover bg-[url('./img/Qassim.jpg')] max-sm:h-[70vh] max-sm:items-start max-sm:bg-cover ">

   <div className=" w-full flex-col justify-between max-sm:mt-14">

   <div className="flex justify-center">
   <div className="text-center w-[70vw] h-[40vh] rounded-md bg-[rgba(255,255,255,0.8)] max-sm:h-[50vh]">
   <p className="text-3xl pt-10 font-bold ">Qassim</p>
   <div className="flex justify-center pt-6 ">
   <p className="w-[60vw] h-40 ">Al-Qassim is a region in the heart of Saudi Arabia known for its rich history, traditional culture, and agricultural heritage. The region's capital city, Buraidah, is a bustling hub that showcases the unique charm of Al-Qassim.</p>
   </div>
   </div>
   </div>
    
   <Cards></Cards>

   </div>
   </div>

    </>

  )
}
