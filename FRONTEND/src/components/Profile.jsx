import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Profile = () => {

    const {id}=useParams();
    const navigate = useNavigate();

    const[student, setStudent] = useState(null);
    useEffect(()=>{
        axios.get('http://localhost:8001/read/')
         .then(res=>{
                console.log(res);
                setValues({...values,name:res.data[0].name,email:res.data[0].email})
        })
            .catch(err=>console.log(err));
    
        },[])
    if (!student){
        return <div className="text-center mt-10">Loading...</div>
    }

  return (
    
  <div>
    <div className='flex min-h-screen bg-blue-500 justify-center items-center'>
        <div className='w-[500px] bg-white rounded-2xl shadow-lg p-6'>
            <h1 className='text-2xl font-bold mb-4 text-center'>Student Profile</h1>
            <div className='flex justify-center mb-4'>
                <img src={'http://localhost:8001/images/${student.images}'}
                alt="student"
                className='w-32 h-32 object-cover rounded-full border'
                />
                <div className='flex justify-center mt-6'>
                    <p><strong>Name:</strong>{student.name}</p>
                    <p><strong>Email:</strong>{student.email}</p>
                    <p><strong>Des:</strong>{student.des}</p>
                    <p><strong>Hobby:</strong>{student.hobby}</p>
                    
                </div>
                <div className='flex justify-center mt 6'>
                    <button onClick={()=> navigate('/')}
                    className='btn btn-secondary'>Back</button>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Profile