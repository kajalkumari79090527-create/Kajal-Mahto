import React from 'react'

const Message = () => {
  return (
     <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-6">Messages</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT SECTION */}
          <div className="lg:col-span-2 bg-white shadow-md rounded-md p-6">
            <h2 className="text-xl font-semibold mb-4 border-b pb-2">
              Chairman's Message
            </h2>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Text Content */}
              <div className="flex-1 text-gray-700 text-sm leading-relaxed">
                <p className="mb-4">
                  Greetings and a very warm welcome to NTPC MAITI ITI’s website.
                  In this era of globalization of education the obvious focus is
                  on the quality of education. There is no single yardstick of
                  quality. A good educational institution strives continuously
                  for sustenance and enhancement of quality in every field of
                  its activity.
                </p>

                <p className="mb-4">
                  As NTPC MAITI works diligently to realise its mission of
                  providing the best learning opportunities for academic
                  excellence to students, it continues to provide students with
                  the basics of technical knowledge coupled with high values to
                  achieve given below objectives:
                </p>
                   <ul className="space-y-2 mb-4">
                  {[
                    "To upgrade the skill level of youths of Project affected area to enhance their employability.",
                    "To create opportunities for self-employment.",
                    "To prepare the youth for upcoming industries in Jharkhand State as well as in the country.",
                    "To inculcate industrial work culture among the trainees.",
                    "To develop trainees to become catalysts in bringing a positive change in their societies.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="mb-4">
                  NTPC recreated a culture of learning with joy, and enable
                  students to acquire skills in trades such as electrician,
                  fitter and welder that provide a foundation for the next
                  phases of their careers and lives.
                </p>

                <p className="font-semibold mt-6">
                  Mr. Faiz Taiyab,
                  <br />
                  HOP,
                  <br />
                  NTPC PBCMP
                </p>
              </div>
               {/* Image */}
              <div className="w-full md:w-56 flex-shrink-0">
                <img
                  src="https://ntpcmaiti.org/assets/site/img/members/chairman.jpg"
                  alt="Chairman"
                  className="rounded-md shadow-sm w-full"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <h2 className="text-lg font-semibold p-4 border-b">
              ISTD: CONFERENCE
            </h2>

            <div className="bg-green-700 text-white p-6 text-center">
              <h3 className="text-xl font-bold mb-2">
                ISTD Eastern Regional Conference & Exhibition 2024
              </h3>

              <p className="text-sm mb-2">
                Organized by Ranchi Chapter <br />
                on 19th & 20th April 2024
              </p>

              <div className="bg-orange-500 text-white text-sm py-1 px-2 rounded mb-3">
                Venue : Convention Centre, Darbhanga House, CCL Ranchi
              </div>
               <h4 className="font-semibold mt-2">Theme of the Conference:</h4>
              <p className="text-sm mt-1">
                Empowering HR for embracing New Technology for Sustainable
                Development.
              </p>
            </div>

            <div className="p-4 text-sm text-gray-700 leading-relaxed">
              <p>
                The top environmental issues are selfishness, greed, and apathy
                to deal with them. There is a need for behavioral and cultural
                transformation in the human resource management space,
                particularly in life skills, to place our country as a global
                knowledge and superpower centre.
              </p>

              <button className="text-blue-600 mt-3 hover:underline">
                More...
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Message