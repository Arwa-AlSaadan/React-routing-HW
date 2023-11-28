import React from 'react'
import Cards from './Cards'

export default function Home() {
  return (
  
    <>
    <div className="h-[100vh]  flex items-end bg-green-100 max-sm:h-[60vh] max-sm:items-start  ">
 
    <div className=" w-full flex-col justify-between max-sm:mt-14">
 
    <div className="flex justify-center items-center">
    <div className="flex justify-center items-center text-center w-[70vw] h-[40vh] rounded-md bg-[rgba(255,255,255,0.8)]">
    <p className="text-3xl font-bold max-sm:p-2">Explore the cities of Saudi Arabia</p>
  
    </div>
    </div>
     
    <Cards></Cards>
 
    </div>
    </div>
 
     </>
  )
}
