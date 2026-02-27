import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [values,setValues]=useState({
        name:"",
        email:"",
        password:""
    })
    const navigate=useNavigate();
    const submitHandler=(e)=>{
        e.preventDefault();

        const formData= new FormData();
        formData.append("name",values.name);
        formData.append("email",values.email);
        formData.append("password",values.password);
        formData.append("des",values.des);
        formData.append("hobby",values.hobby);
        formData.append("image",values.image);

        axios.post('http://localhost:8001/student',formData,{
          headers:{
            "content-type":"multipart/form-data"
          }
        })
        .then(res=>{
            console.log(res);
            navigate('/');
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className='flex h-[100vh] bg-amber-600 justify-center items-center'>

      <div className='w-[700px] bg-amber-300 rounded-2xl p-4 text-black'>

        <form onSubmit={submitHandler}>
            <h1>Add Students</h1>
            <div className='mb-2'>
                <level>Name</level>
               <input type="text" placeholder="Success" className="input input-success w-full bg-amber-50" 
               onChange={e=>setValues({...values,name: e.target.value})}
               />

            </div>
             <div className='mb-2'>
                <level>Email</level>
                <input type="email" placeholder="Warning" className="input input-warning w-full bg-amber-50" 
                onChange={e=>setValues({...values,email: e.target.value})}
                />
            </div>
             <div className='mb-2'>
                <level>password</level>
                <input type="password" placeholder="Warning" className="input input-warning w-full bg-amber-50" 
                onChange={e=>setValues({...values,password: e.target.value})}
                />
            </div>
            <div className='mb-2'>
              <label>Image</label>
              <input type="file"
              className="file-input file-input-borderd w-full"
              onChange={e=>setImage(e.target.files[0])}
              required
              />
            </div>
            <button className='btn btn-secondary m-2'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Create