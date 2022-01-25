import React from 'react';
import DeuteriumSynth from './MinesImages/Deuterium-Synthsizer.jpg';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function DeuteriumSynthisizer() {
  return (
    <Container>
      <Row>
        <Col style={{ padding: '2px 2px' }}>
          <br />
          <h4
            style={{
              color: 'whitesmoke',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            Deuterium Synthisizer Level: 0
          </h4>
          <br />
        </Col>
      </Row>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={DeuteriumSynth}
            alt='Metal Mine'
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
