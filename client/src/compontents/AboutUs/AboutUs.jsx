import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './AboutUs.scss';
import { BUTTON } from '../../compontents';
import { 
  ABOUT1, 
  ABOUT2, 
  ABOUT3, 
  IconEmergency,
  IconBest,
  IconMedical,
  IconQualified,
  BANNER2,
  BANNER5
} from '../../assets/images';

const AboutUs = () => {
  return (
    <section className='aboutusContent'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="aboutusContent__imgs">
              <ul>
                <li>
                  <img src={ABOUT1} alt="" />
                </li>
                <li>
                  <img src={ABOUT2} alt="" />
                </li>
                <li>
                  <img src={ABOUT3} alt="" />
                </li>
                <li>
                  <div className="box">
                    20
                    <span>Year Experience</span>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg='6'>
            <div className="heading-box">
              <h6>About Us</h6>
              <h2>The Great Place Of Medical Hospital Center</h2>
              <p>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.</p>
            </div>
            <div className="about-cards">
              <Row>
                <Col sm='6'>
                  <div className="about-cards__item card1">
                    <div className="icon">
                      <IconEmergency />
                    </div>
                    <p>Emergency Help</p>
                  </div>
                </Col>
                <Col sm='6'>
                  <div className="about-cards__item card2">
                    <div className="icon">
                      <IconQualified />
                    </div>
                    <p>Qualified Doctors</p>
                  </div>
                </Col>
                <Col sm='6'>
                  <div className="about-cards__item card3">
                    <div className="icon">
                      <IconBest />
                    </div>
                    <p>Best Professionals</p>
                  </div>
                </Col>
                <Col sm='6'>
                  <div className="about-cards__item card4">
                    <div className="icon">
                      <IconMedical />
                    </div>
                    <p>Medical Treatment</p>
                  </div>
                </Col>
              </Row>
              <BUTTON to='about-us'>Read More</BUTTON>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={BANNER2} alt="" className='banner2_1' />
      <img src={BANNER2} alt="" className='banner2_2'/>
      <img src={BANNER5} alt="" className='banner5'/>
    </section>
  )
}

export default AboutUs