import React from 'react';

import './Loading.scss';
import ICONLOAD from '../../../assets/images/shap3.png';

const Loading = () => {
  return (
    <img src={ICONLOAD} alt="" className='img-loading' />
  )
}

export default Loading

export const ButtonLoader = _ =>(
<div className="loader">
</div>
)
