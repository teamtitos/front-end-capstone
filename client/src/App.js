import React from 'react';
import ProductView from './ProductView/ProductView.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import Reviews from './Reviews/Reviews.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <ProductView />
        <RelatedProducts />
        <Reviews />
      </div>
    );
  }
}

export default App;
