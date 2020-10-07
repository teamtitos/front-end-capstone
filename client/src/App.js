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
      formRating: 0,
      formSummary: '',
      formBody: '',
      formRecommend: false,
      formName: '',
      formEmail: '',
      formPhotos: ['1'],
      formCharacteristics: {},
      count: 2
    };

    this.getProduct = this.getProduct.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getProductStyles = this.getProductStyles.bind(this);
    this.handleOutfitList = this.handleOutfitList.bind(this);
    this.getReviewMetadata = this.getReviewMetadata.bind(this);
    this.changeProductView = this.changeProductView.bind(this);
    this.showReviews = this.showReviews.bind(this);

    this.addReview = this.addReview.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleRecommendChange = this.handleRecommendChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCharacteristicsChange = this.handleCharacteristicsChange.bind(this);
    this.submitReview = this.submitReview.bind(this);
  }

  componentDidMount() {
   this.getAllProductData(this.state.currentProductId);
  }

  getAllProductData(id) {
    this.getProduct(id);
    this.getReviews(id, this.state.count);
    this.getProductStyles(id);
    this.getReviewMetadata(id);
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

  getReviews(id, count) {
    axios.get(`http://18.224.37.110/reviews/?product_id=${id}&count=${this.state.count}`)
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
      this.setState({reviewMetaData: result.data}, () => {
        console.log('new review metaData:', this.state.reviewMetaData)
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

  showReviews(event) {
    event.preventDefault();
    this.setState({count: this.state.reviewData.results.length})
    return this.getAllReviews(this.state.currentProductId)
  }

  handleRatingChange(event) {
    this.setState({formRating: event.target.labels})
  }

  handleSummaryChange(event) {
    this.setState({formSummary: event.target.value})
  }

  handleBodyChange(event) {
    this.setState({formBody: event.target.value})
  }

  handleRecommendChange(event) {
    this.setState({formRecommend: event.target.value})
  }

  handleNameChange(event) {
    this.setState({formName: event.target.value})
  }

  handleEmailChange(event) {
    this.setState({formEmail: event.target.value})
  }

  handleCharacteristicsChange(event) {
    this.setState({formCharacteristics: event.target.value})
  }

  handlePhotoChange(event) {
    this.setState({formCharacteristics: event.target.value})
  }

  submitReview(event) {
    event.preventDefault();
    this.addReview();
  }

  addReview() {
    axios.post("http://18.224.37.110/reviews", {
    product_id: this.state.currentProductId,
    rating: 3,
    summary: this.state.formSummary,
    body: this.state.formBody,
    recommend: this.state.formRecommend,
    name: this.state.formName,
    email: this.state.formEmail,
    photos: this.state.formPhotos,
    characteristics: {"1": 2}
    })
    .then(result => {
      console.log('result from post:', result)
      // this.getAllReviews(this.state.currentProductId)
    })
    .catch(error => {
      console.error('could not post new review')
    })
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
          <Row className="reviews" id="reviews">
            <Col sm={4}>
              <AverageRating rating={this.state.reviewMetaData} meta={this.state.reviewMetaData}/>
              <CharacteristicsRating meta={this.state.reviewMetaData}/>
            </Col>
            <Col sm={8}>
              <Reviews
              reviewData={this.state.reviewData}
              totalReviews={this.state.reviewData.results}
              reviewMetaData={this.state.reviewMetaData}
              productName={this.state.productData.name}
              showReviews={this.showReviews}
              productData={this.state.productData}

              valueRating={this.state.formRating}
              valueSummary={this.state.formSummary}
              valueBody={this.state.formBody}
              valueRecommend={this.state.formRecommend}
              valueName={this.state.formName}
              valueEmail={this.state.formEmail}
              valuePhoto={this.state.formPhotos}
              valueCharacteristics={this.state.formCharacteristics}

              changeRating={this.handleRatingChange}
              changeSummary={this.handleSummaryChange}
              changeBody={this.handleBodyChange}
              changeRecommend={this.handleRecommendChange}
              changeName={this.handleNameChange}
              changeEmail={this.handleEmailChange}
              changePhoto={this.handlePhotoChange}
              changeCharacteristics={this.handleCharacteristicsChange}
              submitReview={this.submitReview}
              />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
