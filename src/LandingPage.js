import React, { useState } from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import ReviewPage from './views/ReviewPage/ReviewPage'
import LoginOut from './views/Login/LoginAndOut'
import RegistrationForm from './views/Register/RegistrationForm'
import {
  Link,
  Route,
  Switch,
  useHistory,
  // useRouteMatch,
} from 'react-router-dom'
import LandingPageContent from './components/LandingPageContent'
import Contact from './views/Contact/Contact'
import Overview from './views/Overview/Overview'

export default function LandingPage() {
  const [loggedIn, setLoggedIn] = useState(false)
  const history = useHistory()

  return (
    <div className='borb'>
      <Navbar
        style={{
          border: 'bottom',
          bg: 'transparent',
          expand: 'lg',
          display: 'flex',
        }}
      >
        <Navbar.Brand className='page-title'>
          Old School Space Empire
        </Navbar.Brand>
        <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
        <NavbarCollapse
          id='navbar-toggle'
          style={{
            justifyContent: 'flex-end',
          }}
        >
          <Nav
            style={{
              margin: 'auto',
            }}
          >
            <Button
              className='mx-1'
              variant='outline-dark'
              style={{ boxShadow: '2px 2px black' }}
            >
              <Link to='/'>Home</Link>
            </Button>
            <Button
              className='mx-1'
              variant='outline-dark'
              style={{ boxShadow: '2px 2px black' }}
            >
              <Link to='/contact'>Contact</Link>
            </Button>
            <Button
              className='mx-1'
              variant='outline-dark'
              style={{ boxShadow: '2px 2px black' }}
            >
              <Link to='/reviews'>Reviews</Link>
            </Button>
            <Button
              className='mx-1'
              variant='outline-dark'
              style={{ boxShadow: '2px 2px black' }}
            >
              <Link to='/login'>{loggedIn ? 'Log Out' : 'Log In'}</Link>
            </Button>
            <Button
              className='mx-1'
              variant='outline-dark'
              style={{ boxShadow: '2px 2px black' }}
            >
              <Link to='/register'>Register Here!</Link>
            </Button>
            <Button
              className='mx-1'
              variant='outline-dark'
              style={{ boxShadow: '2px 2px black' }}
            >
              <Link to='/Overview'>
                {loggedIn ? 'Overview' : history.push('/login')}
              </Link>
            </Button>
          </Nav>
        </NavbarCollapse>
      </Navbar>
      <Switch>
        <Route exact={true} path='/'>
          <LandingPageContent />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/reviews'>
          <ReviewPage />
        </Route>
        <Route path='/login'>
          <LoginOut setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
        </Route>
        <Route path='/register'>
          <RegistrationForm />
        </Route>
        <Route path='/Overview'>
          <Overview />
        </Route>
        <Route>
          <h1>404 Not Found</h1>
        </Route>
      </Switch>
    </div>
  )
}
