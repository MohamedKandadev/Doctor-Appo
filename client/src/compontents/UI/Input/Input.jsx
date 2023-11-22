import React from 'react';

import './Input.scss';
import ERROR from '../Error/Error'

const Input = ({
  type = 'text',
  placeholder,
  changeHandler,
  error,
  value,
  name
}) => {
  return (
    <div className='main-input'>
      <input 
        type={type} 
        placeholder={placeholder}
        onChange={changeHandler}
        name={name}
        value={value}
      />
      {
        error && <ERROR>{error}</ERROR>
      }
    </div>
  )
}

export default Input

export const SelectInput = ({
  changeHandler,
  error,
  options,
  value,
  name
}) => {
  return (
    <div className='main-input'>
      <select name={name} onChange={changeHandler} value={value}>
        {options.map((opt, i) =><option key={i} value={opt}>{opt}</option>)}
      </select>
      {
        error && <ERROR>{error}</ERROR>
      }
    </div>
  )
}