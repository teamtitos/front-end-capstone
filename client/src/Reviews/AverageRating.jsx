import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AverageRating = (props) => {
  console.log('average rating props:', props)

  return (
    <div>
    {(!props.rating.ratings ? <p>Loading</p>
      :<div>
          <div>
            <p>RATINGS & REVIEWS</p>
            <Row>
              <Col sm={2}>
                <p># average rating</p>
              </Col>
              <Col sm={2}>
                <p>AVERAGE STAR RATING</p>
              </Col>
            </Row>
            <p>Rating Breakdown</p>
            <p>PERCENTAGE OF REVIEWS RECCOMMEND THIS PRODUCT</p>
            <Row>
              <Col>
              5 Stars
              </Col>
              <Col>
                <ProgressBar variant='success' now={20}/>
              </Col>
              <Col>
                {props.rating.ratings[5]}
              </Col>
            </Row>

            <Row>
              <Col>
                4 Stars
              </Col>
              <Col>
                <ProgressBar variant='success' now={40} />
              </Col>
              <Col>
                {props.rating.ratings[4]}
              </Col>
            </Row>

            <Row>
              <Col>
               3 Stars
              </Col>
              <Col>
                <ProgressBar variant='success' now={60} />
              </Col>
              <Col>
              {props.rating.ratings[3]}
              </Col>
            </Row>

            <Row>
              <Col>
                2 Stars
              </Col>
              <Col>
                <ProgressBar variant='success' now={80} />
              </Col>
              <Col>
              {props.rating.ratings[2]}
              </Col>
            </Row>

            <Row>
              <Col>
               1 Stars
              </Col>
              <Col>
                <ProgressBar variant='success' now={100} />
              </Col>
              <Col>
                {props.rating.ratings[1]}
              </Col>
            </Row>
          </div>
      </div>)}
  </div>
  )
}

export default AverageRating;
