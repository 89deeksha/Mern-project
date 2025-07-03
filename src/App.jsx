import React from 'react'
import './App.css'
import Home from './Home/home'
import { Route, Routes } from 'react-router-dom'

import Contacts from './Components/Contacts'
import Course from './Courses/Course'

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

    
  </Routes>
   
    
    </>
   

    
    
  )
}

export default App