import React from 'react';
import SolarPlant1 from './MinesImages/Solar-Plant.jpg';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function SolarPlant() {
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
            Solar Plant Level: 0
          </h4>
          <br />
        </Col>
      </Row>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={SolarPlant1}
            alt='Solar Plant'
            height='300px'
            width='300px'
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
  );
}
