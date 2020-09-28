import React from 'react';

const ReviewsList = (props) => {
  // console.log('props from Reviews:', props)

  return (
    <div>
  <div>
    { !props.reviewDetails
      ? <p>Loading</p>
      : <div>
          <h3>ReviewsList Component:</h3>
          <p>{props.reviewInfo.count} sorted by drop down menu</p>
          <p>star rating {props.reviewDetails[0].reviewer_name} {props.reviewDetails[0].date}</p>
          <p><strong>{props.reviewDetails[0].summary}</strong></p>
          <p>{props.reviewDetails[0].body}</p>
          <p>Helpful? Yes ({props.reviewDetails[0].helpfulness}) | Report</p>

          <p>star rating {props.reviewDetails[1].reviewer_name} {props.reviewDetails[1].date}</p>
          <p><strong>{props.reviewDetails[1].summary}</strong></p>
          <p>{props.reviewDetails[1].body}</p>
          <p>Helpful? Yes ({props.reviewDetails[1].helpfulness}) | Report</p>

          <button>ADD A REVIEW</button>
      </div>
    }
  </div>

  <div class='container'>
    <p>Pratice grid</p>
    <div class='row'>
      <div class='col-sm'>
        <p>row 1 col 1 (number of reviews, sorted drop down menu)</p>
      </div>
    </div>

    <div class='row'>
      <div class='col-sm'>
        <p>row 2 col 1 (star rating)</p>
      </div>
      <div class='col-sm'></div>
      <div class='col-sm'>
        <p>row 2 col 3(username, date of review)</p>
      </div>
    </div>

    <div class='row'>
      <div class='col-sm'>
        <p>row 3 col 1 (review summary)</p>
      </div>
    </div>

    <div class='row'>
      <p>row 4 col 1 ()</p>
    </div>
  </div>

  </div>
  )
}

export default ReviewsList;