import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import Variants from './Variants.jsx';
import AddToBag from './AddToBag.jsx';

// container for all right-side components
const ProductDetailsColumn = () => {
  return (
    <div>
      <ProductInfo />
      <StyleSelector />
      <Variants />
      <AddToBag />
    </div>
  );
}

export default ProductDetailsColumn;