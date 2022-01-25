import React from 'react';
import { Container } from 'react-bootstrap';
import TempPlanet from './OverViewImages/unnamed.jpg';

export default function CurrentPlanetDisplay({ planetList }) {
  return (
    <Container>
      <div style={{ border: '2px solid white' }}>
        <img src={TempPlanet} alt='' className='img-fluid' />
      </div>
    </Container>
  );
}
