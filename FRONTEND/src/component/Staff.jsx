import React from 'react'

const Staff = () => {
  return (
   <section className="w-full">
      {/* Hero Container */}
      <div className="relative w-full h-[250px] md:h-[350px] lg:h-[420px] overflow-hidden">
        {/* Background Image */}
        <img
          src="/image/WhatsApp Image 2026-02-27 at 2.39.21 PM.jpeg"
          alt="Apply Now Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide">
            Administrative Staff
          </h1>

          <p className="mt-4 text-sm md:text-base text-gray-200">
            <span className="hover:text-orange-400 cursor-pointer transition">
              Home
            </span>
            <span className="mx-2">/</span>
            <span className="hover:text-orange-400 cursor-pointer transition">
              Our Team
            </span>
            <span className="mx-2">/</span>
            <span className="text-orange-400">  Administrative</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Staff