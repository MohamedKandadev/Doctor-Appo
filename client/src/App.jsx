import { useState } from 'react';

import { NavBar, Footer } from './layoutes';
import Routes from './routes/Routes';

function App() {
  return (
    <>
      <NavBar />
      <Routes />
      <Footer />
    </>
  )
}

export default App
