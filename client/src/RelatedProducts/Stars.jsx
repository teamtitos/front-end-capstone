import React from 'react';

const Stars = ({id}) => {
  let random = Math.floor(Math.random() * 100);
  return (
    <div className="rating font-weight-lighter">
    <div className="rating-upper" style={{width: `${random}%`}}>
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