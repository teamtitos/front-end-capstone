import React from 'react';
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
          <p>5 stars</p>
        </Col>
        <Col>
          <ProgressBar variant='success' now={20}/>
        </Col>
      </Row>

      <Row>
        <Col>
          <p>4 stars</p>
        </Col>
        <Col>
          <ProgressBar variant='success' now={40} />
        </Col>
      </Row>

      <Row>
        <Col>
          <p>3 stars</p>
        </Col>
        <Col>
          <ProgressBar variant='success' now={60} />
        </Col>
      </Row>

      <Row>
        <Col>
          <p>2 stars</p>
        </Col>
        <Col>
          <ProgressBar variant='success' now={80} />
        </Col>
      </Row>

      <Row>
        <Col>
          <p>1 stars</p>
        </Col>
        <Col>
          <ProgressBar variant='success' now={100} />
        </Col>
      </Row>
    </div>
  )
}

export default AverageRating;
