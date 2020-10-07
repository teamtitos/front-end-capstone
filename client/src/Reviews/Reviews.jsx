import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx';
import ModalWindow from './ModalWindow.jsx';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Reviews.css';
import axios from 'axios';

function Reviews(props) {
  const [reviewsCount, setReviewsCount] = useState(0);

  useEffect(() => {
    getAllReviews(props.productData.id);
  }, [props.productData]);

  const getAllReviews = (id) => {
    axios.get(`http://18.224.37.110/reviews/?product_id=${id}`)
      .then(result => {
        setReviewsCount(result.data.results.length);
      })
      .catch(error => {
        console.error('error getting review data');
      });
  };

  let isData = props.reviewData.results;

  return (
    <div>
      <Row>
      <Col>
        <strong>{reviewsCount} reviews,</strong>
        <Dropdown>
          <DropdownButton title='Sorted on' variant='outline-dark'>
            <Dropdown.Item>Relevant</Dropdown.Item>
            <Dropdown.Item>Helpful</Dropdown.Item>
            <Dropdown.Item>Newest</Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </Col>
      </Row>
      <br></br>
    <div>
    {!isData ? (
      <p>Loading</p>
      ) : (
      props.reviewData.results.map(review => {
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
      meta={props.reviewMetaData}
      />
    })
    )}
  </div>
  <Button variant='outline-dark' onClick={props.showReviews}>MORE REVIEWS</Button>
  <ModalWindow
  metadata={props.reviewMetaData}
  currentProduct={props.productName}

  ratingValue={props.valueRating}
  summaryValue={props.valueSummary}
  bodyValue={props.valueBody}
  recommendValue={props.valueRecommend}
  nameValue={props.valueName}
  emailValue={props.valueEmail}
  photoValue={props.valuePhoto}
  characteristicsValue={props.valueCharacteristics}

  ratingChange={props.changeRating}
  summaryChange={props.changeSummary}
  bodyChange={props.changeBody}
  recommendChange={props.changeRecommend}
  nameChange={props.changeName}
  emailChange={props.changeEmail}
  photoChange={props.changePhoto}
  characteristicsChange={props.changeCharacteristics}
  newReview={props.submitReview}
  />
</div>
  );
}

export default Reviews;

