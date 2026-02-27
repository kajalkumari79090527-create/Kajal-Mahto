// export default function Admission() {
//   const data = [
//     {
//       sl: 1,
//       trade: "Fitter, Electrician",
//       duration: "02 Years",
//       category: "GEN & OBC",
//       pap: "PAP",
//       training: "2750.00",
//       caution: "250.00",
//       total: "3000.00",
//     },
//     {
//       sl: 2,
//       trade: "Fitter, Electrician",
//       duration: "02 Years",
//       category: "SC, ST, Women & PH",
//       pap: "PAP",
//       training: "350.00",
//       caution: "250.00",
//       total: "600.00",
//     },
//     {
//       sl: 3,
//       trade: "Fitter, Electrician",
//       duration: "02 Years",
//       category: "GEN & OBC",
//       pap: "Non PAP",
//       training: "27930.00",
//       caution: "250.00",
//       total: "3000.00",
//     },
//     {
//       sl: 4,
//       trade: "Fitter",
//       duration: "02 Years",
//       category: "SC, ST, Women & PH",
//       pap: "Non PAP",
//       training: "25530.00",
//       caution: "1000.00",
//       total: "26530.00",
//     },
//     {
//       sl: 5,
//       trade: "Welder",
//       duration: "01 Years",
//       category: "GEN & OBC",
//       pap: "PAP",
//       training: "1375.00",
//       caution: "250.00",
//       total: "1625.00",
//     },
//     {
//       sl: 6,
//       trade: "Welder",
//       duration: "01 Years",
//       category: "GEN & OBC",
//       pap: "PAP",
//       training: "175.00",
//       caution: "250.00",
//       total: "425.00",
//     },
//     {
//       sl: 7,
//       trade: "Welder",
//       duration: "01 Years",
//       category: "GEN & OBC",
//       pap: "PAP",
//       training: "13965.00",
//       caution: "1000.00",
//       total: "14965.00",
//     },
//     {
//       sl: 8,
//       trade: "Welder",
//       duration: "01 Years",
//       category: "GEN & OBC",
//       pap: "PAP",
//       training: "12765.00",
//       caution: "1000.00",
//       total: "13765.00",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">

//         {/* Header */}
//         <div className="bg-cyan-500 text-white text-center py-4 text-lg font-semibold tracking-wide">
//           Fee Details
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm text-left border-collapse">
//             <thead>
//               <tr className="bg-cyan-500 text-white">
//                 <th className="px-4 py-3">SL</th>
//                 <th className="px-4 py-3">Trade</th>
//                 <th className="px-4 py-3">Duration</th>
//                 <th className="px-4 py-3">Category</th>
//                 <th className="px-4 py-3">PAP or Non PAP</th>
//                 <th className="px-4 py-3">Training Fee</th>
//                 <th className="px-4 py-3">Caution Money (Refundable)</th>
//                 <th className="px-4 py-3">Total</th>
//               </tr>
//             </thead>

//             <tbody>
//               {data.map((item, index) => (
//                 <tr
//                   key={item.sl}
//                   className={`border-b ${
//                     index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
//                   }`}
//                 >
//                   <td className="px-4 py-3">{item.sl}.</td>
//                   <td className="px-4 py-3">{item.trade}</td>
//                   <td className="px-4 py-3">{item.duration}</td>
//                   <td className="px-4 py-3">{item.category}</td>
//                   <td className="px-4 py-3">{item.pap}</td>
//                   <td className="px-4 py-3 text-right">{item.training}</td>
//                   <td className="px-4 py-3 text-right">{item.caution}</td>
//                   <td className="px-4 py-3 text-right font-medium">
//                     {item.total}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//       </div>
//     </div>
//   );
// }




import React from 'react'

const Admission = () => {
   const data = [
    {
      sl: 1,
      trade: "Fitter, Electrician",
      duration: "02 Years",
      category: "GEN & OBC",
      pap: "PAP",
      training: "2750.00",
      caution: "250.00",
      total: "3000.00",
    },
    {
      sl: 2,
      trade: "Fitter, Electrician",
      duration: "02 Years",
      category: "SC, ST, Women & PH",
      pap: "PAP",
      training: "350.00",
      caution: "250.00",
      total: "600.00",
    },
    {
      sl: 3,
      trade: "Fitter, Electrician",
      duration: "02 Years",
      category: "GEN & OBC",
      pap: "Non PAP",
      training: "27930.00",
      caution: "250.00",
      total: "3000.00",
    },
    {
      sl: 4,
      trade: "Fitter",
      duration: "02 Years",
      category: "SC, ST, Women & PH",
      pap: "Non PAP",
      training: "25530.00",
      caution: "1000.00",
      total: "26530.00",
    },
    {
      sl: 5,
      trade: "Welder",
      duration: "01 Years",
      category: "GEN & OBC",
      pap: "PAP",
      training: "1375.00",
      caution: "250.00",
      total: "1625.00",
    },
    {
      sl: 6,
      trade: "Welder",
      duration: "01 Years",
      category: "GEN & OBC",
      pap: "PAP",
      training: "175.00",
      caution: "250.00",
      total: "425.00",
    },
    {
      sl: 7,
      trade: "Welder",
      duration: "01 Years",
      category: "GEN & OBC",
      pap: "PAP",
      training: "13965.00",
      caution: "1000.00",
      total: "14965.00",
    },
    {
      sl: 8,
      trade: "Welder",
      duration: "01 Years",
      category: "GEN & OBC",
      pap: "PAP",
      training: "12765.00",
      caution: "1000.00",
      total: "13765.00",
    },
  ];
  return (
    <div>
            <div className="min-h-screen bg-gray-100 p-6">
       <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">

         {/* Header */}
         <div className="bg-cyan-500 text-white text-center py-4 text-lg font-semibold tracking-wide">
           Fee Details
        </div>

{/* //         {/* Table */}
         <div className="overflow-x-auto">
           <table className="w-full text-sm text-left border-collapse">
             <thead>               <tr className="bg-cyan-500 text-white">
                 <th className="px-4 py-3">SL</th>
                 <th className="px-4 py-3">Trade</th>
                 <th className="px-4 py-3">Duration</th>
                 <th className="px-4 py-3">Category</th>                
                  <th className="px-4 py-3">PAP or Non PAP</th>
                <th className="px-4 py-3">Training Fee</th>
                <th className="px-4 py-3">Caution Money (Refundable)</th>
                <th className="px-4 py-3">Total</th>
              </tr>
             </thead>
           <tbody>
              {data.map((item, index) => (
                <tr
                  key={item.sl}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"
                  }`}
                >
                  <td className="px-4 py-3">{item.sl}.</td>
                  <td className="px-4 py-3">{item.trade}</td>
                  <td className="px-4 py-3">{item.duration}</td>
                  <td className="px-4 py-3">{item.category}</td>
                  <td className="px-4 py-3">{item.pap}</td>
                  <td className="px-4 py-3 text-right">{item.training}</td>
                  <td className="px-4 py-3 text-right">{item.caution}</td>
                  <td className="px-4 py-3 text-right font-medium">
                    {item.total}
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

export default Admission