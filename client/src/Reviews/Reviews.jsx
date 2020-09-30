import React from 'react';
import ReviewsList from './ReviewsList.jsx';
// import Ratings from './Ratings.jsx';

function Reviews(props){
  // console.log('props from app:', props)

  return (
  <div>
    {/* <h3>Questions & Answers</h3> */}
    {/* <h3>Reviews Component:</h3> */}
    {/* <Ratings /> */}
    <ReviewsList reviewInfo={props.reviewData} reviewDetails={props.reviewData.results}
    />
  </div>
  )
}

export default Reviews;