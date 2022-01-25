import React from 'react'
import { Container } from 'react-bootstrap'
import ContactForm from '../../components/ContactForm'

export default function Contact() {
  return (
    <Container
      style={{
        display: 'flex',
        margin: 'auto',
        padding: '10px',
        justifyContent: 'center',
      }}
    >
      <div>
        <h1 className='page-title1'>Contact Us Here!</h1>
        <ContactForm />
      </div>
    </Container>
  )
}
