import React from 'react'
import Metal from './OverViewImages/Metal-Ore-Resized.jpg'
import Crystal from './OverViewImages/crystal ore.jpg'
import Deuterium from './OverViewImages/deuterium.jpg'
import Energy from './OverViewImages/engery.jpg'

export default function ResourceDisplay() {
  return (
    <div className='row d-flex justify-content-center'>
      <div id='resourceDisplay' className='row'>
        <div className='col-6 col-md-3 resourceWell'>
          <img className='img-fluid rounded w-25' src={Metal} alt='Metal' />
          <h6 className='d-flex flex-column justify-content-center'>
            Metal: 0
          </h6>
        </div>
        <div className='col-6 col-md-3 resourceWell'>
          <img className='img-fluid rounded w-25' src={Crystal} alt='Crystal' />
          <h6 className='d-flex flex-column justify-content-center'>
            Crystal: 0
          </h6>
        </div>
        <div className='col-6 col-md-3 resourceWell'>
          <img
            className='img-fluid rounded w-25'
            src={Deuterium}
            alt='Deuterium'
          />
          <h6 className='d-flex flex-column justify-content-center'>
            Deuterium: 0
          </h6>
        </div>
        <div className='col-6 col-md-3 resourceWell'>
          <img className='img-fluid rounded w-25' src={Energy} alt='Energy' />
          <h6 className='d-flex flex-column justify-content-center'>
            Energy: 0
          </h6>
        </div>
      </div>
    </div>
  )
}
