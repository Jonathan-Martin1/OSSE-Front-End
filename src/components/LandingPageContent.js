import React from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import './LandingPage.css';
import LandingPageCarousel from './LandingPageCarousel';

export default function LandingPageContent() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: '30px',
        color: 'white',
        border: '3px solid white',
      }}
    >
      <Row>
        <Col
          style={{
            margin: '80px 80px',
            border: '3px solid white',
          }}
        >
          <h1 style={{ textDecoration: 'underline' }}>About O.S.S.E.</h1>
          <p>
            Imagine yourself a ruler of a planet. You have funds to start
            building a space empire. what will you do? Register today and RULE
            THE UNIVERSE!
          </p>
        </Col>
      </Row>
      <Container style={{}}>
        <Row>
          <Col
            style={{
              border: ' 3px solid white',
              textAlign: 'center',
            }}
          >
            <h2 style={{ textDecoration: 'underline', textAlign: 'center' }}>
              News
            </h2>
            <p>
              Font-End Development - Version 3.4 (will be updated when the
              bank-end version reaches version 10)
            </p>{' '}
            <p>
              Back-End Development - Version 10 (Is now a Functional Back-End
              API with database)
            </p>{' '}
            <p>
              These versions will be updated as production of the game
              continues.
            </p>{' '}
            <p>
              In the mean time feel free to sign up for our newsletter below.
            </p>{' '}
            <p>It's completely free.</p>
            <a href='https://github.com/Old-School-Space-Empire'>
              Visit Github Repos Here!
            </a>
          </Col>
          <Col style={{ border: ' 3px solid white', textAlign: 'center' }}>
            <h2 style={{ textDecoration: 'underline' }}>Updates</h2>
            <p>Coming Soon!</p>
          </Col>
          <Col style={{ border: ' 3px solid white', textAlign: 'center' }}>
            <h2 style={{ textDecoration: 'underline' }}>In Game Images</h2>
            <LandingPageCarousel />
            <p>Coming Soon!</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
