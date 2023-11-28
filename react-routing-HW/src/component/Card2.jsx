import React from 'react'
import Cards from './Cards'

export default function Card2() {
  return (
    <>
   <div className="h-[100vh] flex items-end bg-cover bg-[url('./img/Dammam.jpg')] max-sm:h-[70vh] max-sm:items-start max-sm:bg-cover ">

   <div className=" w-full flex-col justify-between max-sm:mt-14 ">

   <div className="flex justify-center">
   <div className="text-center w-[70vw] h-[40vh] rounded-md bg-[rgba(255,255,255,0.8)]  max-sm:h-[50vh]">
   <p className="text-3xl pt-10 font-bold ">Dammam</p>
   <div className="flex justify-center pt-6 ">
   <p className="w-[60vw] h-40 ">Dammam is a vibrant city located in the Eastern Province of Saudi Arabia. It is the capital of the Eastern Province and serves as a major economic and cultural center in the region.</p>
   </div>
   </div>
   </div>
    
   <Cards></Cards>

   </div>
   </div>

    </>

  )
}
