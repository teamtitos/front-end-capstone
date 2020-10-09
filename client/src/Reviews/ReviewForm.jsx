import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormRating from './FormRating.jsx';
import TextareaCounter from 'react-textarea-counter';

function ReviewForm(props) {

  console.log('addReview:', props.addReview)

  let characteristicsArray = []
  for (let key in props.meta_data.characteristics) {
    characteristicsArray.push(key)
  }

  // {quality, comfort, strength}
  // {  }
  // 1, 2, 3, 4, 5
  // let use
  // let charac = { characteristic: 0 };
  // let onChangeCharacteristic = (characteristic, number) {
  //   charac[quality] = number;
  // }

  const charArray = characteristicsArray.map((characteristic, index) => {
    return (
      <div key={index}>
        <Form.Group >
        <Form.Label>{characteristic} *</Form.Label>
        <br></br>
        <Form.Check
          inline label='1'
          type='radio'
          name={characteristic}
          value='1'
          required
          onChange={() => {props.submitCharacteristics(characteristic, 1)}}
        />
        <Form.Check
          inline label='2'
          type='radio'
          name={characteristic}
          value='2'
          required
          onChange={() => {props.submitCharacteristics(characteristic, 2)}}
        />
        <Form.Check
          inline label='3'
          type='radio'
          name={characteristic}
          value='3'
          required
          onChange={() => {props.submitCharacteristics(characteristic, 3)}}
        />
        <Form.Check
          inline label='4'
          type='radio'
          name={characteristic}
          value='4'
          required
          onChange={() => {props.submitCharacteristics(characteristic, 4)}}
        />
        <Form.Check
          inline label='5'
          type='radio'
          name={characteristic}
          value='5'
          required
          onChange={() => {props.submitCharacteristics(characteristic, 5)}}
        />
        </Form.Group>
      </div>
    )
  })

  return (
    <div >
      {!props.meta_data
        ? <p>Loading</p>
        : <div>
          <Form
          // method="post"
          // action="http://18.224.37.110/reviews"
          onSubmit={props.addReview}
          >
            <Form.Group>
                <Form.Label>Overall Rating *</Form.Label>
                <FormRating
                  rating={props.ratings}
                  required
                  value={props.submitRatingValue}
                  // onChange={props.submitRating}
                  submitRating={props.submitRating}
                />
            </Form.Group>

              <Form.Label>{charArray}</Form.Label>

            <Form.Group>
              <Form.Label>Do you recommend this product? *</Form.Label>
              <br></br>
              <Form.Check
                inline label='Yes'
                type='radio'
                name='recommend'
                value='Yes'
                required
                onChange={props.sumbitRecommend}
              />
              <Form.Check
                inline label='No'
                type='radio'
                name='recommend'
                value='No'
                required
                onChange={props.sumbitRecommend}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Review summary</Form.Label>
              <Form.Control
              type='text'
              placeholder='Example: Best purchase ever!'
              maxLength='60'
              value={props.submitSummaryValue}
              onChange={props.submitSummary}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Review Body *</Form.Label>
                <TextareaCounter
                required={true}
                rows='5'
                placeholder='Why did you like the product or not?'
                minLength='50'
                maxLength='1000'
                countLimit={1000}
                value={props.submitBodyValue}
                onChange={props.submitBody}
                />
            </Form.Group>

            <Form.Group>
              <Form.Label>What is your nickname? *</Form.Label>
              <Form.Control
              type='text'
              placeholder='Example: jackson11!'
              maxLength='60'
              required
              value={props.submitNameValue}
              onChange={props.submitName}
              />
              <Form.Text className='text-muted'>
              For privacy reasons, do not use your full name or email address
              </Form.Text>
            </Form.Group>

            <Form.Group >
              <Form.Label>Your Email? *</Form.Label>
              <Form.Control
              type='email'
              placeholder='Example: jackson11@email.com'
              maxLength='60'
              required
              value={props.submitEmailValue}
              onChange={props.sumbitEmail}
              />
              <Form.Text className='text-muted'>
              For authentication reasons, you will not be emailed
              </Form.Text>
            </Form.Group>

            <Form.Group >
              <Form.Label>Your Photos</Form.Label>
              <Form.Control
              type='text'
              value={props.submitPhotosValue}
              onChange={props.submitPhotos}
              />
            </Form.Group>

            <Button variant='outline-dark' type='submit'>Submit Review</Button>
          </Form>
          </div>
      }
    </div>
  )
}

export default ReviewForm;