import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header.jsx';
import ProductView from './ProductView/ProductView.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import Reviews from './Reviews/Reviews.jsx';
import Container from 'react-bootstrap/Container';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productData: []
    };
  }

  componentDidMount() {
    axios.get('http://18.224.37.110/products')
      .then(result => {
        this.setState({ productData: result.data });
      })
      .catch(error => {
        console.error('There was an error with the GET request.')
      })
  }

  render() {
    return (
      <div>
        <Header />
        <Container className="App">
          <ProductView productData={this.state.productData} />
          <RelatedProducts />
          <Reviews />
        </Container>
      </div>
    );
  }
}

export default App;
