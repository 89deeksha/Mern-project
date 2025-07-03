import React from 'react'
import './App.css'
import Home from './Home/home'
import { Route, Routes } from 'react-router-dom'

import Contacts from './Components/Contacts'
import Course from './Courses/Course'
import Signup from './Components/Signup'

function App() {
  return (
    <>
    {/* <Home/>
    <Contacts/> */}
  <Routes>
    
  <Route path='/' element={<Home/>}/>
  {/* <Route path='/contact' element={<Contacts/>}/> */}
  <Route path='/course' element={<Course/>}/>
  <Route path='/contacts' element={<Contacts/>}/>
  <Route path='/signup' element={<Signup/>}/>

    
  </Routes>
   
    
    </>
   

    
    
  )
}

export default App