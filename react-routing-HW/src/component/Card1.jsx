import React from 'react'
import Cards from './Cards'



export default function Card1() {
  return (

    <>
   <div className="h-[100vh]  flex items-end bg-cover bg-[url('./img/Riyadh.jpg')] max-sm:h-[70vh] max-sm:items-start max-sm:bg-cover ">

   <div className=" w-full flex-col justify-between max-sm:mt-14">

   <div className="flex justify-center">
   <div className="text-center w-[70vw] h-[40vh] rounded-md bg-[rgba(255,255,255,0.8)] max-sm:h-[50vh] ">
   <p className="text-3xl pt-10 font-bold ">Riyadh</p>
   <div className="flex justify-center pt-6 ">
   <p className="w-[60vw] h-40 ">Riyadh is the capital city of Saudi Arabia and one of the largest cities in the country. Located in the heart of the Arabian Peninsula, Riyadh is a bustling metropolis known for its rich history, modern architecture, and vibrant culture.</p>
   </div>
   </div>
   </div>
    
   <Cards></Cards>

   </div>
   </div>

    </>

  )
}
