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
      productData: {},
      productStyles: {},
      reviewData: {},
      currentProductId: 1
    };

    this.getProduct = this.getProduct.bind(this);
    this.getReviewData = this.getReviewData.bind(this);
    this.getProductStyles = this.getProductStyles.bind(this);
  }

  componentDidMount() {
    this.getProduct(this.state.currentProductId);
    this.getReviewData(this.state.currentProductId);
    this.getProductStyles(this.state.currentProductId);
  }

  getProduct(id) {
    axios.get(`http://18.224.37.110/products/${id}`)
      .then(result => {
        this.setState({ productData: result.data });
      })
      .catch(error => {
        console.error('There was an error with the GET request.')
      })
  }

  getReviewData(id) {
    axios.get(`http://18.224.37.110/reviews/?product_id=${id}`)
      .then(result => {
        this.setState({reviewData: result.data}, () => {
          console.log('new reviewData state:', this.state.reviewData)
        })
      })
      .catch(error => {
        console.log('error getting review data')
      })
  }

  getProductStyles(id) {
    axios.get(`http://18.224.37.110/products/${id}/styles`)
      .then(result => {
        this.setState({productStyles: result.data}, () => {
          console.log('productStyles:', this.state.productStyles)
        })
      })
      .catch(error => {
        console.log('error getting product styles')
      })
  }

  render() {
    return (
      <div>
        <Header />
        <Container className="App">
          <ProductView productData={this.state.productData} productStyles={this.state.productStyles} />
          <RelatedProducts />
          <Reviews />
        </Container>
      </div>
    );
  }
}

export default App;
