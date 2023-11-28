import React from 'react'
import Cards from './Cards'


export default function () {
  return (
    <>
    <div className="h-[100vh] flex items-end bg-cover bg-[url('./img/Abha.jpg')] max-sm:h-[70vh] max-sm:items-start max-sm:bg-cover ">
 
    <div className=" w-full flex-col justify-between max-sm:mt-14">

    <div className="flex justify-center">
   <div className="text-center w-[70vw] h-[40vh] rounded-md bg-[rgba(255,255,255,0.8)] max-sm:h-[50vh]">
   <p className="text-3xl pt-10 font-bold ">Abha</p>
   <div className="flex justify-center pt-6 ">
   <p className="w-[60vw] h-40 ">Abha is a picturesque city situated in the Asir Province of Saudi Arabia. Located in the southwestern part of the country, it is known for its stunning natural beauty, pleasant climate, and unique cultural heritage.</p>
   </div>
   </div>
   </div>
     
    <Cards></Cards>
 
    </div>
    </div>
 
     </>
 
  )
}
