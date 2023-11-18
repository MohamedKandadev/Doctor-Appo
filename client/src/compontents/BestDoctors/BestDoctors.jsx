import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './BestDoctors.scss';
import { DoctorCard, LOADING } from '..';
import { useGetBestDoctorsQuery } from '../../store/Doctors/DoctorApi';

const BestDoctors = () => {
  const { data, isError, error, status, isSuccess, isLoading } = useGetBestDoctorsQuery();
  return (
    <section className='bestDoctorsContent'>
      <Container>
        <h5 className='title'>Best Doctors</h5>
        <h4 className="heading">
          Meet Best Doctors
        </h4>
        <Row className='gap justify-content-center'>
          {
            isLoading ? <LOADING /> :(
              isSuccess ?
              data && (
                data.doctors && (
                  data.doctors.map(doctor => {
                    return <DoctorCard doctor={doctor} key={doctor._id} />
                  })
                )
              ) : <p>some proplem</p>
            )
            
          }
        </Row>
      </Container>
    </section>
  )
}

export default BestDoctors