import React from 'react';

const ProductInfo = (props) => {

  return (
    <div>
      <p>Stars, read all reviews</p>
      { !props.details
        ? <p>Loading</p>
        : <div>
            <p>{ props.details.category }</p>
            <p>{ props.details.name }</p>
            <p>{ props.details.default_price }</p>
          </div>
      }
    </div>
  );
}

export default ProductInfo;