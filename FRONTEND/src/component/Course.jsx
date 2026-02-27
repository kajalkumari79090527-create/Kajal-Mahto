import React from "react";

function Course() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-cyan-600 tracking-wide">
            Our Courses
          </h1>
        </div>

        {/* Electrician */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">
            Electrician Trade
          </h2>
          <p className="text-sm text-gray-500 mb-3">Duration: Two Years</p>

          <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition">
            Download Syllabus
          </button>
        </div>

        {/* Fitter */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">
            Fitter Trade
          </h2>
          <p className="text-sm text-gray-500 mb-3">Duration: Two Years</p>

          <p className="text-gray-600 mb-4">
            ITI Fitter course is a trade related to the Mechanical branch.
            ITI Fitter syllabus includes knowledge about pipe fittings,
            machine fittings, and structure fittings which are the main
            working areas for a fitter.
          </p>

          <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition">
            Download Syllabus
          </button>
        </div>

        {/* Welder */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-gray-800">
            Welder Trade
          </h2>
          <p className="text-sm text-gray-500 mb-3">Duration: One Year</p>

          <p className="text-gray-600 mb-4">
            ITI Welder is a one-year vocational training program focused on
            welding, cutting, and brazing. Students learn Shielded Metal Arc
            Welding, Gas Metal Arc Welding, Plasma Cutting, Arc Gouging,
            and work with different metals and alloys. The course includes
            Professional Skill, Professional Knowledge, Engineering Drawing,
            Workshop Science & Calculation and Employability Skills.
          </p>

          <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition">
            Download Syllabus
          </button>
        </div>

        {/* Short Term Course */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold">
            Short Term Course
          </h2>
          <p className="mt-2 text-lg font-medium">
            Web Development with AI
          </p>
        </div>

      </div>
    </div>
  );
}

export default Course;