import React from 'react';
import Rating from '@material-ui/lab/Rating';

const Ratings = (props) => {
  return (
  <div>
    <Rating
      name="simple-controlled"
      value={Number((props.rating))}
      precision={0.25}
      size="small"
      readOnly
    />
  </div>
  )
}

export default Ratings;