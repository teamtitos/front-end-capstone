import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratings from './Ratings.jsx';

const AverageRating = (props) => {
  // console.log('averageRating props:', props)
  // console.log(props.meta)
  // console.log('meta ratings', props.meta.ratings)

  // let totalReviews = 0
  // let val = 0
  // const totalAverage = () => {
  //   for (let key in props.meta.ratings) {
  //     let currentKey = key;
  //     console.log('currentKey:', key)

  //     let currentValue = props.meta.ratings[currentKey]
  //     // console.log('currentValue', props.meta.ratings[currentKey])

  //     val += currentKey * currentValue

  //     totalReviews += currentValue

  //     console.log('totalReviews:', totalReviews) // 39

  //     let averageTotal =( ((val / totalReviews) * 10) / 10).toFixed(1)
  //     console.log('averageTotal:', averageTotal)
  //   }
  // }


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


//   let total = 0
//   const starPercentage = (num) => {
//      {(!props.meta.ratings) ? } {
//       for (let key in props.meta.ratings) {
//       total += props.meta.ratings[key]

//       console.log('num:', props.meta.ratings[num])
//     }
//     console.log('%:', (props.meta.ratings[num] / total) * 100)
//     // return (props.meta.ratings[num] / total) * 100
//     }
// }

// starPercentage('1')

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
