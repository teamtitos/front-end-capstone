import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Ratings from './Ratings.jsx';

const ReviewsList = (props) => {

  const [bool, setBool] = useState(false)

  const recommendProduct = () => {
    if (props.recommend >= 1) {
      return 'I recommend this product';
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

  const checkRecommendProduct = () => {
    if (props.recommend >= 1) {
      return <i className="fa fa-check"></i>
    } else {
      return null;
    }
  }

 const showMoreButton = () => {
  if (props.body.length > 250) {
    return (
      <div>
      <Row>
        <Col className='reviewBody'>
          { bool === false ? props.body.slice(0, 250) : props.body }
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant='outline-dark' size="sm" onClick={() => setBool(!bool)}>Show more</Button>
        </Col>
      </Row>
      </div>
    )
  } else {
    return props.body
  }
 }


  const clickShowMoreButton = (event) => {
    console.log('button was clicked')
    return <p>{props.body}</p>
  }

 const date = moment(props.date).format("LL");

  return (
    <div className='reviewsList'>
      <Col>

        <Row>
          <Col>
            <Ratings rating={props.ratings}/>
          </Col>

          <Col className="text-right">
            {props.name}, {date}
          </Col>
        </Row>

        <h4 className="review-title">{props.summary}</h4>
        {showMoreButton()}
        {recommendProduct()}
        {responseProduct()}
        <p>Helpful? <button onClick={() => props.help(props.reviewId)}>Yes</button>({props.helpfulness}) | <button onClick={() => props.badReview(props.reviewId)}>Report</button></p>
        {checkRecommendProduct()}
      </Col>
      <hr className='solid'/>
    </div>
  )
}

export default ReviewsList;