import React from 'react';

const ReviewsList = (props) => {
  console.log('props from Reviews:', props)
  // map over the reviews prop

  // {!props.details
  //   ? <p>Loading</p>
  //   : <div>
  //       <h4>{props.details.slogan}</h4>
  //       <p>{props.details.description}</p>
  //     </div>
  // }

  return (
  <div>

  {!props.reviewDetails
    ? <p>Loading</p>
    : <div>
        <p>{props.reviewDetails[0].body}</p>
      </div>
  }

    <h3>ReviewsList Component:</h3>
    <p>number of reviews sorted by drop down menu</p>
    <p>star rating username date of review</p>

    <p>review title 1</p>
    <p>review body</p>
    <p>recommend</p>
    <p>response</p>
    <p>helpfulness</p>

    <p>number of reviews sorted by drop down menu</p>
    <p>star rating username date of review</p>
    <p>review title 2</p>
    <p>review body</p>
    <p>recommend</p>
    <p>response</p>
    <p>helpfulness</p>

    <button>MORE REVIEWS </button> <button>ADD A REVIEW +</button>
  </div>
  )
}


export default ReviewsList;