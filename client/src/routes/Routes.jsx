import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Doctors, Auth, Appointment } from '../views';
import { UserNotLoggedIn } from './ProtectRoutes';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/appointment/:doctorId' element={<Appointment />} />
      {/* Private Routes When User Is Not Logged In */}
      <Route path='' element={<UserNotLoggedIn />} >
        <Route path='/auth' element={<Auth />} />
      </Route>
    </Routes>
  )
}

export default MainRoutes