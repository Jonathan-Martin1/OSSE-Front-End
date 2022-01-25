import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import MetalMine1 from './MinesImages/Metal-Mine.jpg';

export default function MetalMine() {
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
            Metal Mine Level: 0
          </h4>
          <br />
        </Col>
      </Row>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={MetalMine1} alt='Metal Mine' height='300px' width='300px' />
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

// ({ counter = 0 }) => counter + 1;
