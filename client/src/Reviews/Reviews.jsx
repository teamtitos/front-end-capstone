import React from 'react';
import ReviewsList from './ReviewsList.jsx';

const Reviews = (props) => {
  console.log('props from app:', props)
  return (
  <div>
    <h3>Reviews Component:</h3>
    <ReviewsList />
  </div>
  )
}

export default Reviews;