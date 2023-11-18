import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Doctors, Auth } from '../views';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/auth' element={<Auth />} />
    </Routes>
  )
}

export default MainRoutes