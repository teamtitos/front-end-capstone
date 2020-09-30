import React from 'react';
// import StarRating from './StarRating.jsx'

function ReviewForm() {
  return (
  <div >
    <form>
      <label>
        Overall Rating *
      </label>
      <br></br>

      <label>
        Do you recommend this product? *
      </label>
      <br></br>
      <input type='radio' id='yes' name='recommend' value='yes'/>
      <label for='yes'>Yes</label>
      <input type='radio' id='no' name='recommend' value='no' />
      <label for='no'>No</label>
      <br></br>

      <label>
        Characteristics (radio buttons, 1-5, make a table for characteristics chart?) *
      </label>
      <br></br>
      <input type='radio' id='1' name='characteristics' value='1' />
      <label for='1'>1</label>
      <input type='radio' id='2' name='characteristics' value='2' />
      <label for='2'>2</label>
      <input type='radio' id='3' name='characteristics' value='3' />
      <label for='3'>3</label>
      <input type='radio' id='4' name='characteristics' value='4' />
      <label for='4'>4</label>
      <input type='radio' id='5' name='characteristics' value='5' />
      <label for='5'>5</label>
      <br></br>

      <label>
      Review Summary
      </label>
      <br></br>
      <input type='text' maxlength='60' placeholder='Example: Best purchase ever!'/>
      <br></br>

      <label>
        Review Body *
      </label>
      <br></br>
      <textarea rows='4' cols='40' minlength='50' maxlength='1000' placeholder='Why did you like the product or not?'></textarea>
      <p>character counter</p>
      <br></br>

      <label>
        What is your nickname *
      </label>
      <br></br>
      <input type='text' maxlength='60' placeholder='Example: jackson11!'/>
      <p>For privacy reasons, do not use your full name or email address” will appear.</p>
      <br></br>

      <label>
        Your Email *
      </label>
      <br></br>
      <input type='email' maxlength='60' placeholder='Example: jackson11@email.com'/>
      <p>For authentication reasons, you will not be emailed</p>
      <br></br>

      <input type='submit' value='Submit Review' onClick={() => console.log('Submit Review button cliked!')}/>
      <br></br>

    </form>
  </div>
  )
}

export default ReviewForm;