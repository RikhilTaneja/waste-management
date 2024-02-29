import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Signup from '../Signup'
import Complaint from '../Complaint'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/complaint' element={<Complaint/>}/>

    </Routes>
  )
}

export default AllRoutes