import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import ReviewForm from './ReviewForm.jsx';
import ReviewModal from './ReviewModal.jsx';

const Reviews = (props) => {
  // console.log('props from app:', props)

  return (
  <div>
    {/* <h3>Reviews Component:</h3> */}
    <ReviewsList reviewInfo={props.reviewData} reviewDetails={props.reviewData.results}
    />

    <ReviewModal />
  </div>
  )
}

export default Reviews;