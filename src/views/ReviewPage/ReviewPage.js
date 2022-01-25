import React from 'react';
import { useState } from 'react';
import ReviewsPosts from './ReviewsPosts';
import Container from 'react-bootstrap/Container';

export default function ReviewPage() {
  const initialData = { userName: '', review: '', rating: '5' };
  const [formData, setFormData] = useState(initialData);
  const [reviews, setReviews] = useState([]);

  const handleChange = (event) => {
    setFormData(() => {
      return { ...formData, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setReviews(() => [
      ...reviews,
      {
        name: formData.userName,
        review: formData.review,
        rating: formData.rating,
      },
    ]);
    setFormData(() => initialData);
  };

  return (
    <Container
      style={{
        display: 'flex',
        margin: 'auto',
        width: 'auto',
        padding: '10px',
        justifyContent: 'center',
      }}
    >
      <div
        variant='outline-dark'
        className='container w-50'
        style={{
          border: '2px solid grey',
          padding: '5px',
          boxShadow: '2px 2px white',
        }}
      >
        <h1 className='page-title1'>Leave a review</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='userName' className='form-label text-light'>
              User Name
            </label>
            <input
              name='userName'
              type='text'
              className='form-control'
              id='userName'
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Review' className='form-label text-light'>
              Review
            </label>
            <textarea
              name='review'
              className='form-control'
              id='review'
              value={formData.review}
              onChange={handleChange}
              required
            />
          </div>
          <label
            className='text-light fs-4'
            for='vol'
            style={{ padding: '10px', margin: '10px' }}
          >
            Rating: {formData.rating}{' '}
          </label>
          <input
            type='range'
            id='vol'
            min='0'
            max='5'
            name='rating'
            value={formData.rating}
            onChange={handleChange}
          />
          <br />
          <br />
          <button type='submit' className='btn btn-success '>
            Submit Review
          </button>
        </form>
      </div>

      {reviews.map((review, index) => (
        <ReviewsPosts
          key={index}
          name={review.name}
          review={review.review}
          rating={review.rating}
        />
      ))}
    </Container>
  );
}
