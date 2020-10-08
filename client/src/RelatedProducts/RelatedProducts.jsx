import React, { Component } from 'react';
import CarouselProduct from './CarouselProduct.jsx';
import './RelatedProducts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselOutfit from './CarouselOutfit.jsx';
import Axios from 'axios';

class RelatedProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      relatedProductsIds: [],
      relatedProductsData: [],
      currentId: null,
      currentProductData: {},
    }
    this.removeOutfit = this.removeOutfit.bind(this);
    this.addOutfitProps = this.addOutfitProps.bind(this);
    this.changeProductView = this.changeProductView.bind(this);
  }
  componentDidMount() {
    let id = this.props.id;
    this.getRelatedProducts(id);
    this.setState({currentId: id});
  }
  getRelatedProducts(id) {
    Axios.get(`http://18.224.37.110/products/${id}/related`)
    .then((res) => {
      this.setState({relatedProductsIds: res.data}, () => {
        let set = new Set();
        res.data.map((productid) => set.add(productid));
        let arr = Array.from(set);
        let filter = arr.filter((prodid) => prodid !== 2 &&
        prodid !== id && prodid !== 10);
        this.getProductsData(filter);
      })
    })
    .catch((error) => { console.log('Error in related Ids', error); })
  }

  getProductsData(list) {
    let results = [];
    let totalPromises = list.length;
    let promisesResolved = 0;
    list.forEach((id, index) => {
      let prom = new Promise((resolve, rej) => {
        Axios.get(`http://18.224.37.110/products/${id}`)
        .then((result) => { resolve(result.data)} )
        .catch((err) => { rej(err)} )
      })
      prom.then((data) => {
        results.push(data);
        promisesResolved++;
        if (promisesResolved === totalPromises) {
          this.getProductsImage(list, results);
        }
      })
      .catch((err) => { console.log('Error getting products', err)} )
    })
  }
  getProductsImage(idlist, productsData) {
    let results = {};
    let totalPromises = idlist.length;
    let promisesResolved = 0;
    idlist.forEach((id, index) => {
      let prom = new Promise((resolve, rej) => {
        Axios.get(`http://18.224.37.110/products/${id}/styles`)
        .then((result) => { resolve(result.data)} )
        .catch((err) => { rej(err)} )
      })
      prom.then((data) => {
        let id = data.product_id;
        results[id] = data['results'][0]['photos'][0];
        promisesResolved++;
        if (promisesResolved === totalPromises) {
          this.addImageProperty(results, idlist, productsData);
        }
      })
      .catch((err) => { console.log('error getting images', err)} )
    })
  }
  addImageProperty(images, idlist = null, productsData) {
    let list = productsData;
    list.forEach((product) => {
      let photo = images[product.id];
      product['image'] = photo;
    });
    this.getReviewsRating(idlist, productsData);
  }
  getReviewsRating(idlist, productsData) {
    let results = {};
    let totalPromises = idlist.length;
    let promisesResolved = 0;
    idlist.forEach((id, index) => {
      let prom = new Promise((resolve, rej) => {
        Axios.get(`http://18.224.37.110/reviews/?product_id=${id}`)
        .then((result) => { resolve(result.data)} )
        .catch((err) => { rej(err)} )
      })
      prom.then((data) => {
        let id = data.product;
        let rating = this.getRating(data);
        results[id] = rating;
        promisesResolved++;
        if (promisesResolved === totalPromises) {
          this.addRatingsProperty(results, productsData);
        }
      })
      .catch((err) => { console.log('error getting reviews', err)} )
    })
  }
  addRatingsProperty(ratings, productsData) {
    let list = productsData;
    list.forEach((product) => {
      let rating = ratings[product.id];
      product['rating'] = rating;
    });
    this.setState({relatedProductsData: list}, () => {
      this.getCurrentProduct();
    })
  }

  addOutfitProps(id) {
    let promOne = new Promise((resolve, rej) => {
      Axios.get(`http://18.224.37.110/products/${id}/styles`)
      .then((result) => {
        let obj = {'image' : result.data['results'][0]['photos'][0]}
        resolve(obj)
      })
      .catch((err) => { rej(err)} )
    })
    let promTwo = new Promise((resolve, reject) => {
      Axios.get(`http://18.224.37.110/reviews/?product_id=${id}`)
      .then((result)=> {
        let rating = this.getRating(result.data)
        let obj = {'rating': rating};
        resolve(obj);
      })
      .catch((error) => { console.log(error)} )
    });
    Promise.all([promOne, promTwo])
    .then((results) => {
      this.addOutfit(results);
    })
    .catch((error) => { console.log(error)} )
  }
  getRating(data) {
    let ratings = data.results.length;
    let total = 0;
    data.results.map(review => total+=review.rating);
    let rating = (total / ratings) * 20;
    return rating;
  };
  getCurrentProduct() {
    Axios.get(`http://18.224.37.110/products/${this.state.currentId}`)
    .then((res) => { this.setState({currentProductData: res.data})} )
    .catch((error) => { console.log(error)} )
  }

  //handles Carousel Outfit
  addOutfit(results) {
    let obj = {'image': results[0].image, 'rating': results[1].rating};
    this.props.handleChange('add', null, obj);
  }
  removeOutfit(id = null) {
    this.props.handleChange('remove', id);
  }
  //changesProductView
  changeProductView(id) {
    this.props.changeProductView(id);
    this.getRelatedProducts(id);
    this.setState({currentId: id});
  }

  render() {
    let outfitList = this.props.outfitList
    let {outfitIds, currentId, currentProductData} = this.state;
    return(
      <div className="relatedProducts">
      <CarouselProduct
      productList={this.state.relatedProductsData}
      currentProduct={currentProductData}
      changeProduct={this.changeProductView}
      />
      <br></br>
      <CarouselOutfit
      outfitList={outfitList}
      currentId={currentId}
      outfitIds={outfitIds}
      addOutfitProps={this.addOutfitProps}
      removeOutfit={this.removeOutfit}
      />
      </div>
    )
  }
};


export default RelatedProducts;