import React from 'react';

const ReviewsList = (props) => {
  console.log('props from Reviews:', props)

  return (
  <div>
    { !props.reviewDetails
      ? <p>Loading</p>
      : <div>
          <h3>ReviewsList Component:</h3>
          <p>{props.reviewInfo.count} sorted by drop down menu</p>
          <p>star rating {props.reviewDetails[0].reviewer_name} {props.reviewDetails[0].date}</p>
          <p><strong>{props.reviewDetails[0].summary}</strong></p>
          <p>{props.reviewDetails[0].body}</p>
          <p>recommend</p>
          <p>Response:</p>
          <p>Helpful? Yes ({props.reviewDetails[0].helpfulness}) | Report</p>

          <p>star rating {props.reviewDetails[1].reviewer_name} {props.reviewDetails[1].date}</p>
          <p><strong>{props.reviewDetails[1].summary}</strong></p>
          <p>{props.reviewDetails[1].body}</p>
          <p>recommend</p>
          <p>Response:</p>
          <p>Helpful? Yes ({props.reviewDetails[1].helpfulness}) | Report</p>

          <button>ADD A REVIEW</button>
      </div>
    }
  </div>
  )
}

export default ReviewsList;