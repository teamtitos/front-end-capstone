import React from 'react';
import Rating from '@material-ui/lab/Rating';

const FormRating = (props) => {
  return (
  <div>
    <Rating
      name="simple-controlled"
      value={props.rating}
      precision={0.25}
      size="small"
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      onChangeActive={(event, newHover) => {
        setHover(newHover);
      }}
    />
  </div>
  )
}

export default FormRating;