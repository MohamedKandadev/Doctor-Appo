import React from 'react';
import { Col } from 'react-bootstrap';

import './Specialities.scss';
import { useGetSpecialitiesQuery } from '../../store/Specialities/SpecialitiesApi';

const Specialities = ({
  changeSpecialitie,
  doctorFilter
}) => {
  const { data } = useGetSpecialitiesQuery();
  console.log(data)
  return (
    <Col sm='12' className='px-4'>
      <ul className='specialities-nav'>
        <li 
          className={doctorFilter.specialitie === null && 'active'} 
          onClick={_=>changeSpecialitie(null)}
        >All</li>
        {
          data && data.map(specialitie => (
            <li 
              key={specialitie._id}
              onClick={_=>changeSpecialitie(specialitie._id)}
              className={doctorFilter.specialitie === specialitie._id ? 'active' : null}
            >{specialitie.title}</li>
          ))
        }
      </ul>
    </Col>
  )
}

export default Specialities