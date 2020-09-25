import React from 'react';
import Row from 'react-bootstrap/Row';

import ProductDetailsColumn from './ProductDetailsColumn.jsx';
import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';

const ProductView = (props) => {

  return (
    <Row>
      <ProductImage />
      <ProductDetailsColumn details={props.productData[0]} />
      <ProductDescription details={props.productData[0]} />
    </Row>
  );
}

export default ProductView;