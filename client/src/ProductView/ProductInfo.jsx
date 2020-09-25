import React from 'react';
// import {useState, useEffect} from 'react';

// reviews, title, category and price
const ProductInfo = (props) => {
  // const [details] = useState(props.details);

  // useEffect(() => {
  //   console.log(details)
  // });

  // console.log(props);
  return (
    <div>
      <p>Stars, read all reviews</p>
      <p></p>
      <p>{ props.details.category === undefined ? 'Loading' : props.details.category }</p>
      {/* <p>{props.details.name}</p>
      <p>{props.details.default_price}</p> */}
    </div>
  );
}

export default ProductInfo;