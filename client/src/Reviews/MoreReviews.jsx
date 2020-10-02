import React from 'react';

const MoreReviews = (props) => {
  // console.log('props from reviewsList to moreReviews:', props)
  let moreReviews = []

  for (let key in props.more) {
    // console.log('key:', key)
    moreReviews.push(key)
  }

  for (let i = 0; i < moreReviews.length; i++) {
    let currentReview = moreReviews[i];
    // console.log('currentReview:', currentReview)
    if (moreReviews.length > 2) {
      return(
        <div>
          <button>More Reviews</button>
        </div>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
  }
}

export default MoreReviews;