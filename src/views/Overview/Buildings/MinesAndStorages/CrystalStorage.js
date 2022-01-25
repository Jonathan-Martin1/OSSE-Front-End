import React from 'react';
import CrystalStorage1 from './MinesImages/Crystal-Storage.jpg';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function CrystalStorage() {
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
            Crystal Storage Level: 0
          </h4>
          <br />
        </Col>
      </Row>
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={CrystalStorage1}
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
