import React from "react";

const CoursesCategories = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="flex items-center justify-center mb-14">
          <div className="w-20 h-[2px] bg-cyan-500"></div>
          <h2 className="mx-4 text-2xl font-semibold text-cyan-500 tracking-wide uppercase">
            Courses Categories
          </h2>
          <div className="w-20 h-[2px] bg-cyan-500"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* LEFT SIDE (2 stacked images) */}
          <div className="md:col-span-2 grid grid-rows-2 gap-6">

            {/* Electrician (Top Large) */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://ntpcmaiti.org/assets/site/img/cat-1.jpg"
                alt="Electrician"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-gray-800 font-medium shadow">
                Electrician
              </div>
            </div>

            {/* Fitter (Bottom Large) */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://ntpcmaiti.org/assets/site/img/cat-2.jpg"
                alt="Fitter"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-gray-800 font-medium shadow">
                Fitter
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (Tall Welder Image) */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://ntpc.co.in/sites/default/files/inline-images/iti-students-workshop.jpg"
              alt="Welder"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-4 right-4 bg-white px-4 py-2 text-gray-800 font-medium shadow">
              Welder
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoursesCategories;