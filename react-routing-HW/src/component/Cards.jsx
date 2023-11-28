import React from 'react'
import {Link} from "react-router-dom";


export default function Cards() {
  return (

//  <div className="h-[100vh] flex items-end">

    <div className="h-[30vh] w-full flex justify-center gap-4 mt-14 pt-8 max-sm:flex-col  max-sm:bg-slate-100 max-sm:h-[120vh] max-sm:mt-16 ">
        
    <Link to="/Card1">  
    <div className="max-sm:flex max-sm:justify-center">
      <div className=" w-52 h-28 mt-4 border rounded-md flex justify-center items-center bg-[rgba(255,255,255,0.7)] " >
        <p className="font-bold text-lg " >Riyadh</p>
      </div>
    </div>
    </Link>


    <Link to="/Card2">
    <div className="max-sm:flex max-sm:justify-center">
      <div className="  w-52 h-28 mt-4 border rounded-md flex justify-center items-center bg-[rgba(255,255,255,0.7)]">
        <p className="font-bold text-lg">Dammam</p>
      </div>
    </div>
    </Link>

    <Link to="/Card3">
    <div className="max-sm:flex max-sm:justify-center">
      <div className="  w-52 h-28 mt-4 border rounded-md flex justify-center items-center bg-[rgba(255,255,255,0.7)]">
        <p className="font-bold text-lg" >Qassim</p>
      </div>
    </div>
    </Link>

    <Link to="/Card4">
    <div className="max-sm:flex max-sm:justify-center">
      <div className="  w-52 h-28 mt-4 border rounded-md flex justify-center items-center bg-[rgba(255,255,255,0.7)]">
        <p className="font-bold text-lg">Abha</p>
      </div>
    </div>
    </Link>

    <Link to="/Card5">
    <div className="max-sm:flex max-sm:justify-center">
      <div className="  w-52 h-28 mt-4 mb-14 border rounded-md flex justify-center items-center bg-[rgba(255,255,255,0.7)]">
        <p className="font-bold text-lg">Hail</p>
      </div>
    </div>
    </Link>
        
        
    
    </div>
// </div>

  )
}
