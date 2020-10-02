import React from 'react';

const MoreReviews = (props) => {
  console.log('props from reviewsList to moreReviews:', props)

  let nextReviews = props.more.length;

  console.log('nextReviews:', nextReviews) // 2

  let reviewsArray = props.more.map(review => {
    console.log('reviewsArray review:', review)
    if(nextReviews > 2) {
     return(
       <div>
         <p>{review}</p>
       </div>
     )
   }
  })
  return(
    <div>
      <p>MoreReviews component</p>
    </div>
  )
}

export default MoreReviews;