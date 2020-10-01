import React from 'react';
import Col from 'react-bootstrap/Col';

import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import Variants from './Variants.jsx';

const ProductDetailsColumn = (props) => {

  return (
    <Col md={4} className="details-col">
      <ProductInfo details={props.details} styleDetails={props.productStyle} />
      <StyleSelector
        styleDetails={props.productStyle}
        allStyles={props.allStyles}
        updateStyle={props.updateStyle}/>
      <Variants styleDetails={props.productStyle}/>
    </Col>
  );
}

export default ProductDetailsColumn;