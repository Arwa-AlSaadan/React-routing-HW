import React from 'react'
import Cards from './Cards'


export default function Card5() {
  return (
    <>
    <div className="h-[100vh] flex items-end bg-cover bg-[url('./img/Hail.jpg')] max-sm:h-[70vh] max-sm:items-start max-sm:bg-cover ">
 
    <div className=" w-full flex-col justify-between max-sm:mt-14">

   <div className="flex justify-center">
   <div className="text-center w-[70vw] h-[40vh] rounded-md bg-[rgba(255,255,255,0.8)] max-sm:h-[50vh]">
   <p className="text-3xl pt-10 font-bold ">Hail</p>
   <div className="flex justify-center pt-6 ">
   <p className="w-[60vw] h-40 ">Hail is a captivating city located in the north-central region of Saudi Arabia. It is known for its rich history, cultural heritage, and unique desert landscapes.</p>
   </div>
   </div>
   </div>
     
    <Cards></Cards>
 
    </div>
    </div>
 
     </>
 
  )
}
