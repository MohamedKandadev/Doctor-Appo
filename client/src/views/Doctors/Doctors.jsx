import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import './Doctors.scss';
import { HeaderPage, Specialities, DoctorCard, Paginate } from '../../compontents';
import { useGetDoctorsBySpecialtieQuery } from '../../store/Doctors/DoctorApi';

const Doctors = () => {
  const [doctorFilter, setDoctorFilter] = useState({
    page: 1,
    perPage: 9,
    specialitie: null
  })
  const {data} = useGetDoctorsBySpecialtieQuery(doctorFilter);
  console.log(data)
  const changeSpecialitie = value => {
    setDoctorFilter(prevState => ({
      ...prevState,
      specialitie: value
    }))
  }
  const changePaginate = value => {
    setDoctorFilter(prevState => ({
      ...prevState,
      page: value
    }))
  }
  return (
    <section className='pageDoctorsContent'>
      <HeaderPage heading='Doctors'/>
      <Container>
        <Row className='justify-content-center'>
          <Specialities doctorFilter={doctorFilter} changeSpecialitie={changeSpecialitie}/>
          {
            data && data.doctors.map(doctor => (
              <DoctorCard key={doctor._id} doctor={doctor}/>
            ))
          }
          <Paginate 
            doctorFilter={doctorFilter} 
            changePaginate={changePaginate}
            numberDoctors={data?.numberDoctors}
          />
        </Row>
      </Container>
    </section>
  )
}

export default Doctors