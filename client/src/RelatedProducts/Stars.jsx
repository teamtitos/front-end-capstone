import React from 'react';

const Stars = ({rating}) => {
  return (
    <div className="rating font-weight-lighter">
    <div className="rating-upper" style={{width: `${rating}%`}}>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
    </div>
    <div className="rating-lower">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
    </div>
    </div>
  )

}

export default Stars;