import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx';
import ModalWindow from './ModalWindow.jsx';
// import sortReviews from './sortReviews.jsx';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';

function Reviews(props) {
  // console.log('reviewData:', props.reviewData)

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

  const moreReviewsButton = () => {
    if (reviewsCount > 2) {
      return (
        <Button variant='outline-dark' onClick={props.showReviews}>MORE REVIEWS</Button>
      )
    } else {
      return null;
    }
  }

  let isData = props.reviewData.results;

  return (
    <div>
      <Row>
        <Col>
          <strong>{reviewsCount} reviews, Sort on </strong>
          <Dropdown>
          <Button variant="Secondary">relevance</Button>
            <Dropdown.Toggle variant="Secondary" id="dropdown-split-basic" />
            <Dropdown.Menu>
              <Dropdown.Item>Relevant</Dropdown.Item>
              <Dropdown.Item>Helpful</Dropdown.Item>
              <Dropdown.Item>Newest</Dropdown.Item>
            </Dropdown.Menu>
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
      {moreReviewsButton()}
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

