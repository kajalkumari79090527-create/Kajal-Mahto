import React, { useState } from "react";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    qualification: "",
    address: "",
    mobile: "",
    pap: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 md:p-10">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900">
          Admission Form
        </h2>

        <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
          Admission Form for students interested in ITI courses such as
          Fitter, Welder, Electrician, etc. Please fill in all details
          carefully. Incomplete or incorrect information may lead to
          rejection.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Full Name */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Full Name of Student <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Father's Name */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Father's Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Qualification */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Qualification <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              pattern="[0-9]{10}"
              placeholder="Enter 10 digit number"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* PAP Selection */}
          <div>
            <label className="block font-semibold text-gray-700 mb-3">
              Are you PAP (परियोजना प्रभावित लोग) <span className="text-red-500">*</span>
            </label>

            <div className="flex items-center gap-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="pap"
                  value="Yes"
                  checked={formData.pap === "Yes"}
                  onChange={handleChange}
                  required
                />
                Yes
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="pap"
                  value="No"
                  checked={formData.pap === "No"}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4 text-center">
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-xl shadow-md transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}