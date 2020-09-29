import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ReviewsList = (props) => {
  // console.log('props from Reviews:', props)

  return (
  <div>
      { !props.reviewDetails
        ? <p>Loading</p>
        : <div>
            <h3>ReviewsList Component:</h3>

            <Row>
              <Col sm={6}>
                <p><strong>{props.reviewInfo.count} reviews, sorted by drop down menu</strong></p>
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
              <p>star rating</p>
              </Col>

              <Col sm={6}>
                <p> {props.reviewDetails[0].reviewer_name} {props.reviewDetails[0].date}</p>
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                <p><strong>{props.reviewDetails[0].summary}</strong></p>
              </Col>
            </Row>

            <Row>
              <Col sm={8}>
                <p>{props.reviewDetails[0].body}</p>
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                <p>Helpful? Yes ({props.reviewDetails[0].helpfulness}) | Report</p>
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                <p>star rating</p>
              </Col>

              <Col sm={6}>
                <p>{props.reviewDetails[1].reviewer_name} {props.reviewDetails[1].date}</p>
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                <p><strong>{props.reviewDetails[1].summary}</strong></p>
              </Col>
            </Row>

            <Row>
              <Col sm={8}>
                <p>{props.reviewDetails[1].body}</p>
              </Col>
            </Row>

            <Row>
              <Col sm={6}>
                <p>Helpful? Yes ({props.reviewDetails[1].helpfulness}) | Report</p>
              </Col>
            </Row>

        </div>
      }
    <button>ADD A REVIEW</button>
  </div>
  )
}



export default ReviewsList;