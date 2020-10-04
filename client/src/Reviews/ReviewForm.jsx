import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormRating from './FormRating.jsx';

function ReviewForm(props) {
  // console.log('props from modal window to FORM:', props)

  let characteristicsArray = []
  for (let key in props.meta_data.characteristics) {
    characteristicsArray.push(key)
  }

  const charArray = characteristicsArray.map((characteristic, index) => {
    console.log('index:', index)
    return (
      <div>
        <Form.Group >
        <Form.Label>{characteristic}</Form.Label>
        <br></br>
        <Form.Check inline label='1' type='radio' name={characteristic} value='1'/>
        <Form.Check inline label='2' type='radio' name={characteristic} value='2'/>
        <Form.Check inline label='3' type='radio' name={characteristic} value='3'/>
        <Form.Check inline label='4' type='radio' name={characteristic} value='4'/>
        <Form.Check inline label='5' type='radio' name={characteristic} value='5'/>
        </Form.Group>
      </div>
    )
  })

  return (
    <div >
      {!props.meta_data
        ? <p>Loading</p>
        : <div>
          <Form>
            <Form.Group>
              <Form.Label>Overall Rating *</Form.Label>
              <FormRating rating={props.ratings}/>
            </Form.Group>

              <Form.Label>{charArray}</Form.Label>

            <Form.Group>
              <Form.Label>Do you recommend this product? *</Form.Label>
              <br></br>
              <Form.Check inline label='Yes' type='radio' name='recommend' vlaue='Yes'/>
              <Form.Check inline label='No' type='radio' name='recommend' value='No'/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Review Body *</Form.Label>
              <Form.Control as='textarea' rows='5' placeholder='Why did you like the product or not?' minlength='50' maxlength='1000' />
              <p>character counter (Minimum required characters left: [##], Minimum reached when min is at 50)</p>
            </Form.Group>

            <Form.Group >
              <Form.Label>What is your nickname *</Form.Label>
              <Form.Control type='text' placeholder='Example: jackson11!' maxlength='60'/>
              <Form.Text className='text-muted'>
              For privacy reasons, do not use your full name or email address
              </Form.Text>
            </Form.Group>

            <Form.Group >
              <Form.Label>Your Email *</Form.Label>
              <Form.Control type='email' placeholder='Example: jackson11@email.com' maxlength='60'/>
              <Form.Text className='text-muted'>
              For authentication reasons, you will not be emailed
              </Form.Text>
            </Form.Group>

            <Button variant='outline-dark' type='submit'>Submit Review</Button>
          </Form>

          </div>
      }
    </div>
  )
}


export default ReviewForm;