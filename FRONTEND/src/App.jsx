// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import Read from './components/Read'
import Edit from './components/Edit'
import Knowmore from './components/Knowmore'
import FileUpload from './components/FileUpload'
import Profile from './components/Profile'


function App() {
  

  return (
    <  BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
       <Route path='/create' element={<Create/>}></Route>
        <Route path='/read:id' element={<Read/>}></Route>
         <Route path='/edit:id' element={<Edit/>}></Route>
         <Route path='/knowmore' element={<Knowmore/>}></Route>
          <Route path='/fileupload' element={<FileUpload/>}></Route>
           <Route path='/prifile' element={<Profile/>}></Route>

    </Routes>
     
     
    </ BrowserRouter>
  )
}

export default App
