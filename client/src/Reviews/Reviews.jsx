import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import Ratings from './Ratings.jsx';
// import StarRating from './StarRating';

function Reviews(props){
  // console.log('props from app:', props)
  // may need to delete the prop reviewDetails ([]) ?
  return (
  <div>
    {/* <h3>Questions & Answers</h3> */}
    {/* <h3>Reviews Component:</h3> */}
    {/* <Ratings /> */}
    <ReviewsList reviewInfo={props.reviewData} reviewDetails={props.reviewData.results}
    />
    <Ratings />
    {/* <StarRating /> */}
  </div>
  )
}

export default Reviews;