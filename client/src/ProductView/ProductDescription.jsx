import React from 'react';

const ProductDescription = (props) => {
  return (
    <div>
      <h2>Description</h2>
      {!props.details
        ? <p>Loading</p>
        : <p>{props.details.description}</p>
      }
    </div>
  );
}

export default ProductDescription;