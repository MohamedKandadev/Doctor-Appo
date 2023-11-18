import React from 'react';
import { Container } from 'react-bootstrap';

import './Auth.scss';
import { HeaderPage } from '../../compontents'

const Auth = () => {
  return (
    <section className='authContent'>
      <HeaderPage heading='Authentication' />
      <Container>
        <div className="authContent__card"></div>
      </Container>
    </section>
  )
}

export default Auth