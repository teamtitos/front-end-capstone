import React from 'react';

const ProductInfo = (props) => {

  return (
    <div>
      <div className="rating">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <a href="/"> Read all reviews</a>
    </div>

      { !props.details
        ? <p>Loading</p>
        : <div>
            <p className="category">{ props.details.category }</p>
            <h2 className="title">{ props.details.name }</h2>
            <p className="price">${ props.details.default_price }</p>
          </div>
      }
    </div>
  );
}

export default ProductInfo;