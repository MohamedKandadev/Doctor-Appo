import React from 'react';
import { useSelector } from "react-redux";
import { Container, Row, Col } from 'react-bootstrap';

import './Appointment.scss';
import { HeaderPage, INPUT, BUTTON } from '../../compontents';

const Appointment = () => {
  const auth = useSelector(state => state.auth); 
  console.log(auth);
  return (
    <section className='appointmentContent'>
      <HeaderPage heading='Appointment' />
      <Container>
        <Row className='justify-content-center py-5'>
          <Col xs='11' md='5'>
            <div className="card-date">
              <h2>Book Appointment</h2>
              {
                !auth.user ? 
                <>
                  <p>You need To Login First</p> 
                  <BUTTON to='/auth'>Login</BUTTON>
                </>
                :  (auth.user.role === 'patient' ? 
                  <>
                    (<INPUT type='datetime-local' />
                    <BUTTON >Appointment Now</BUTTON>) 
                  </> : <>
                    <p>You need To Login As A Patient</p> 
                    <BUTTON to='auth'>Login</BUTTON>
                  </>
                ) 
              }
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Appointment