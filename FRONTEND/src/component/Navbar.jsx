import React from 'react'

const Navbar = () => {
  return (
 <>
 <div className="navbar bg-blue-400 shadow-lg h-[130px] text-bold">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden h-24">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
     
    </div>
    <a className="btn btn-ghost text-3xl">MAITI</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 text-2xl">
      <li><a href='/'>HOME</a></li>
      <li>
        <details>
          <summary>ABOUT</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
             <li><a href='/aboutus'>About us</a></li>
            <li><a href='/admission'>Admission</a></li>
             <li><a href='/award'>Award and Achievement</a></li>
            <li><a href='/Chairman'>IMC Chairman & Members</a></li>
          </ul>
        </details>
      </li>
      <li><a href='/course'>COURSE</a></li>
      <li>
        <details>
          <summary>OUR TEAM</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
             <li><a>Technical Facility</a></li>
            <li><a href='/staff'>Administrative stafs</a></li>
            
          </ul>
        </details>
      </li>
       <li><a>GALLERY</a></li>
       <li>
        <details>
          <summary>TRAINING</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
             <li><a href='/session'>Yearwise</a></li>
            <li><a>Placement</a></li>
            <li><a>Achievements</a></li>
            
          </ul>
        </details>
      </li>
    </ul>
   
  </div>
  <div className="navbar-end">
    <a className="btn"href='/apply'>Apply Now </a>
  </div>
</div>
 </>
  )
}

export default Navbar