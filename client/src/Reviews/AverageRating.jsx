import React from 'react';
import Ratings from './Ratings.jsx'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AverageRating = () => {
  return (
    <div>
      <p>RATINGS & REVIEWS</p>
      <Row>
        <Col>
          <p># average rating</p>
        </Col>
        <Col>
          <p>AVERAGE STAR RATING</p>
        </Col>
      </Row>
      <p>Rating Breakdown</p>
      <p>PERCENTAGE OF REVIEWS RECCOMMEND THIS PRODUCT</p>
      <Row>
        <Col>
          <p>5 Stars</p>
        </Col>
        <Col>
          <ProgressBar variant='success' now={20}/>
        </Col>
        <Col>
          <p>total number of reviews submitted</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <p>4 Stars</p>
        </Col>
        <Col>
          <ProgressBar variant='success' now={40} />
        </Col>
        <Col>
          <p>total number of reviews submitted</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <p>3 Stars</p>
        </Col>
        <Col>
          <ProgressBar variant='success' now={60} />
        </Col>
        <Col>
          <p>total number of reviews submitted</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <p>2 Stars</p>
        </Col>
        <Col>
          <ProgressBar variant='success' now={80} />
        </Col>
        <Col>
          <p>total number of reviews submitted</p>
        </Col>
      </Row>

      <Row>
        <Col>
          <p>1 Stars</p>
        </Col>
        <Col>
          <ProgressBar variant='success' now={100} />
        </Col>
        <Col>
          <p>total number of reviews submitted</p>
        </Col>
      </Row>
    </div>
  )
}

export default AverageRating;
