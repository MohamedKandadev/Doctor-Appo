import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import './DoctorCard.scss';
import DOCTOR from '../../../assets/images/doctor.jpg';
import { ICON, BUTTON } from '../../';

const DoctorCard = ({ doctor }) => {
  const photo = doctor.user.photo ? `http://localhost:8080/${doctor.user.photo}` : DOCTOR
  const checkLoad = e => {
    e.currentTarget.src = DOCTOR;
  }
  return (
    <Col lg='4' md='6' sm='10' className='px-4 mt-5'>
      <div className='doctor-card'>
        <Link to={`/appointment/${doctor.user._id}`} className="doctor-img">
          <img src={photo || DOCTOR} alt="Doctor Photo" onError={checkLoad}/>
        </Link>
        <span className="doctor-name">
          Dr. {doctor.user.lastName} {doctor.user.firstName}
        </span>
        <span className="doctor-specialitie">
          {doctor.specialties.title}
        </span> 
        <div className="doctor-card-footer">
          <ul className="doctor-links mb-3">
            <li>
              {
                doctor.media.facebook !== '' ? 
                <a href={doctor.media.facebook} target='_blank' className='bg-light'>
                  <ICON>
                    <FontAwesomeIcon icon={faFacebookF } />
                  </ICON>
                </a> :
                <ICON classStyle='cursor-not'>
                  <FontAwesomeIcon icon={faFacebookF } />
                </ICON>
              }
            </li>
            <li>
              {
                doctor.media.insta !== '' ? 
                <a href={doctor.media.insta} target='_blank' className='bg-light'>
                  <ICON>
                    <FontAwesomeIcon icon={faInstagram } />
                  </ICON>
                </a> :
                <ICON classStyle='cursor-not'>
                  <FontAwesomeIcon icon={faInstagram } />
                </ICON>
              }
            </li>
            <li>
              {
                doctor.media.twitter !== '' ? 
                <a href={doctor.media.twitter} target='_blank' className='bg-light'>
                  <ICON>
                    <FontAwesomeIcon icon={faTwitter } />
                  </ICON>
                </a> :
                <ICON classStyle='cursor-not'>
                  <FontAwesomeIcon icon={faTwitter } />
                </ICON>
              }
            </li>
            <li>
              {
                doctor.media.website !== '' ? 
                <a href={doctor.media.website} target='_blank' className='bg-light'>
                  <ICON>
                    <FontAwesomeIcon icon={faGlobe } />
                  </ICON>
                </a> :
                <ICON classStyle='cursor-not'>
                  <FontAwesomeIcon icon={faGlobe } />
                </ICON>
              }
            </li>
          </ul>
          <BUTTON to={`/appointment/${doctor.user._id}`}>Book Appointment</BUTTON>
        </div>
      </div>
    </Col>
  )
}

export default DoctorCard