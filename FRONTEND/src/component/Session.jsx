import React from 'react'

const Session = () => {
     const students = [
    { sl: 1, session: "2015-17", trade: "Electrician", duration: "2 years", admitted: 42 },
    { sl: 2, session: "2015-17", trade: "Fitter", duration: "2 years", admitted: 42 },
    { sl: 3, session: "2015-16", trade: "Welder", duration: "1 years", admitted: 42 },
    { sl: 4, session: "2016-17", trade: "Welder", duration: "1 years", admitted: 32 },
    { sl: 5, session: "2017-18", trade: "Welder", duration: "1 years", admitted: 24 },
    { sl: 6, session: "2017-19", trade: "Electrician", duration: "2 years", admitted: 34 },
    { sl: 7, session: "2017-19", trade: "Fitter", duration: "2 years", admitted: 34 },
    { sl: 8, session: "2018-19", trade: "Welder", duration: "1 years", admitted: 34 },
    { sl: 9, session: "2019-21", trade: "Electrician", duration: "2 years", admitted: 20 },
    { sl: 10, session: "2019-21", trade: "Fitter", duration: "2 years", admitted: 20 },
    { sl: 11, session: "2019-20", trade: "Welder", duration: "1 years", admitted: 25 },
    { sl: 12, session: "2020-21", trade: "Welder", duration: "1 years", admitted: 28 },
    { sl: 13, session: "2020-22", trade: "Electrician", duration: "2 years", admitted: 19 },
    { sl: 14, session: "2020-22", trade: "Fitter", duration: "2 years", admitted: 20 },
    { sl: 15, session: "2021-23", trade: "Electrician", duration: "2 years", admitted: 20 },
    { sl: 16, session: "2021-23", trade: "Fitter", duration: "2 years", admitted: 20 },
    { sl: 17, session: "2021-22", trade: "Welder", duration: "1 years", admitted: 40 },
     { sl: 18, session: "2022-24", trade: "Fitter", duration: "2 years", admitted: 20 },
    { sl: 19, session: "2022-24", trade: "Electrician", duration: "2 years", admitted: 20 },
    { sl: 20, session: "2022-24", trade: "Fitter", duration: "2 years", admitted: 20 },
    { sl: 21, session: "2022-23", trade: "Welder", duration: "1 years", admitted: 40 },
  ];
  return (
     <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ===== Heading ===== */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-[2px] w-20 bg-cyan-600"></div>
          <h1 className="mx-6 text-2xl md:text-3xl font-bold text-cyan-600 tracking-wide">
            STUDENTS: YEARWISE
          </h1>
          <div className="h-[2px] w-20 bg-cyan-600"></div>
        </div>

        {/* ===== Table ===== */}
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-cyan-500 text-white">
                  <th className="px-4 py-3">SL</th>
                  <th className="px-4 py-3">Session</th>
                  <th className="px-4 py-3">Trade</th>
                  <th className="px-4 py-3">Course Duration</th>
                  <th className="px-4 py-3">Admitted No of Trainees</th>
                </tr>
              </thead>
                <tbody>
                {students.map((item, index) => (
                  <tr
                    key={item.sl}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                    }`}
                  >
                    <td className="px-4 py-3">{item.sl}.</td>
                    <td className="px-4 py-3">{item.session}</td>
                    <td className="px-4 py-3">{item.trade}</td>
                    <td className="px-4 py-3">{item.duration}</td>
                    <td className="px-4 py-3 text-center font-medium">
                      {item.admitted}
                    </td>
                  </tr>
                ))}
              </tbody>
                   </table>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Session