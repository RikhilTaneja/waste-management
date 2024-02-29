import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Signup from '../Signup'
import SocietyRegister from '../SocietyRegister'
import Login from '../Login'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/society/signup' element={<SocietyRegister/>}/>
      

    </Routes>
  )
}

export default AllRoutes