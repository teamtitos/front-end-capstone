import React, { Component } from 'react';
// import CarouselOutfit from './CarouselOutfit.jsx';
import CarouselProduct from './CarouselProduct.jsx';
import './RelatedProducts.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class RelatedProducts extends Component {
  constructor() {
    super()
    this.state = {}
  }
  
  render() {
    return (
      <div>
      <CarouselProduct />
      </div>
    )
  }
}


export default RelatedProducts;