import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './WorkingProcess.scss';
import { BUTTON } from '../';
import { SHAP1, SHAP2, SHAP3 } from '../../assets/images';

const WorkingProcess = () => {
  return (
    <section className='workingProcessContent'>
      <Container fluid>
        <h5 className="workingProcessContent__title">
          Working Process
        </h5>
        <h4 className="workingProcessContent__heading">
          How we works?
        </h4>
        <div className="processItems">
          <Row className='justify-content-center gap-4'>
            <Col md='5' xl='2' className=' col-7'>
              <div className="processItems__item mt-5">
                <div className="number">01</div>
                <h5>Make Appointmnet</h5>
                <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                <BUTTON>View More</BUTTON>
              </div>
            </Col>
            <Col md='5' xl='2' className=' col-7'>
              <div className="processItems__item seconde_card">
                <div className="number">02</div>
                <h5>Take Treatment</h5>
                <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                <BUTTON>View More</BUTTON>
              </div>
            </Col>
            <Col md='5' xl='2' className=' col-7'>
              <div className="processItems__item mt-5">
                <div className="number">03</div>
                <h5>Registration</h5>
                <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                <BUTTON>View More</BUTTON>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <img src={SHAP2} alt="" />
      <img src={SHAP3} alt="" />
      <img src={SHAP1} alt="" />
    </section>
  )
}

export default WorkingProcess