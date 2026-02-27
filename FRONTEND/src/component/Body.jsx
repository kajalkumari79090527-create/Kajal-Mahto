//  import React from 'react'
// // import img from "../../public/image"

// const Body = () => {
//   return (
// <>
// <div className="carousel w-full">
//   <div id="item1" className="carousel-item w-full">
//     <img
//       src=""
//       className="w-full" />
//   </div>
//   <div id="item2" className="carousel-item w-full">
//     <img
//       src=""
//       className="w-full" />
//   </div>
//   <div id="item3" className="carousel-item w-full">
//     <img
//       src=""
//       className="w-full" />
//   </div>
//   <div id="item4" className="carousel-item w-full">
//     <img
//       src={'https://ntpcmaiti.org/assets/site/img/carousel-1.jpg'}
//       className="w-full" />
//   </div>
// </div>
// <div className="flex w-full justify-center gap-2 py-2">
//   <a href="#item1" className="btn btn-xs">1</a>
//   <a href="#item2" className="btn btn-xs">2</a>
//   <a href="#item3" className="btn btn-xs">3</a>
//   <a href="#item4" className="btn btn-xs">4</a>
// </div>
// </>
//   )
// }

// export default Body


import React from "react";

const Body = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="/image/photo3.jpg"
            className="w-full m-auto h-[800px]"
            alt="Slide 1"
          />
        </div>

        <div id="item2" className="carousel-item w-full">
          <img
            src="/image/pho.jpg"
            className="w-full h-[800px] "
            alt="Slide 2"
          />
        </div>

        <div id="item3" className="carousel-item w-full">
          <img
            src="/image/pho1.jpg"
            className="w-full h-[800px]"
            alt="Slide 3"
          />
        </div>

        <div id="item4" className="carousel-item w-full">
          <img
            src="/image/pho3.jpg"
            className="w-full h-[600px]"
            alt="Slide 4"
          />
        </div>
        
      </div>

      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">1</a>
        <a href="#item2" className="btn btn-xs">2</a>
        <a href="#item3" className="btn btn-xs">3</a>
        <a href="#item3" className="btn btn-xs">4</a>
        
       
       
      </div>
    </>
  );
};

export default Body;