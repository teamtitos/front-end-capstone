import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moment from 'moment';
import Ratings from './Ratings.jsx';
import CheckIcon from '@material-ui/icons/Check';

const ReviewsList = (props) => {
  console.log('reviewList props:', props)

  const recommendProduct = () => {
    if (props.recommend >= 1) {
      return 'I recommend this product';
    } else {
      return null;
    }
  }

  const checkRecommendProduct = () => {
    if (props.recommend >= 1) {
      return <CheckIcon />
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

//   const helpfulness = () => {
//     if (!props.meta.recommended) {
//     { if (!props.meta.recommended[0]) {
//       return (
//         <Row>
//           <Col sm={6}>
//           Was this review helpful?
//           <u>Yes</u> ({props.meta.recommended[1]})
//           <u>No</u> (0)
//           | <u>Report</u>
//           </Col>
//         </Row>
//       )
//     } else if (!props.meta.recommended[1]) {
//       return (
//         <Row>
//         <Col sm={6}>
//         Was this review helpful?
//         <u>Yes</u> (0)
//         <u>No</u> ({props.meta.recommended[0]})
//         | <u>Report</u>
//         </Col>
//       </Row>
//       )
//     }}
//   }
// }

 const helpfulness = () => {
  return (
      (!props.meta.recommended ? <p>loading</p> :
      <Row>
        <Col sm={6}>
        Was this review helpful? <u>Yes</u> ({props.meta.recommended[1]}) <u>No</u> ({props.meta.recommended[0]}) <u>Report</u>
        </Col>
      </Row>
    )
  )
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
            <p>{props.body}</p>
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
        {/* <Row>
          <Col sm={6}>
            {helpfulness()}
          </Col>
        </Row> */}
        {helpfulness()}
      </Col>
     {checkRecommendProduct()}
      <hr className='solid'/>
    </div>
  )
}

export default ReviewsList;