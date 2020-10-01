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
    }
    this.addOutfit = this.addOutfit.bind(this);
    this.removeOutfit = this.removeOutfit.bind(this);
  }
  componentDidMount() {
    this.getRelatedProducts();
  }
  getRelatedProducts() {
    // this.props.currentProductId
    let id = 5; 
    Axios.get(`http://18.224.37.110/products/${id}/related`)
    .then((res) => {
      this.setState({relatedProductsIds: res.data}, () => {
        let set = new Set();
        res.data.map((id) => set.add(id));
        let arr = Array.from(set);
        this.getProductsData(arr);
      })
    })
    .catch((error) => { console.log('Error in related Ids', error); })
  }

  getProductsData(list = null) {
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
        //Once all promises have returned lets set state!
        if (promisesResolved === totalPromises) {
          this.setState({ relatedProductsData: results}, () => {
            this.getProductsImage(list);
          });
        }
      })
      .catch((err) => { console.log('Error getting products', err)} )
    })
  }
  getProductsImage(idlist) {
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
          this.addImageProperty(results);
        }
      })
      .catch((err) => { console.log('error getting images', err)} )
    })
  }
  addImageProperty(images) {
    let list = this.state.relatedProductsData;
    list.forEach((product) => {
      let photo = images[product.id];
      product['image'] = photo;
    });
    this.setState({relatedProductsData: list})
  }

  //handles Carousel Outfit
  addOutfit() {
    this.props.handleChange('add');
  }
  removeOutfit(id = null) {
    this.props.handleChange('remove', id);
  }

  render() {
    let outfitList = this.props.outfitList
    // let currentId = this.props.currentProductId;
    let outfitIds = this.state.outfitIds;
    return(
      <div className="relatedProducts">
      <CarouselProduct productList={this.state.relatedProductsData}/>
      <br></br>
      <CarouselOutfit 
      outfitList={outfitList} 
      currentId={5}
      outfitIds={outfitIds}
      addOutfit={this.addOutfit}
      removeOutfit={this.removeOutfit}
      />
      </div>
    )
  }
};


export default RelatedProducts;