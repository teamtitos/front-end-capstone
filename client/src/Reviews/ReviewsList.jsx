import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import Ratings from './Ratings.jsx';

const ReviewsList = (props) => {
  // console.log('props from reviews into REVIEWS LIST:', props);

  const recommendProduct = () => {
    if (props.recommend >= 1) {
      return 'I recommend this product'
    } else {
      return null;
    }
  }

  const responseProduct = () => {
    if (!props.response) {
      return null;
    } else {
      return (
        <div id='response'>
        <Row>
          <Col>
            Response:
          </Col>
        </Row>
        <Row>
          <Col>
          {props.response}
          </Col>
        </Row>
        </div>
      )
    }
  }


  const date = moment(props.date).format("LL");

  return (
    <div id='reviewsList'>
        <Col>
            <Row>
              <Col sm={6}>
                <Ratings rating={props.ratings}/>
              </Col>

              <Col sm={6}>
                {props.name}, {date}
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                <strong>{props.summary}</strong>
              </Col>
            </Row>

            <Row>
              <Col sm={8}>
                {props.body}
              </Col>
            </Row>

            <Row>
              <Col>
                {recommendProduct()}
              </Col>
            </Row>
              <Row>
              <Col>
                {responseProduct()}
              </Col>
              </Row>
            <Row>
              <Col sm={6}>
              Was this review helpful? <a>Yes</a>({props.helpfulness}) <a>No</a> | <a>Report</a>
              </Col>
            </Row>
        </Col>
        <hr class='solid'/>
  </div>
  )
}

export default ReviewsList;