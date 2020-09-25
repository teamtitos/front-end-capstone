import React from 'react';
import ReviewsList from './ReviewsList.jsx';

const Reviews = (props) => {
  console.log('props from app:', props)
  return (
  <div>
    <h3>Reviews Component:</h3>
    <ReviewsList reviewInfo={props.reviewData} reviews={props.reviewData.results}/>
  </div>
  )
}

export default Reviews;