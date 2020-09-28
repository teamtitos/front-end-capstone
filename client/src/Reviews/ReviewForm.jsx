import React from 'react';

const ReviewForm = () => {
  return (
  <div >
    <h3>this is the ReviewForm component:</h3>

    <form>

      <label>
      Overall rating (star selector) *
      </label>
      <br></br>

      <label>
        Do you recommend this product? (radio buttons, yes or no) *
      </label>
      <br></br>
      <input type='radio' id='yes' name='recommend' value='yes'/>
      <label for='yes'>yes</label>

      <input type='radio' id='no' name='recommend' value='no' />
      <label for='no'>no</label>

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
        Review body (A text input allowing up to 1000 characters. Placeholder text should read: “Why did you like the product or not?”., minimum of 50 characters) *
      </label>
      <br></br>
      <textarea rows='5' cols='35' minlength='50' maxlength='1000' placeholder='Why did you like the product or not?'></textarea>

      <br></br>

      <label>
        What is your nickname (A text input allowing up to 60 characters for the user’s display name Placeholder text should read: “Example: jackson11!”.) *
      </label>
      <br></br>
      <input type='text' maxlength='60' placeholder='Example: jackson11!'/>

      <br></br>

      <label>
        Your email (A text input allowing up to 60 characters. Placeholder text should read: “Example: jackson11@email.com”.) *
      </label>
      <br></br>
      <input type='email' maxlength='60' placeholder='Example: jackson11@email.com'/>

      <br></br>

      <label>
        Submit review (button)
      </label>
      <br></br>
      <input type='submit' value='Submit Review' />

    </form>

  </div>
  )
}

export default ReviewForm;