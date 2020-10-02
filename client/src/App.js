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
      reviewMetaData: {},
      currentProductId: 5,
      outfitList: [],
    };

    this.getProduct = this.getProduct.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getProductStyles = this.getProductStyles.bind(this);
    this.handleOutfitList = this.handleOutfitList.bind(this);
    this.getReviewMetadata = this.getReviewMetadata.bind(this);
    this.changeProductView = this.changeProductView.bind(this);
  }

  componentDidMount() {
   this.getAllProductData(this.state.currentProductId);
  }

  getAllProductData(id) {
    this.getProduct(id);
    this.getReviews(id);
    this.getProductStyles(id);
    this.getReviewMetadata(id); 
  }

  getProduct(id) {
    axios.get(`http://18.224.37.110/products/${id}`)
      .then(result => {
        this.setState({ productData: result.data }, () => {
          console.log('newProductData state:', this.state.productData)
        });
      })
      .catch(error => {
        console.error('There was an error with the GET request.')
      })

      this.getReviewData(1)
  }

  getReviewData(id) {
    axios.get(`http://18.224.37.110/reviews/?product_id=${id}`)
    .then(result => {
      this.setState({reviewData: result.data}, () => {
        console.log('newReviewData state:', this.state.reviewData)
      })
    })
    .catch(error => {
      console.log('error getting review data')
    })
  }

  getReviews(id) {
    axios.get(`http://18.224.37.110/reviews/?product_id=${id}`)
      .then(result => {
        this.setState({reviewData: result.data}, () => {
          console.log('new reviewData state:', this.state.reviewData)
        })
      })
      .catch(error => {
        console.error('error getting review data')
      })
  }

  getProductStyles(id) {
    axios.get(`http://18.224.37.110/products/${id}/styles`)
      .then(result => {
        this.setState({productStyles: result.data})
      })
      .catch(error => {
        console.error('error getting product styles')
      })
  }

  getReviewMetadata(id) {
    axios.get(`http://18.224.37.110/reviews/meta/?product_id=${id}`)
    .then(result => {
      this.setState({reviewMetaData: result.data}, () => {
        console.log('new reviewMetaData state:', result.data)
      })
    })
    .catch(error => {
      console.error('error from review metadata')
    })
  }



  handleOutfitList(action, id = null, obj = null) {
    if (action === 'add') {
      let product = this.state.productData;
      product['image'] = obj.image;
      product['rating'] = obj.rating;
      this.setState(prevState => ({
        outfitList: [product, ...prevState.outfitList]
      }))
    } else {
      let list = this.state.outfitList;
      Promise.resolve(
        list.filter(product => ( product.id !== id ))
      )
      .then((result) => {
        this.setState({outfitList: result});
      })
      .catch((error) => {console.log(error) });
    }
  }
  changeProductView(id) {
    this.setState({currentProductId: id}, () => {
      this.getAllProductData(id);
    });
  }

  render() {
    let id = this.state.currentProductId;
    return (
      <div>
        <Header />
        <Container className="App">
          <ProductView productData={this.state.productData} productStyles={this.state.productStyles} />
          <RelatedProducts id={id} outfitList={this.state.outfitList} 
          handleChange={this.handleOutfitList} changeProductView={this.changeProductView}/>
          <Reviews
          reviewData={this.state.reviewData}
          reviewMetaData={this.state.reviewMetaData}
          />
        </Container>
      </div>
    );
  }
}

export default App;
