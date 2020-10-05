import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AverageRating = (props) => {
  console.log('average rating props:', props)

  let starNumbers = [5, 4, 3, 2, 1];

  let starValues = [];

  for (let key in props.rating.ratings) {
    starValues.push(props.rating.ratings[key])
    console.log('starvalues:', starValues)
  }

  let starRanks = starNumbers.map(num => {
    return (
      <div>
        <Row>
          <Col>
            {num} Stars
          </Col>
          <Col>
            <ProgressBar variant='success' now={30}/>
          </Col>
        </Row>
      </div>
    )
  })

  let values = starValues.map(val => {
    return (
      <div>
        <Row>
          <Col>
            {val}
          </Col>
          
        </Row>
      </div>
    )
  })

  return (
    <div>
      {(!props.rating.ratings ? <p>Loading</p>
       :<div>
      <p>RATINGS & REVIEWS</p>
      <Row>
        <Col>
          <p># average rating</p>
        </Col>
        <Col>
          <p>AVERAGE STAR RATING</p>
        </Col>
      </Row>
    <Row>
      <Col>
        <p>Rating Breakdown</p>
      </Col>
      <Col>
      <p>PERCENTAGE OF REVIEWS RECCOMMEND THIS PRODUCT</p>
      </Col>
    </Row>
      <Row>
        <Col>
          {starRanks}
        </Col>
        <Col>
        {values}
        </Col>
      </Row>
    </div>
  )}
  </div>
  )

  // return (
  //   <div>
  //   {(!props.rating.ratings ? <p>Loading</p>
  //     :<div>
  //         <Col>
  //           <p>RATINGS & REVIEWS</p>
  //           <Row>
  //             <Col sm={2}>
  //               <p># average rating</p>
  //             </Col>
  //             <Col sm={2}>
  //               <p>AVERAGE STAR RATING</p>
  //             </Col>
  //           </Row>
  //           <p>Rating Breakdown</p>
  //           <Col>
  //           <p>PERCENTAGE OF REVIEWS RECCOMMEND THIS PRODUCT</p>
  //           </Col>
  //           <Row>
  //             <Col>
  //             <p>5 Stars</p>
  //             </Col>
  //             <Col>
  //               <ProgressBar variant='success' now={20}/>
  //             </Col>
  //             <Col>
  //               <p>{props.rating.ratings[5]}</p>
  //             </Col>
  //           </Row>

  //           <Row>
  //             <Col>
  //               <p>4 Stars</p>
  //             </Col>
  //             <Col>
  //               <ProgressBar variant='success' now={40} />
  //             </Col>
  //             <Col>
  //               <p>{props.rating.ratings[4]}</p>
  //             </Col>
  //           </Row>

  //           <Row>
  //             <Col>
  //               <p>3 Stars</p>
  //             </Col>
  //             <Col>
  //               <ProgressBar variant='success' now={60} />
  //             </Col>
  //             <Col>
  //               <p>{props.rating.ratings[3]}</p>
  //             </Col>
  //           </Row>

  //           <Row>
  //             <Col>
  //               <p>2 Stars</p>
  //             </Col>
  //             <Col>
  //               <ProgressBar variant='success' now={80} />
  //             </Col>
  //             <Col>
  //               <p>{props.rating.ratings[2]}</p>
  //             </Col>
  //           </Row>

  //           <Row>
  //             <Col>
  //               <p>1 Stars</p>
  //             </Col>
  //             <Col>
  //               <ProgressBar variant='success' now={100} />
  //             </Col>
  //             <Col>
  //               <p>{props.rating.ratings[1]}</p>
  //             </Col>
  //           </Row>
  //         </Col>

  //     </div>)}
  // </div>
  // )
}

export default AverageRating;
