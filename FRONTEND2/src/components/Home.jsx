import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:8001/')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err));
  },[])

      const deleteHandler=(id)=>{
        axios.delete('http://localhost:8001/delete/'+id)
        .then(res=>{
          location.reload();

        })
        .catch(err=>console.log(err));
      }

  return (
    <div className='flex h-[120vh] bg-amber-600 justify-center items-center'>
      <div className='w-[1000px] bg-amber-50 rounded-2xl p-4'>
        <h1>STUDENTS LIST</h1>
        <div className='flex justify-end'>
          <Link to='/create' className='btn btn-info m-2' >CREATE+</Link>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>PASSWORD</th>
               <th>DES</th>
              <th>HOBBY</th>
            <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student,index) =>{
              return (
              <tr key={index}>
                      <td>{student.id}</td>
                       <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.password}</td>
                       <td>{student.des}</td>
                        <td>{student.hobby}</td>
                        <td>
                          <td>
                            <img src={`http://localhost:8001/image/${student.image}`} alt="student"
                            className="w-14 h-14 object-cover rounded-full mx-auto border-2 border-indigo-400 shadow"
                            />
                          </td>
                      <Link to={`/read/${student.id}`} className="btn btn-neutral m-2">READ</Link >
                      <Link to={`/edit/${student.id}`} className="btn btn-primary m-2">EDIT</Link>
                      <button onClick={()=>deleteHandler(student.id)} className="btn btn-secondary m-2">DELETE</button>
                     

                        </td>

              </tr>
              )
              
            })}
          </tbody>
        </table>
         <Link to="/knowmore" className="btn btn-primary m-2">KNOWMORE</Link>
       
      </div>
    </div>
  
  )
}

export default Home