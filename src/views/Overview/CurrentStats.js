import React from 'react'
import { Container } from 'react-bootstrap'

export default function CurrentStats({
  planetSize,
  planetTemp,
  planetFields,
  playerRanking,
}) {
  let statsObj = {
    id: 0,
    Fields: '0/180',
    TemperatureMax: 120,
    TemperatureLow: 20,
    Ranking: 2,
  }
  return (
    <Container>
      <div>
        <ul
          style={{
            color: 'whitesmoke',
            listStyle: 'none',
            textAlign: 'right',
          }}>
          <li>Fields: {statsObj.Fields}</li>
          <li>Max Temperature: {statsObj.TemperatureMax}</li>
          <li>Lowest Temperature: {statsObj.TemperatureLow}</li>
          <li>Ranking: {statsObj.Ranking}</li>
        </ul>
      </div>
    </Container>
  )
}
