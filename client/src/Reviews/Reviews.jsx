import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import ModalWindow from './ModalWindow.jsx';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';

function Reviews(props) {
  // console.log('props from app:', props.reviewData)

  let isData = props.reviewData.results;

  return (
    <div id='reviews'>
      <Col>
        <Dropdown>
          <DropdownButton title='Sorted on' variant='outline-dark'>
            <Dropdown.Item>Relevant</Dropdown.Item>
            <Dropdown.Item>Helpful</Dropdown.Item>
            <Dropdown.Item>Newest</Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </Col>
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
      photos={review.photos}
      recommend={review.recommend}
      response={review.response}
      />
    })
    )}
  </div>
  <Button variant='outline-dark' onClick={props.showReviews}>MORE REVIEWS</Button>
  <ModalWindow
  metadata={props.reviewMetaData}
  currentProduct={props.productName}
  />
</div>
  );
}

export default Reviews;

