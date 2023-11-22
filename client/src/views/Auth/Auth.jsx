import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import './Auth.scss';
import { HeaderPage, BUTTON, Login, Register } from '../../compontents';
import { LOGO } from '../../assets/images';

const Auth = () => {
  const [isLogin, seIsLogin] = useState(true)
  return (
    <section className='authContent'>
      <HeaderPage heading='Authentication' />
      <Container>
        <div className="authContent__card">
          <div className="auth-body">
            <img src={LOGO} alt="Logo" />
            {
              isLogin ? <Login /> : <Register /> 
            }
          </div>
          <div className="auth-footer">
            <p>{ isLogin ? 
                  'Dont have any account?' : 
                  'Already have an account?' 
            }</p>
            <BUTTON 
              handelClick={e=>seIsLogin(!isLogin)}
            >{ isLogin ? 
                  'Register' : 
                  'Login' 
            }</BUTTON>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Auth