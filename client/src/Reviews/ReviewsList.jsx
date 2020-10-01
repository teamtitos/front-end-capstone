import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ModalWindow from './ModalWindow.jsx';

const ReviewsList = (props) => {
  console.log('props from reviews:', props);

  // let productReviews = []
  // for (let key in props.reviewInfo) {
  //   console.log('key in reviewInfo:', key)
  //   productReviews.push(key)
  //   console.log('productReviews:', productReviews)
  // }

  // const reviews = props.reviewInfo.results.map(review => {
  //   console.log('review:', review)
  // })

  // const charArray = characteristicsArray.map(characteristic => {
  //   return (
  //     <div>
  //       {characteristic}
  //         <input type='radio' id='1' name='characteristics' value='1' />
  //         <label for='1'>1</label>
  //         <input type='radio' id='2' name='characteristics' value='2' />
  //         <label for='2'>2</label>
  //         <input type='radio' id='3' name='characteristics' value='3' />
  //         <label for='3'>3</label>
  //         <input type='radio' id='4' name='characteristics' value='4' />
  //         <label for='4'>4</label>
  //         <input type='radio' id='5' name='characteristics' value='5' />
  //         <label for='5'>5</label>
  //     </div>
  //   )
  // })

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
            <ModalWindow metaData={props.metadata}/>
        </div>
      }
  </div>
  )
}



export default ReviewsList;