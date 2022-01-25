import React from 'react'
import DeuteriumStorage1 from './MinesImages/Deuterium-Storage.jpg'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function DeuteriumStorage() {
  return (
    <Container>
      <Row>
        <Col>
          <br />
          <h4
            style={{
              color: 'whitesmoke',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            Deuterium Storage Level: 0
          </h4>
          <br />
        </Col>
      </Row>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={DeuteriumStorage1}
            alt='Metal Mine'
            height='300px'
            width='450px'
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Button
          variant='outline-dark'
          style={{ color: 'whitesmoke', fontSize: '20px' }}
        >
          Upgrade
        </Button>
      </Row>
      <br />
    </Container>
  )
}
