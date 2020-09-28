import React from 'react';

const ProductInfo = (props) => {

  return (
    <div>
      <p className="reviews">Stars --- <a href="/">Read all reviews</a></p>
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