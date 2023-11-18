import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Footer.scss';
import { BUTTON } from '../../compontents';

const Footer = () => {
  return (
    <footer className='footerContent'>
      <Container>
        <div className="copyright">
          Copyright © 2023 Developed by 
          <a href="https://kandadev.tech/" target='_blank'> Kandad Mohamed </a>
          with ❤️
        </div>
      </Container>
    </footer>
  )
}

export default Footer