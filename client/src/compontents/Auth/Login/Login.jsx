import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';

import './Login.scss';
import { INPUT, BUTTON, ERROR, ButtonLoader } from '../..';
import { loginForm } from '../../../utils/Formik';
import { useLoginMutation } from '../../../store/Auth/AuthApi';

const Login = () => {
  const auth = useSelector(state => state.auth);
  // console.log(auth)
  const [login, { data, isSuccess, isLoading, isError, error: responseError }] = useLoginMutation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: loginForm.initialvalues,
    validate: loginForm.validate,
    onSubmit: values => {
      login(values)
    }
  })
  if(isSuccess && auth.user){
    navigate('/')
  }
  return (
    <div className='loginContent'>
      <form onSubmit={formik.handleSubmit}>
        <INPUT 
          placeholder='Email' 
          changeHandler={formik.handleChange}
          name='email' 
          value={formik.values.email}
          error={formik.errors.email}
        />
        <INPUT 
          type='password' 
          placeholder='Password'
          changeHandler={formik.handleChange}
          name='password'
          value={formik.values.password}
          error={formik.errors.password}
        />
        <BUTTON type='submit' >
          {isLoading ? <ButtonLoader /> : 'Login'}
        </BUTTON>
        {/* <ERROR>
          {isError && responseError.data.message}
        </ERROR> */}
      </form>
    </div>
  )
}

export default Login