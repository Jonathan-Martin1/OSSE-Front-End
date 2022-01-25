import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import uuid from 'react-uuid';
import axios from 'axios';

const initialForm = {
  registration_id: uuid(),
  first_name: '',
  last_name: '',
  username: '',
  email: '',
  password: '',
  password_match: '',
};

const RegistrationForm = () => {
  const [registrationForm, setRegistrationForm] = useState({ ...initialForm });

  const history = useHistory();

  // It's only responsibility is handling form input changes
  const handleChange = ({ target }) => {
    // alert(
    //   'Registration is currently closed for Development all info will not be saved!'
    // );
    setRegistrationForm({ ...registrationForm, [target.name]: target.value });
  };

  // It's only responsibility is handling the submit
  const submitHandler = (event) => {
    event.preventDefault();
    // eslint-disable-next-line
    const { first_name, last_name, username, email, password, password_match } =
      registrationForm;
    post();
  };

  const post = () => {
    if (registrationForm.email === '' || registrationForm.password.length < 8) {
      alert(
        `Email must be filled in and password must be 8 characters or more.`
      );
    } else if (
      registrationForm.email !== '' &&
      registrationForm.password === registrationForm.password_match
    ) {
      alert(`You're Email and Password Matches!`);
      const {
        registration_id,
        username,
        first_name,
        last_name,
        email,
        password,
      } = registrationForm;
      axios
        .post('http://localhost:5000/registration', {
          data: {
            registration_id: registration_id,
            username: username,
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
          },
        })
        .then((response) => {
          console.log(`statusCode: ${response.statusCode}`);
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
      history.push('/Login');
    } else {
      alert(`Email and Password Do Not Match!`);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        margin: 'auto',
        width: 'auto',
        padding: '10px',
        justifyContent: 'center',
      }}
    >
      <div className='p-3 rounded' style={{ border: '2px solid #42fcfc' }}>
        <div
          className='card-title'
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <h3 className='page-title'>Register</h3>
        </div>
        <form
          onSubmit={submitHandler}
          className='card-body'
          style={{ color: '#fff' }}
        >
          <label htmlFor='first_name' className='d-block'>
            First Name:
          </label>
          <input
            name='first_name'
            type='text'
            id='first_name'
            required
            onChange={handleChange}
            value={registrationForm.first_name}
            style={{ width: '100%', marginBottom: '5px' }}
          />
          <label htmlFor='last_name' className='d-block'>
            Last Name:
          </label>
          <input
            name='last_name'
            type='text'
            id='last_name'
            required
            onChange={handleChange}
            value={registrationForm.last_name}
            style={{ width: '100%', marginBottom: '5px' }}
          />
          <label htmlFor='username' className='d-block'>
            Username:
          </label>
          <input
            name='username'
            type='text'
            id='username'
            required
            onChange={handleChange}
            value={registrationForm.username}
            style={{ width: '100%', marginBottom: '5px' }}
          />
          <label htmlFor='email' className='d-block'>
            Email:
          </label>
          <input
            name='email'
            type='text'
            id='email'
            required
            onChange={handleChange}
            value={registrationForm.email}
            style={{ width: '100%', marginBottom: '5px' }}
          />
          <label htmlFor='password' className='d-block'>
            Password:{' '}
          </label>
          <input
            name='password'
            type='password'
            id='password'
            required
            onChange={handleChange}
            value={registrationForm.password}
            style={{ width: '100%', marginBottom: '5px' }}
          />
          <label htmlFor='password_match' className='d-block'>
            Confirm password:
          </label>
          <input
            name='password_match'
            type='password'
            id='password_match'
            required
            onChange={handleChange}
            value={registrationForm.password_match}
            style={{ width: '100%' }}
          />
          <button type='submit' className='btn btn-primary mt-3'>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
