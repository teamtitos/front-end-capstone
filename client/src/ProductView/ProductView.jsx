import React from 'react';
import ProductDetailsColumn from './ProductDetailsColumn.jsx';
import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';


const ProductView = () => {
  return (
    <div>
      <ProductImage />
      <ProductDetailsColumn />
      <ProductDescription />
    </div>
  );
}

export default ProductView;