import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ModalWindow from './ModalWindow.jsx';

const ReviewsList = (props) => {
  // console.log('props from reviews:', props);
  // map through the results array (reviewDetails prop)?

  return (
    <div>
      { !props.reviewDetails
        ? <p>Loading</p>
        : <div>

          <Row>
            <Col sm={2}>
            <p><strong>{props.reviewDetails.length} reviews,</strong></p>
            </Col>
            <Col sm={4}>
            <label>Sort on</label>
              <select>
                <option value="Helpful">Helpful</option>
                <option value="Newest">Newest</option>
                <option value="Relevant">Relevant</option>
              </select>
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

            <button onClick={() => console.log('More Reviews button cliked!')}>MORE REVIEWS</button>
            <ModalWindow />

        </div>
      }
  </div>
  )
}



export default ReviewsList;