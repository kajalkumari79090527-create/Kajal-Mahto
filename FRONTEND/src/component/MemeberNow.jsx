import React from 'react'

const MemeberNow = () => {
  return (
    
    
    
      
        <section className="w-full">
          {/* Hero Container */}
          <div className="relative w-full h-[250px] md:h-[350px] lg:h-[420px] overflow-hidden">
            {/* Background Image */}
            <img
              src="/mnt/data/Screenshot 2026-02-26 015308.png"
              alt="Apply Now Banner"
              className="absolute inset-0 w-full h-full object-cover"
            />
    
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
    
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide">
                IMC-Members
              </h1>
    
              <p className="mt-4 text-sm md:text-base text-gray-200">
                <span className="hover:text-orange-400 cursor-pointer transition">
                  Home
                </span>
                <span className="mx-2">/</span>
                <span className="hover:text-orange-400 cursor-pointer transition">
                  Pages
                </span>
                <span className="mx-2">/</span>
                <span className="text-orange-400">IMC-Members</span>
              </p>
            </div>
          </div>
        </section>
      )
    }
    
    export default MemeberNow
  