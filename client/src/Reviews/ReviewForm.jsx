import React from 'react';


function ReviewForm(props) {
  // console.log('props from modal window to FORM:', props)

  let characteristicsArray = []
  for (let key in props.meta_data.characteristics) {
    characteristicsArray.push(key)
  }

  const charArray = characteristicsArray.map(characteristic => {
    return (
      <div>
        {characteristic}
          <input type='radio'  name='characteristics' value='1' />
          <label for='1'>1</label>
          <input type='radio'  name='characteristics' value='2' />
          <label for='2'>2</label>
          <input type='radio'  name='characteristics' value='3' />
          <label for='3'>3</label>
          <input type='radio'  name='characteristics' value='4' />
          <label for='4'>4</label>
          <input type='radio'  name='characteristics' value='5' />
          <label for='5'>5</label>
      </div>
    )
  })

  return (
  <div >

    {!props.meta_data
        ? <p>Loading</p>
        : <div>
            <form>
              <label>
                Overall Rating *
              </label>
              <br></br>

              <label>
                Do you recommend this product? *
              </label>
              <input type='radio' id='yes' name='recommend' value='yes'/>
              <label for='yes'>Yes</label>
              <input type='radio' id='no' name='recommend' value='no' />
              <label for='no'>No</label>
              <br></br>

              <label>
              {charArray}
              </label>
              <br></br>

              <label>
                Review Body *
              </label>
              <br></br>
              <textarea countLimit={50} >
              </textarea>
              {/* <textarea rows='4' cols='40' minlength='50' maxlength='1000' placeholder='Why did you like the product or not?'></textarea>
              <span class="textarea__count">50</span> */}
              <br></br>
              <span class="textarea__count">0/50</span>
              {/* <p>character counter</p> */}
              <br></br>

              <label>
                What is your nickname *
              </label>
              <input type='text' maxlength='60' placeholder='Example: jackson11!'/>
              <p>For privacy reasons, do not use your full name or email address” will appear.</p>
              <br></br>

              <label>
                Your Email *
              </label>
              <input type='email' maxlength='60' placeholder='Example: jackson11@email.com'/>
              <p>For authentication reasons, you will not be emailed</p>
              <br></br>

              <input type='submit' value='Submit Review' onClick={() => console.log('Submit Review button cliked!')}/>
              <br></br>

            </form>

          </div>
          }

  </div>
  )
}

export default ReviewForm;