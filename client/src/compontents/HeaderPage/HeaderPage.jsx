import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './HeaderPage.scss';
import { BUTTON } from '../'

const HeaderPage = ({heading}) => {
  return (
    <header className='headerPageContent'>
      <Container>
        <h2 className='headerPageContent__heading'>{heading}</h2>
        <BUTTON>
          <Link to='/'>Home</Link>
          <span>/</span>
          <span>{heading}</span>
        </BUTTON>
      </Container>
    </header>
  )
}

export default HeaderPage