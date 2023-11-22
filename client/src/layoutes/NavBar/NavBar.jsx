import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faChevronRight, faXmark, faBars } from '@fortawesome/free-solid-svg-icons'

import './NavBar.scss';
import { LOGO } from '../../assets/images';
import { ICON, BUTTON } from '../../compontents';

const NavBar = () => {
  const [toggelNavMobile, seToggelNavMobile] = useState(false);
  const [navBg, setNavBg] = useState(false);
  const handelToggelNav = value => {
    seToggelNavMobile(value);
  }
  const changeNavBg = () => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNavBg);
    return () => {
      window.removeEventListener('scroll', changeNavBg);
    }
  }, [])
  return (
    <header className={`navbarContent ${navBg? 'scroll-active': null}`}>
      <Container fluid>
        <nav className="navbarContent_menu">
          <div className="navbarContent_menu__logo">
            <img src={LOGO} alt="logo" />
          </div>
          <div className="navbarContent_menu__items tablet">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/doctors'>Doctors</Link></li>
              <li><Link to='/auth'>Auth</Link></li>
            </ul>
          </div>
          <div className={`navbarContent_menu__items mobile ${toggelNavMobile? 'active-nav': null}`}>
            <button onClick={e=>handelToggelNav(false)} className='close-navbar button-nav'>
              <ICON>
                <FontAwesomeIcon icon={faXmark} />
              </ICON>
            </button>
            <ul>
              <li><Link to='/'><img src={LOGO} alt="logo" /></Link></li>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/doctors'>Doctors</Link></li>
              <li><Link to='/'>Auth</Link></li>
            </ul>
          </div>
          <div className="navbarContent_menu__contact">
            <ul>
              <li className='phone'>
                <ICON classStyle='me-3'>
                  <FontAwesomeIcon icon={faPhone} />
                </ICON>
                (+212) 695 208 671
              </li>
              <li>
                <BUTTON to='contact-us'>
                  BOOK NOW
                </BUTTON>
              </li>
            </ul>
          </div>
          
          <button onClick={e=>handelToggelNav(true)} className='open-navbar button-nav'>
            <ICON classStyle='me-3'>
              <FontAwesomeIcon icon={faBars} />
            </ICON>
          </button>
        </nav>
      </Container>
    </header>
  )
}

export default NavBar