import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

import CrystalMine1 from './MinesImages/Crystal-mine.jpg';

export default function CrystalMine() {
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
            Crystal Mine Level: 0
          </h4>
          <br />
        </Col>
      </Row>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={CrystalMine1}
            alt='Crystal Mine'
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
