import React from 'react';

import './Icon.scss';

const Icon = ({children, variante, classStyle}) => {
  return (
    <span className={`main-icon ${variante} ${classStyle}`}>
      {children}
    </span>
  )
}

export default Icon