import React from "react";

export default function NTPCBanner() {
  return (
    <div className="w-full bg-gray-100 flex items-center justify-center p-6">
      {/* Banner Container */}
      <div className="relative w-full max-w-6xl h-48 md:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-xl">
        {/* Background Image */}
        <img
          src="/mnt/data/Screenshot 2026-02-26 012346.png"
          alt="NTPC Mining and Industrial Training Institute"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-extrabold text-orange-600 tracking-wide">
            NTPC-MINING AND INDUSTRIAL TRAINING INSTITUTE BARKAGAON
          </h1>

          <p className="mt-2 text-sm sm:text-base md:text-lg font-semibold text-gray-800">
            AN ISO 9001-2015 CERTIFIED INSTITUTE
          </p>

          <p className="mt-1 text-sm sm:text-base font-bold text-orange-600">
            DGT Star Rating 3.04
          </p>
        </div>
      </div>
    </div>
  );
}
