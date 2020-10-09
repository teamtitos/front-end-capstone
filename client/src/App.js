import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header.jsx';
import ProductView from './ProductView/ProductView.jsx';
import RelatedProducts from './RelatedProducts/RelatedProducts.jsx';
import ReviewsContainer from './Reviews/ReviewsContainer.jsx';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allReviews: [],
      productData: {},
      productStyles: {},
      reviewAverage: 0,
      currentProductId: 5,
      outfitList: [],
    };

    this.changeProductView = this.changeProductView.bind(this);
    this.handleOutfitList = this.handleOutfitList.bind(this);

    this.putHelpful = this.putHelpful.bind(this);
    this.putReport = this.putReport.bind(this);
  }

  componentDidMount() {
   this.getAllProductData(this.state.currentProductId);
  }

  getAllProductData(id) {
    this.getProduct(id);
    this.getProductStyles(id);
    this.getAllReviews(id);
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

  getAllReviews(id) {
    axios.get(`http://18.224.37.110/reviews/?product_id=${id}`)
      .then(result => {
        this.setState({ allReviews: result.data.results });
        let average = 0;
        result.data.results.forEach(review => {
          average += review.rating;
        });
        average = average / result.data.results.length;
        this.setState({reviewAverage: average});
      })

      .catch(error => {
        console.error('error getting review data')
      })
  }

  putHelpful(id, count) {
    axios.put(`http://18.224.37.110/reviews/${id}/helpful`)
    .then (result => {
      axios.get(`http://18.224.37.110/reviews/?product_id=${this.state.currentProductId}&count=${this.state.allReviews.length}`)
      .then(data => {
        this.setState({allReviews: data.data.results})
      })
    })
    .catch(error => {
      console.error('error adding helpfulness')
    })
  }

  putReport(id, count) {
    axios.put(`http://18.224.37.110/reviews/${id}/report`)
    .then (result => {
      axios.get(`http://18.224.37.110/reviews/?product_id=${this.state.currentProductId}&count=${this.state.allReviews.length -1}`)
      .then(data => {
        this.setState({allReviews: data.data.results})
      })
    })
    .catch(error => {
      console.error('error with report')
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

  handleOutfitList(action, id = null, objImage = null) {
    if (action === 'add') {
      let product = this.state.productData;
      product['image'] = objImage.image;
      product['rating'] = this.state.reviewAverage;
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
    return (
      <React.Fragment>
        <Header />
        <Container className="App">
          <ProductView
            productData={this.state.productData}
            productStyles={this.state.productStyles}
            reviewAverage={this.state.reviewAverage}
            reviewsCount={this.state.allReviews.length}/>
          <RelatedProducts
            id={this.state.currentProductId}
            outfitList={this.state.outfitList}
            handleChange={this.handleOutfitList}
            changeProductView={this.changeProductView}/>
          <ReviewsContainer
            currentProductId={this.state.currentProductId}
            metaData={this.state.reviewMetaData}
            allReviews={this.state.allReviews}
            reviewsLength={this.state.allReviews.length}
            productName={this.state.productData.name}
            productData={this.state.productData}
            reviewAverage={this.state.reviewAverage}
            helpfulness={this.putHelpful}
            report={this.putReport}
            />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
