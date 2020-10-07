import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratings from './Ratings.jsx';

const AverageRating = (props) => {
  console.log('average rating props:', props)
  console.log('ratings:', props.rating.ratings)

  const ratingAverage = () => {
    if (props.rating.ratings) {
      let total = 0;
      let votes = 0;
      let average = 0;
      for (let i=1; i < 5; i++) {
        if (props.rating.ratings[i]) {
          total += props.rating.ratings[i] * i;
          votes += props.rating.ratings[i];
          average = total / votes;
        }
      }
      if (Number.isInteger(average)) {
        return `${average}.0`
      } else {
        return average.toString().slice(0, 3);
      }
    }
  }

  const percentageRating = () => {
    if (!props.meta.recommended[0]) {
      return '100'
    }
    if (!props.meta.recommended[1]) {
      return '0'
    }
    if (props.meta.recommended[1]) {
      return  ~~((props.meta.recommended[1] / (props.meta.recommended[0] + props.meta.recommended[1])) * 100)
    }
   }

  //  const PercentageBar = () => {
  //    if (!props.rating.ratings) {
  //     for (let i=1; i < 5; i++) {

  //     }
  //    }
  //  }

  //  PercentageBar()

  return (
    <div>
    {(!props.rating.ratings ? <p>Loading</p>
      :<div>
          <div>
            <p>RATINGS & REVIEWS</p>
            <Row>
              <Col sm={2}>
                {ratingAverage()}
              </Col>
              <Col sm={2}>
              <Ratings rating={ Number(ratingAverage()) }/>
              </Col>
            </Row>
              Rating Breakdown
              <br></br>
              {percentageRating()} % of reviews recommend this product
              <br></br>
            <Row>
              <Col>
              5 Stars
              </Col>
              <Col>
                <ProgressBar variant='success' now={20}/>
             </Col>
              <Col>
                {props.rating.ratings[5]}
              </Col>
            </Row>

            <Row>
              <Col>
                4 Stars
              </Col>
              <Col>
                <ProgressBar variant='success' now={20} />
              </Col>
              <Col>
                {props.rating.ratings[4]}
              </Col>
            </Row>

            <Row>
              <Col>
               3 Stars
              </Col>
              <Col>
                <ProgressBar variant='success' now={20} />
              </Col>
              <Col>
              {props.rating.ratings[3]}
              </Col>
            </Row>

            <Row>
              <Col>
                2 Stars
              </Col>
              <Col>
                <ProgressBar variant='success' now={20} />
              </Col>
              <Col>
              {props.rating.ratings[2]}
              </Col>
            </Row>

            <Row>
              <Col>
               1 Stars
              </Col>
              <Col>
                <ProgressBar variant='success' now={20} />
              </Col>
              <Col>
                {props.rating.ratings[1]}
              </Col>
            </Row>
          </div>
      </div>)}
      <br></br>
  </div>
  )
}

export default AverageRating;
