import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Ratings from './Ratings.jsx';
// import './Reviews.css';

const ReviewsList = (props) => {

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


 const helpfulness = () => {
  return (
    (!props.meta.recommended ? <p>loading</p> :
      <Row>
        <Col sm={6}>
        Was this review helpful? <u>Yes</u> ({props.meta.recommended[1] || 0}) <u>No</u> ({props.meta.recommended[0] || 0}) <u>Report</u>
        </Col>
      </Row>
    )
  )
 }

 const showMoreButton = () => {
  if (props.body.length > 250) {
    return (
      <div>
      <Row>
        <Col className='reviewBody'>
          {props.body.slice(0, 250)}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant='outline-dark' size="sm">Show more</Button>
        </Col>
      </Row>
      </div>
    )
  } else {
    return props.body
  }
 }


  // const clickShowMoreButton = (event) => {
  //   // event.preventDefault();
  //   if (!props.body) {
  //     console.log('show more clicked:', props.body )
  //     // return props.body
  //   }
  //   // return props.body
  // }

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
        <p>{showMoreButton()}</p>
        <p>{recommendProduct()}</p>
        <p>{responseProduct()}</p>
        <p>{helpfulness()}</p>
        {checkRecommendProduct()}
      </Col>
      <hr className='solid'/>
    </div>
  )
}

export default ReviewsList;