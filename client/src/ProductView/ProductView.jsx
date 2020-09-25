import React from 'react';
import Row from 'react-bootstrap/Row';
import './ProductView.css';

import ProductDetailsColumn from './ProductDetailsColumn.jsx';
import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';

const ProductView = (props) => {

  return (
    <Row>
      <ProductImage />
      <ProductDetailsColumn details={props.productData} />
      <ProductDescription details={props.productData} />
    </Row>
  );
}

export default ProductView;