import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';

import './Register.scss';
import { INPUT, BUTTON, SelectInput, ERROR, ButtonLoader } from '../..';
import { registerForm } from '../../../utils/Formik';
import { useRegisterMutation } from '../../../store/Auth/AuthApi';

const Register = () => {
  const auth = useSelector(state => state.auth);
  const [register, { data, isSuccess, isLoading, isError, error: responseError }] = useRegisterMutation();
  console.log(responseError)
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: registerForm.initialvalues,
    validate: registerForm.validate,
    onSubmit: values => {
      register(values)
      // console.log(values)
    }
  })
  if(isSuccess && auth.user){
    navigate('/')
  }
  return (
    <div className='registerContent'>
      <form onSubmit={formik.handleSubmit}>
        <Row>
          <Col md='6'>
            <INPUT 
              placeholder='First Name'
              changeHandler={formik.handleChange}
              name='firstName' 
              value={formik.values.firstName}
              error={formik.errors.firstName}
            />
          </Col>
          <Col md='6'>
            <INPUT 
              placeholder='Last Name'
              changeHandler={formik.handleChange}
              name='lastName' 
              value={formik.values.lastName}
              error={formik.errors.lastName}
            />
          </Col>
        </Row>
        <INPUT 
          placeholder='Email' 
          changeHandler={formik.handleChange}
          name='email' 
          value={formik.values.email}
          error={formik.errors.email}
        />
        <Row>
          <Col md='8'>
            <INPUT 
              type='password' 
              placeholder='Password'
              changeHandler={formik.handleChange}
              name='password'
              value={formik.values.password}
              error={formik.errors.password}
            />
          </Col>
          <Col md='4'>
            <SelectInput 
              error={formik.errors.role}
              changeHandler={formik.handleChange} 
              name='role' 
              value={formik.values.role} 
              options={["doctor", "patient"]}
            />
          </Col>
        </Row>
        <BUTTON type='submit' >
          {isLoading ? <ButtonLoader /> : 'Register'}
        </BUTTON>
        <ERROR>
          {isError && (responseError.data && responseError.data.message) }
        </ERROR>
      </form>
    </div>
  )
}

export default Register