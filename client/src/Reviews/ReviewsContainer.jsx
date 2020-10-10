import React, { useState, useEffect } from 'react';
import Reviews from './Reviews.jsx';
import CharacteristicsRating from './CharacteristicsRating.jsx';
import AverageRating from './AverageRating.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import './Reviews.css';
const apiURL = 'http://18.224.37.110';

const ReviewsContainer = (props) => {
  const [reviewMetaData, setReviewMetaData] = useState({});

  const getReviewMetadata = (id) => {
    axios.get(`${apiURL}/reviews/meta/?product_id=${id}`)
    .then(result => {
      setReviewMetaData(result.data);
    })
    .catch(error => {
      console.error('error from review metadata')
    })
  }

  useEffect(() => {
    getReviewMetadata(props.currentProductId);
  }, [props.currentProductId])



  return (
    <Row className="reviews" id="reviews">
      <Col sm={4}>
        <AverageRating
          rating={reviewMetaData}
          meta={reviewMetaData}
          average={props.reviewAverage}
          />
        <CharacteristicsRating meta={reviewMetaData}/>
      </Col>
      <Col sm={8}>
        <Reviews
          reviewsLength={props.allReviews.length}
          allReviews={props.allReviews}
          reviewMetaData={reviewMetaData}
          productName={props.productData.name}
          productData={props.productData}
          helpful={props.helpfulness}
          makeReport={props.report}
        />
      </Col>
  </Row>
  )
}

export default ReviewsContainer;