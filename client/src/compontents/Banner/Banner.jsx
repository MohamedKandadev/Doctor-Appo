import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Banner.scss';
import { BUTTON } from '../../compontents';
import { 
  BANNER_DOCTOR,
  BANNER1,
  BANNER2,
  BANNER3,
  BANNER4,
  BANNER5,
} from '../../assets/images';

const Banner = () => {
  return (
    <div className='bannerContent'>
      <Container>
        <Row className='align-items-center'>
          <Col sm ='7'md='6' lg='6'>
            <h4 className="bannerContent__title">
              We Provide All Health Care Solution
            </h4>
            <h1 className="bannerContent__paragraph">
              Protect Your Health And Take Care To Of Your Health
            </h1>
            <BUTTON to='about-us'>
              Read More
            </BUTTON>
          </Col>
          <Col sm ='5'md='6' lg='5'>
            <img src={BANNER_DOCTOR} className='doctor-img' />
          </Col>
        </Row>
      </Container>
      <img src={BANNER1} />
      <img src={BANNER2} />
      <img src={BANNER3} />
      <img src={BANNER4} />
      <img src={BANNER5} />
    </div>
  )
}

export default Banner