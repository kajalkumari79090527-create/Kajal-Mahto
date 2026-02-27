import React from 'react'

const Principle = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white border rounded-md shadow-sm p-8 flex flex-col md:flex-row gap-8 items-start">

        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/150x180"
          alt="Mithlesh Kumar Upadhyay"
          className="w-36 h-44 object-cover border"
        />

        {/* Profile Details */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold tracking-wide text-gray-800 uppercase">
            Mithlesh Kumar Upadhyay
          </h1>

          <p className="text-gray-700 text-lg">
            <span className="font-medium">Designation:</span>{" "}
            <span className="font-semibold">
              Principal/Suprintendent
            </span>
          </p>

          <p className="text-gray-700 text-lg">
            <span className="font-medium">Mobile:</span>
          </p>
 <p className="text-gray-700 text-lg">
            <span className="font-medium">Incharge:</span>
          </p>

          <p className="text-gray-700 text-lg">
            <span className="font-medium">Date of Joining:</span>{" "}
            <span className="font-semibold">04-01-2015</span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Principle