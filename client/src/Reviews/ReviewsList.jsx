import React from 'react';

const ReviewsList = (props) => {
  // console.log('props from Reviews:', props)

  return (
  <div>
    <div class='container'>
      { !props.reviewDetails
        ? <p>Loading</p>
        : <div>
            <h3>ReviewsList Component:</h3>

            <div class='row'>
              <div class='col-sm'>
                <p>{props.reviewInfo.count} sorted by drop down menu</p>
              </div>
            </div>

            <div class='row'>
              <div class='col-sm'>
              <p>star rating</p>
              </div>
              <div class='col-sm'></div>
              <div class='col-sm'>
                <p> {props.reviewDetails[0].reviewer_name} {props.reviewDetails[0].date}</p>
              </div>
            </div>

            <div class='row'>
              <div class='col-sm'>
                <p><strong>{props.reviewDetails[0].summary}</strong></p>
              </div>
            </div>

            <div class='row'>
              <div class='col-sm'>
                <p>{props.reviewDetails[0].body}</p>
              </div>
            </div>

            <div class='row'>
              <div class='col-sm'>
                <p>Helpful? Yes ({props.reviewDetails[0].helpfulness}) | Report</p>
              </div>
            </div>

        <div class='row'>
          <div class='col-sm'>
            <p>star rating</p>
          </div>
          <div class='col-sm'></div>
          <div class='col-sm'>
            <p>{props.reviewDetails[1].reviewer_name} {props.reviewDetails[1].date}</p>
          </div>
        </div>

        <div class='row'>
          <div class='col-sm'>
            <p><strong>{props.reviewDetails[1].summary}</strong></p>
          </div>
        </div>

        <div class='row'>
          <div class='col-sm'>
            <p>{props.reviewDetails[1].body}</p>
          </div>
        </div>

        <div class='row'>
          <div class='col-sm'>
            <p>Helpful? Yes ({props.reviewDetails[1].helpfulness}) | Report</p>
          </div>
        </div>
        </div>
      }
    </div>
    <button>ADD A REVIEW</button>
  </div>
  )
}



export default ReviewsList;