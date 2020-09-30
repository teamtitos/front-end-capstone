import React from 'react';

const StarRating = ({id}) => {
  let random = Math.floor(Math.random() * 100);
  return (
    <div >
      <p>Star Rating component</p>
    </div>
  )
}

export default StarRating;