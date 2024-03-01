import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Signup from '../Signup'

import Complaint from '../Complaint'

import SocietyRegister from '../SocietyRegister'
import Login from '../Login'
import Educational from '../Educational'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/complaint' element={<Complaint/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/society/signup' element={<SocietyRegister/>}/>
      <Route path='/education' element={<Educational/>}/>
      


    </Routes>
  )
}

export default AllRoutes