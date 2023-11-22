import React from 'react';

import './Error.scss';

const MessageError = ({ children }) => {
  return (
    <p className='messgae-error'>
      {children}
    </p>
  )
}

export default MessageError