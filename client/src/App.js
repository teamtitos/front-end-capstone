import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header.jsx';
import ProductView from './ProductView/ProductView.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import Reviews from './Reviews/Reviews.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CharacteristicsRating from './Reviews/CharacteristicsRating.jsx';
import AverageRating from './Reviews/AverageRating.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productData: {},
      productStyles: {},
      reviewData: {},
      reviewMetaData: {},
      currentProductId: 3,
      outfitList: [],
    };

    this.getProduct = this.getProduct.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getProductStyles = this.getProductStyles.bind(this);
    this.handleOutfitList = this.handleOutfitList.bind(this);
    this.getReviewMetadata = this.getReviewMetadata.bind(this);
    this.changeProductView = this.changeProductView.bind(this);
    this.showReviews = this.showReviews.bind(this)

    // this.getAllReviews = this.getAllReviews.bind(this);
  }

  componentDidMount() {
   this.getAllProductData(this.state.currentProductId);
  }

  getAllProductData(id) {
    this.getProduct(id);
    this.getReviews(id, 2);
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
  }

  getReviews(id, count) {
    axios.get(`http://18.224.37.110/reviews/?product_id=${id}&count=${count}`)
      .then(result => {
        this.setState({reviewData: result.data})
      })
      .catch(error => {
        console.error('error getting review data')
      })
  }

  getAllReviews(id) {
    axios.get(`http://18.224.37.110/reviews/?product_id=${id}`)
      .then(result => {
        this.setState({reviewData: result.data})
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
      this.setState({reviewMetaData: result.data})
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

  showReviews(event) {
    event.preventDefault();
    this.getAllReviews(this.state.currentProductId)
  }


  render() {
    let id = this.state.currentProductId;
    return (
      <React.Fragment>
        <Header />
        <Container className="App">
          <ProductView
            productData={this.state.productData}
            productStyles={this.state.productStyles} />
          <RelatedProducts id={id} outfitList={this.state.outfitList}
          handleChange={this.handleOutfitList} changeProductView={this.changeProductView}/>
          <Row className="reviews">
            <Col sm={4}>
              <AverageRating rating={this.state.reviewMetaData}/>
              <CharacteristicsRating meta={this.state.reviewMetaData}/>
            </Col>
            <Col sm={8}>
              <Reviews
              reviewData={this.state.reviewData}
              totalReviews={this.state.reviewData.results}
              reviewMetaData={this.state.reviewMetaData}
              productName={this.state.productData.name}
              showReviews={this.showReviews}
              />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
