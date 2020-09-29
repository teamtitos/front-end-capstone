import React, {useEffect, useState, useRef} from 'react';
import ReviewForm from './ReviewForm.jsx';

function ReviewModal () {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>toggle modal</button>
      {isOpen ? (
        <div>
          <ReviewForm />
        </div>
      ) : null}
    </div>
  )
}

export default ReviewModal;