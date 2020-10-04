import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import Ratings from './Ratings.jsx';
import ReviewPhotos from './ReviewPhotos';

const ReviewsList = (props) => {
  // console.log('props from reviews into REVIEWS LIST:', props);

  const date = moment(props.date).format("LL");

  return (
    <div>
        <div>
            <Row>
              <Col sm={6}>
                <Ratings rating={props.ratings}/>
              </Col>

              <Col sm={6}>
                <p>{props.name}, {date}</p>
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                <p><strong>{props.summary}</strong></p>
              </Col>
            </Row>

            <Row>
              <Col sm={8}>
                <p>{props.body}</p>
              </Col>
            </Row>

            <Row>
              <Col>
                <ReviewPhotos />
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                <p>Helpful? Yes ({props.helpfulness}) | Report</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>do you reccomend this product?</p>
              </Col>
            </Row>
        </div>
  </div>
  )
}



export default ReviewsList;