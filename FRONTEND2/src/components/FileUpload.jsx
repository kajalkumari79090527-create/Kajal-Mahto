// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// const FileUpload = () => {
//  const [file,setFile]=useState();
//  const [data,setData]=useState([]);

//  const fileHandler=(e)=>{
//   setFile(e.target.files[0])
//  }
//  useEffect(()=>{
//   axios.get("http://localhost:8001/")
//   .then(res=>{
//     setData(res.data[0])
//   })
//  },[])

//  const UploadHander=()=>{
//   const formdata=new FormData();
//   formdata.append('image',file)
//   axios.post('http://localhost:8001/upload',formdata)
//   .then(res=>{
//     if(res.data.status==="success"){
//       console.log("succeeded.")

      
//     }else{
//           console.log("Failed.")

//         }
//       }
//       )
//   .catch(err=>console.log(err))

//     }



//   return (
//    <div className='bg-red-600 h-20'>
//     <input type='file'onChange={fileHandler}/>
//     <button className='btn' onClick={UploadHander}></button><br></br><br></br>
//     <div className='h-64 w-64 border m-auto'>
//       <img src={'http://localhost:8001/images/'+data.image} alt=''/>
//     </div>
//    </div>
//   )
// }

// export default FileUpload