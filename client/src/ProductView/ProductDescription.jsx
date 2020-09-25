import React from 'react';

const ProductDescription = (props) => {
  return (
    <div>
      {!props.details
        ? <p>Loading</p>
        : <div>
            <h4>{props.details.slogan}</h4>
            <p>{props.details.description}</p>
          </div>
      }
    </div>
  );
}

export default ProductDescription;