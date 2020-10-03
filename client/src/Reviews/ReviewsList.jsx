import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment';

const ReviewsList = (props) => {
  // console.log('props from reviews into REVIEWS LIST:', props);

  const date = moment(props.date).format("LL");

  return (
    <div>
        <div>
            <Row>
              <Col sm={6}>
              <p>star rating</p>
              </Col>

              <Col sm={6}>
                <p> {props.name} {date}</p>
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
              <Col sm={6}>
                <p>Helpful? Yes ({props.helpfulness}) | Report</p>
              </Col>
            </Row>
        </div>
  </div>
  )
}



export default ReviewsList;