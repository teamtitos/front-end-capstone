import React from 'react';

const ProductInfo = (props) => {

  return (
    <div className="productDetails">
      <div className="rating">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <a href="/"> Read all reviews</a>
    </div>

      { !props.details
        ? <p>Loading...</p>
        : <div>
            <p className="category">{ props.details.category }</p>
            <h2 className="title">{ props.details.name }</h2>
              { props.styleDetails && props.styleDetails.sale_price !== '0'
                  ? <p className="price">
                      <span className="strikethrough">${ props.styleDetails.original_price }</span>
                      <span className="sale"> ${ props.styleDetails.sale_price }</span>
                    </p>
                  : <p className="price">${ props.styleDetails.original_price }</p>
              }
          </div>
      }
    </div>
  );
}

export default ProductInfo;