import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Ratings from './Ratings.jsx';

const ReviewsList = (props) => {
  console.log('ReviewsList props:', props)

  let {reviewer_name, date, summary, body, helpfulness, rating, photos, recommend, response} = props.reviewData
  let ratings = rating

  const [bool, setBool] = useState(false)

  const recommendProduct = () => {
    if (recommend >= 1) {
      return 'I recommend this product';
    } else {
      return null;
    }
  }

  const responseProduct = () => {
    if (!response) {
      return null;
    } else {
      return (
        <div id="response">
          <Row>
            <Col>
              Response:
            </Col>
          </Row>
          <Row>
            <Col>
              {response}
            </Col>
          </Row>
        </div>
      )
    }
  }

  const checkRecommendProduct = () => {
    if (recommend >= 1) {
      return <i className="fa fa-check"></i>
    } else {
      return null;
    }
  }

 const showMoreButton = () => {
  if (body.length > 250) {
    return (
      <React.Fragment>
        <Row>
          <Col className="reviewBody">
            { bool === false ? body.slice(0, 250) : body }
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              href="#"
              variant="link"
              size="sm"
              onClick={() => setBool(!bool)}>Show more
            </Button>
          </Col>
        </Row>
      </React.Fragment>
    )
  } else {
    return body
  }
 }

 const dateFormat = moment(date).format("LL");

  return (
    <div className="reviewsList">
      <Col>
        <Row>
          <Col>
            <Ratings rating={ratings}/>
          </Col>
          <Col className="text-right">
            {reviewer_name}, {dateFormat}
          </Col>
        </Row>
        <h4 className="review-title">{summary}</h4>
        {showMoreButton()}
        {recommendProduct()}
        {responseProduct()}
        <p>Helpful? <Button
          href="#"
          variant="link"
          size="sm"
          onClick={() => props.help(props.reviewId)}>Yes
        </Button>({helpfulness}) |
        <Button
          href="#"
          variant="link"
          size="sm"
          onClick={() => props.badReview(props.reviewId)}>Report
        </Button></p>
        {checkRecommendProduct()}
      </Col>
      <hr className="solid"/>
    </div>
  )
}

export default ReviewsList;