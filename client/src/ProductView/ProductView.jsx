import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import './ProductView.css';

import ProductDetailsColumn from './ProductDetailsColumn.jsx';
import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';

const ProductView = (props) => {
  const [currentStyle, setStyle] = useState(0);

  const updateStyle = (e, styleId) => {
    let styles = document.querySelectorAll('.style');
    document.querySelector('.variants').reset();

    setStyle(styleId);

    styles.forEach((style, index) => {
      style.classList.remove('active');
      if(e === null && index === 0) {
        style.classList.add('active')
      } else if (e) {
        e.currentTarget.classList.add('active');
      }
    });
  }

  const resetStyle = () => {
    updateStyle(null, 0);
  }

  useEffect(() => {
    resetStyle();
  }, [props.productData]);

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