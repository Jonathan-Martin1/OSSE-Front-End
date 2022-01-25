import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CrystalMine from './MinesAndStorages/CrystalMine'
import CrystalStorage from './MinesAndStorages/CrystalStorage'
import DeuteriumStorage from './MinesAndStorages/DeuteriumStorage'
import DeuteriumSynthisizer from './MinesAndStorages/DeuteriumSynthisizer'
import MetalMine from './MinesAndStorages/MetalMine'
import MetalStorage from './MinesAndStorages/MetalStorage'
import SolarPlant from './MinesAndStorages/SolarPlant'

export default function DisplayMines() {
  return (
    <Container>
      <Row style={{ border: '2px solid white' }}>
        <Col style={{ border: '2px solid white' }}>
          <MetalMine />
        </Col>
        <Col style={{ border: '2px solid white' }}>
          <CrystalMine />
        </Col>
        <Col style={{ border: '2px solid white' }}>
          <DeuteriumSynthisizer />
        </Col>
        <Col style={{ border: '2px solid white' }}>
          <SolarPlant />
        </Col>
      </Row>
      <Row style={{ border: '2px solid white' }}>
        <Col style={{ border: '2px solid white' }}>
          <MetalStorage />
        </Col>
        <Col style={{ border: '2px solid white' }}>
          <CrystalStorage />
        </Col>
        <Col style={{ border: '2px solid white' }}>
          <DeuteriumStorage />
        </Col>
      </Row>
    </Container>
  )
}
