import { useState } from 'react';

import { NavBar, Footer } from './layoutes';
import Routes from './routes/Routes';
import { useGetCurrenUserQuery } from './store/Auth/AuthApi';

function App() {
  const {} = useGetCurrenUserQuery();
  return (
    <>
      <NavBar />
      <Routes />
      <Footer />
    </>
  )
}

export default App
