import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import './ProductView.css';

import ProductDetailsColumn from './ProductDetailsColumn.jsx';
import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';

const ProductView = (props) => {
  const [currentStyle] = useState(1);

  let productStyleResult =
    props.productStyles.results !== undefined
      ? props.productStyles.results[currentStyle]
      : '';

  return (
    <Row>
      <ProductImage productStyle={productStyleResult} />
      <ProductDetailsColumn
        details={props.productData}
        productStyle={productStyleResult} />
      <ProductDescription details={props.productData} />
    </Row>
  );
}

export default ProductView;