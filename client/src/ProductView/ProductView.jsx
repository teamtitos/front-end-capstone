import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import './ProductView.css';

import ProductDetailsColumn from './ProductDetailsColumn.jsx';
import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';

const ProductView = (props) => {
  const [currentStyle, setStyle] = useState(0);

  const updateStyle = (e, styleId) => {
    setStyle(styleId);
    let styles = document.querySelectorAll('.style');
    styles.forEach(style => {
      style.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
  }

  let productStyleResult =
    props.productStyles.results !== undefined
      ? props.productStyles.results[currentStyle]
      : '';

  return (
    <Row className="productViewRow">
      <ProductImage productStyle={productStyleResult} />
      <ProductDetailsColumn
        details={props.productData}
        productStyle={productStyleResult}
        allStyles={props.productStyles.results}
        updateStyle={updateStyle} />
      <ProductDescription details={props.productData} />
    </Row>
  );
}

export default ProductView;