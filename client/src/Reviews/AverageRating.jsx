import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratings from './Ratings.jsx';

const AverageRating = (props) => {
  // console.log('averageRating props:', props)

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

  return (
    <div id='averageRating'>
      {(!props.rating.ratings ? <p>Loading</p>
        :<div>
          <div>
            <p>RATINGS &amp; REVIEWS</p>
            <Row>
              <Col className="rating-average">
                {props.average.toFixed(1)}<Ratings rating={props.average}/>
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
                <ProgressBar variant='success' now={33.3}/>
                {/* <ProgressBar variant='success' now={starPercentage(5)}/> */}
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
                <ProgressBar variant='success' now={33.3} />
                {/* <ProgressBar variant='success' now={starPercentage(4)}/> */}
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
                <ProgressBar variant='success' now={33.3} />
                {/* <ProgressBar variant='success' now={starPercentage(3)}/> */}
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
                <ProgressBar variant='success' now={0} />
                {/* <ProgressBar variant='success' now={starPercentage(2)}/> */}
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
                <ProgressBar variant='success' now={0} />
                {/* <ProgressBar variant='success' now={starPercentage(1)}/> */}
              </Col>
              <Col>
                {props.rating.ratings[1]}
              </Col>
            </Row>
          </div>
        </div>)
      }
      <br></br>
    </div>
  )
}

export default AverageRating;
