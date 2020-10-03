import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import ModalWindow from './ModalWindow.jsx';
import Button from 'react-bootstrap/Button';

function Reviews(props) {
  // console.log('props from app:', props.reviewData)

  let isData = props.reviewData.results;

  return (
<div>
  <div>
    {!isData ? (
      <p>Loading</p>
    ) : (
      props.reviewData.results.map(review => {
      // console.log('review from Reviews:', review)
      return <ReviewsList
      key={review.review_id}
      name={review.reviewer_name}
      date={review.date}
      summary={review.summary}
      body={review.body}
      helpfulness={review.helpfulness}
      ratings={review.rating}
      />
    })
    )}
  </div>
  <Button variant="outline-dark" onClick={props.showReviews}>MORE REVIEWS</Button>
  <ModalWindow
  metadata={props.reviewMetaData}
  currentProduct={props.productName}

  // body={props.reviewBody}
  // bodyValue={props.reviewValue}
  // name={props.username}
  // nameValue={props.usernameValue}
  // userEmail={props.email}
  // emailValue={props.emailValue}
  // submitForm={props.formSubmit}
  />
</div>
  );
}

export default Reviews;

