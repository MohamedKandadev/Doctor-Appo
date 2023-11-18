import React from 'react';

import './Home.scss';
import { Banner, AboutUs, WorkingProcess, BestDoctrs } from '../../compontents';

const Home = () => {
  return (
    <section className='pageContent'>
      <Banner />
      <AboutUs />
      <WorkingProcess />
      <BestDoctrs />
    </section>
  )
}

export default Home