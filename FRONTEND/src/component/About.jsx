import React from 'react'

const About = () => {
  return (
     <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex items-center justify-center mb-12">
          <div className="w-16 h-[2px] bg-cyan-500"></div>
          <h2 className="mx-4 text-cyan-500 text-xl font-semibold tracking-wide uppercase">
            About Us
          </h2>
          <div className="w-16 h-[2px] bg-cyan-500"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <div>
            <img
              src="https://ntpcmaiti.org/assets/site/img/about.jpg"  // replace with your image path
              alt="NTPC MAITI Training"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Welcome to NTPC MAITI
            </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
              NTPC Ltd. (A government of India Undertaking), engaged in
              establishing, running power generation plants all over India to
              cater to the needs of power requirement of the total installed
              capacity of the company is 67,907.5 MW (including JVs) own
              stations includes 24 coal based, 7 gas based, 1 Hydro 1 Wind 13
              Solar and 1 Small hydro plant.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              NTPC has entered into coal mining also. In this context they are
              in the process to start pakri Barwadih coal mines near vill-
              Barkagaon, dist- Hazaribag, Jharkhand. Under corporate social
              responsibilities & skill development programmes NTPC want to
              prepare a bank of trained manpower to give employment to project
              affected people (PAP’s), & unemployed youths from neighboring
              areas.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              The NTPC MAITI is awarded with 3.04 star rating by Directorate
              General of Training New Delhi. The First Position in Hazaribagh
              District and 7th position in Jharkhand state among 250 ITIs.
            </p>
             <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About