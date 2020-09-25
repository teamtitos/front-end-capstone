import React from 'react';
import Col from 'react-bootstrap/Col';

import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import Variants from './Variants.jsx';
import AddToBag from './AddToBag.jsx';

const ProductDetailsColumn = (props) => {
  console.log(props)
  return (
    <Col sm={4}>
      <ProductInfo details={props.details}/>
      <StyleSelector />
      <Variants />
      <AddToBag />
    </Col>
  );
}

export default ProductDetailsColumn;