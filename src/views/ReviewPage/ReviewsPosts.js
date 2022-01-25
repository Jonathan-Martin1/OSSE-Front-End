import React from 'react'

export default function ReviewsPosts({name, review, rating}) {
  return <div className='container text-light'>
    <h3>{name}</h3>
    <h5>Rating: {rating}</h5>
    <p>{review}</p>

  </div>
}
