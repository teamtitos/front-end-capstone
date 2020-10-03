import React from 'react';
import Rating from '@material-ui/lab/Rating';

const FormRating = (props) => {
  return (
    <div>
    <Rating
       name="hover-feedback"
      value={props.rating}
      precision={0.25}
      size="small"
    />
  </div>
  )
}

export default FormRating;