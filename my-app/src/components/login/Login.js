import './login.css'
import * as React from "react";
import { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useFormik } from 'formik'
import * as yup from "yup";
import LoginServices from '../../services/LoginServices';
const Login = () => {
  const [loading, setLoading] = useState(false);
  const schema = yup.object({

    email: yup
      .string()
      .email()
      .required('Please Enter your Email'),
    password: yup
      .string()
      .required('Please Enter your password')


  });
  let loginservice = new LoginServices();

  const initialValue = {
    email: '',
    password: '',
  }
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: initialValue,
    validationSchema: schema,
    onSubmit: values => {

      loginservice.add(values)
      // if(loginservice.isActive(values.email)){
      //     console.log("aktif")
      //     setLoading(true)
      // }
      setLoading(true)
      console.log(values);
      console.log("bu email", values.email)
    }
  })

  if (loading) {


    return <Redirect to="/chat" />;
  }
  return (
    <div className='header'>

      <form onSubmit={handleSubmit}>
        <div className='loginbox'>
          <div className='logininput' >
            <input
              id='email'
              name='email'

              onChange={handleChange}
              placeholder='Email enter' /></div>
          <div>{errors.email ? errors.email : null}</div>
          <div className='logininput' >
            <input
              id='password'
              name='password'
              onChange={handleChange}
              placeholder='password' /></div>
          <div>{errors.password ? errors.password : null}</div>
          <Link to='damla'>üye değil misin</Link>

          <div className='logininput' >

            <input
              style={{
                'backgroundColor': 'green',
                'color': 'white'
              }}
              type='submit' /></div>
        </div>
      </form>




    </div>
  )
}
export default Login
