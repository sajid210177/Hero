"use client";
import React from 'react'
import holeSection from "../assets/holesection.png";
import Image from 'next/image';





const Hero = () => {

  
  
  return (
   
    <div className='text-white'>
      
     <div className="bg-primary min-h-screen flex items-center justify-center">
     
       <div className="container mx-auto px-6 py-12">
       
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
        
          
          
          
          {/* Left side: Text */}
          <div className="lg:w-1/2 mb-20">
           
          
          
            <h1 className="text-xl font-bold  mb-4">
            New Collection
            </h1>
            <p className="text-4xl font-bold  mb-6">
            Elevate Your Style With
            </p>
            <p className="text-4xl font-bold  mb-6">
            Authentic Leather Masterpieces
            </p>
            <p className="text-4xl font-bold  mb-6">
            Masterpieces
            </p>
            <button href="#get-started" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
          
          {/* Right side: Image */}
          <div className="lg:w-1/2">
         
          <Image src={holeSection}
              alt="holesection"
              width={1043}
              height={769}
              className="" />
              
          </div>
          <div>
         
          </div>
        </div>
      </div>
    </div>
    
      
    
    </div>
    
    
  )
}

export default Hero;