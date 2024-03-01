import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Signup from '../Signup';
import Complaint from '../Complaint';
import SocietyRegister from '../SocietyRegister';
import Login from '../Login';
import Donation from '../Donation';
import Educational from '../Educational';
import Incentive from '../Incentive';
import CardDetail from '../CardDetail';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/complaint' element={<Complaint />} />
      <Route path='/login' element={<Login />} />
      <Route path='/society/signup' element={<SocietyRegister />} />
      <Route path='/donation' element={<Donation />} />
      <Route path='/education' element={<Educational />} />
      <Route path='/incentive' element={<Incentive />} />
      <Route path="/incentive/society/:id" element={<CardDetail/>} />

    </Routes>
  );
};

export default AllRoutes;
