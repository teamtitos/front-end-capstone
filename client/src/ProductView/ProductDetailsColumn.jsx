import React from 'react';
import Col from 'react-bootstrap/Col';

import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import Variants from './Variants.jsx';
import AddToBag from './AddToBag.jsx';

const ProductDetailsColumn = (props) => {
  return (
    <Col sm={4} className="details-col">
      <ProductInfo details={props.details} styleDetails={props.productStyle}/>
      <StyleSelector />
      <Variants />
      <AddToBag />
    </Col>
  );
}

export default ProductDetailsColumn;