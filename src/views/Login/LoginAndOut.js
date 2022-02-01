import React, { useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import RegistrationForm from '../Register/RegistrationForm'
import Overview from '../Overview/Overview'
import Container from 'react-bootstrap/Container'
// import axios from 'axios'
import jwt from 'jwt-simple'
import { createLogin } from '../../utils/API'
// import uuid from 'react-uuid'
// TODO: Fix the false with a valid username and password where any registered user can login

export default function LoginOut({ loggedIn, setLoggedIn }) {
  // const API = process.env.REACT_APP_API_REGISTRATION_LOGIN
  // const API2 = process.env.REACT_APP_API_USER
  if (loggedIn) {
    setLoggedIn(false)
  }
  // const initialData = { userName: '', password: '' }
  // const [formData, setFormData] = useState(initialData)
  // const handleChange = (event) => {
  //   setFormData(() => {
  //     return { ...formData, [event.target.name]: event.target.value }
  //   })
  // }
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   handleSubmitHelper(event)
  // }

  const initialData = {
    userName: '',
    password: '',
  }
  const history = useHistory()
  const [error, setError] = useState(null)
  const [loginData, setLoginData] = useState(initialData)

  function handleChange({ target: { name, value }}) {
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    createLogin(loginData)
    .then((createdLogin) => {

      setLoggedIn(true)
      const loginErrors = validation(loginData)

      console.log("loginErrors line 66: ", loginErrors)
      if (loginErrors.length) return setError(loginErrors);

      history.push('/Overview')
    }).catch(setError)
    
    // if (){
    //   createRegistration(registrationData)
    //   .then((createdRegistration) => {
    //     setLoggedIn(true)
    //     history.push('/Overview')
    //   }).catch(setError)
    // } else {
    //     setLoggedIn(false)
    //     history.push('/Register')
    // }
    
  }

  function validation(loginData) {
    const errors = [];

    function tokenJWT() {
      if (loginData !== null) {
        const token = jwt.encode({
          // registration_id,
          username,
          email,
          password,
        }, 'secret')
        localStorage.setItem('token', token)
      }
    }

    tokenJWT(loginData)
    return errors;
  }
  // const handleSubmitHelper = (event) => {
  //   if (formData.userName && formData.password !== '') {
  //     // Checks if the userName and password are filled in
  //     axios.get(`${API}`).then((response) => {
  //       console.log('response', response.data.data)
  //       // Gets the data from the database
  //       for (const [index, value] of response.data.data.entries()) {
  //         console.log('index', index)
  //         console.log('value', value)
  //         const { registration_id, username, password, email } = value
  //         if (
  //           (formData.userName === index,
  //           value.username && formData.password === index,
  //           value.password)
  //         ) {
  //           // Checks if the username and password match
  //           const token = jwt.encode(
  //             {
  //               registration_id,
  //               username,
  //               email,
  //               password,
  //             },
  //             'secret'
  //           )
  //           localStorage.setItem('token', token)
  //           setLoggedIn(true)
  //           history.push('/Overview')
  //         } else {
  //           setLoggedIn(false)
  //           history.push('/Register')
  //         } // Redirects the user to the register page if the username and password do not match
  //       }
  //     })
  //   }
  // }

  const handleDirect = (event) => {
    event.preventDefault()
    history.push('/Register')
  }

  return (
    <Container
      style={{
        display: 'flex',
        margin: 'auto',
        width: 'auto',
        padding: '10px',
        justifyContent: 'center',
      }}
    >
      <div
        variant='outline-dark'
        className='container w-50'
        style={{
          border: '2px solid grey',
          padding: '5px',
          boxShadow: '2px 2px white',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h2 className='page-title1'>Log In</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label
              htmlFor='userName'
              className='form-label'
              style={{
                color: 'whitesmoke',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              User Name
            </label>
            <input
              name='userName'
              type='text'
              className='form-control'
              id='userName'
              value={loginData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-3'>
            <label
              htmlFor='password'
              className='form-label'
              style={{
                color: 'whitesmoke',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Password
            </label>
            <input
              name='password'
              type='password'
              className='form-control'
              id='password'
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            // onClick={handleSubmit}
            type='submit'
            className='btn btn-success'
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '10px',
            }}
          >
            Log In
          </button>
        </form>
        <button
          onClick={handleDirect}
          type='submit'
          className='btn btn-success'
          style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}
        >
          Register Here
        </button>
        <Switch>
          <Route exact={true} path='/Overview'>
            <Overview />
          </Route>
          <Route exact={true} path='/Register'>
            <RegistrationForm />
          </Route>
        </Switch>
      </div>
    </Container>
  )
}

// const secret = 'mysecret'
// const token = jwt.encode({ registration_id, username, email, password }, secret) // Creates a token with the data from the database
// axios
//   .post(`${API2}`, {
//     data: {
//       user_id: uuid(),
//       user_name: username,
//       login_token: token,
//       registration_id: registration_id,
//     },
//   }) // Posts the token to the database
//   .then((response) => {
//     setLoggedIn(true)
//     history.push('/Overview')
//     console.log(`statusCode Login: ${response.statusCode}`)
//     console.log(response)
//   }) // Redirects the user to the overview page if the token is posted
//   .catch((error) => {
//     // If the token is not posted it will display an error
//     console.error(error)
//   })
