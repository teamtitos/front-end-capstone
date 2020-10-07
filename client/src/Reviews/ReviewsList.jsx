import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import Ratings from './Ratings.jsx';

const ReviewsList = (props) => {
  console.log('props from reviews into REVIEWS LIST:', props);

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

  // const helpfulness = () => {
  //   {( (!props.meta.recommend[0] && !props.meta.recommend[1]) ) ? <p>loading</p> :
  //    (
  //     <Row>
  //       <Col sm={6}>
  //       Was this review helpful?
  //       <a href=''>Yes ({props.meta.recommend[1]})</a>
  //       <a href=''>No ({props.meta.recommend[0]})</a>
  //       | <a href=''>Report</a>
  //       </Col>
  //     </Row>
  //    )}
  //   }

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
                {/* {bodyCharCount()} */}
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
              Was this review helpful?
              <u>Yes</u> ({props.helpfulness})
              <u>No</u> (0)
              | <u>Report</u>
              {/* {helpfulness()} */}
              </Col>
            </Row>
        </Col>
        <hr class='solid'/>
  </div>
  )
}

export default ReviewsList;