import React from 'react';
import { Link } from 'react-router-dom';

import './Button.scss'

const Button = ({
  handelClick,
  to,
  type,
  children
}) => {
  
  if(to){
    return <Link 
      to={to}
      className='main-button'
    >
      {children}
    </Link>
  }
  return (
    <button 
      onClick={handelClick}
      className='main-button'
      type={type}
    >
      {children}
    </button>
  )
}

export default Button