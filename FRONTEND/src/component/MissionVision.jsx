import React from 'react'

const MissionVision = () => {
  return (
    
     <section className="w-full bg-gray-100 py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[2px] bg-teal-500"></div>
            <h2 className="text-teal-600 font-semibold tracking-wide text-lg md:text-xl uppercase">
              Mission, Vission & Quality Policy
            </h2>
            <div className="w-12 h-[2px] bg-teal-500"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Mission */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Mission
              </h3>
               <p className="text-gray-700 leading-relaxed text-justify">
                This college aims to facilitate it with top-notch technical
                education. We hope to take this institution at the acme of
                technical education especially considering the new campus
                building that will further enhance the facilities for students.
                The institute is setup to promote higher learning and research
                in the field of engineering. The academy's objective is to
                setup a nucleus campus that should promote quality education in
                various disciplines of engineering to meet the ever-increasing
                demands of new millennium. Its major thrust is on achieving
                technical excellence through intensive classroom teaching,
                technical visits, expert lectures from eminent guest faculty,
                databases, elocutions, seminars, workshops, symposia, etc.
                Our aim is to provide platform for intensive research in
                pursuit of excellence. We also aim at multi-dimensional
                development of students to make them competent on the highest
                scale.
              </p>
            </div>
              {/* Vision */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Vission
              </h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                To upgrade the Institute as World Class Premium Vocational
                Training Institute with Excellent Infrastructure and
                environment, high training standards and constructive
                partnership with Industries, developing globally competitive
                skilled workforce and entrepreneur society. We at NTPC-MAITI
                Barkagaon Private industrial training institute are committed
                to develop skill sets suitable to the advancement of
                Manufacturing and Service sectors.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <img
              src="https://ntpcmaiti.org/assets/site/img/mission.jpg"
              alt="Mission Vision"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
               </div>
        </div>

        {/* Quality Policy */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Quality Policy
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
            <p>
              Growth of skill development is very important for the India
              youth. As per present scenario of India, there is a scope of
              large no. of Industrial Development for the fulfillment of the
              technical manpower.
            </p>

            <p>
              For improving the potential of young youth of India state we
              create an vision for the industrial development. Such step it
              taken by the NTPC Limited (A Govt. of India Enterprises) and
              Jharkhand Government Tool Room, Ranchi has made an MOU for moving
              an industrial training institute.
            </p>

            <p>
              On such note the NTPC Limited conceived establishment of
              NTPC-MAITI Barkagaon Private Industrial Training Institute at
              west part of Jharkhand of Village-Dhenga, Block-Barkagaon,
              Dist-Hazaribag, Jharkhand, which will impart industrial training
              in three trade of two unites in each namely Electrician, Welder &
              Fitter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision