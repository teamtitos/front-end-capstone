import React, { Component } from 'react';
import CarouselProduct from './CarouselProduct.jsx';
import './RelatedProducts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselOutfit from './CarouselOutfit.jsx';
import Axios from 'axios';

class RelatedProducts extends Component {
  constructor() {
    super()
    this.state = {
      relatedProductsIds: [],
      relatedProductsData: [],
    }
  }
  componentDidMount() {
    // this.getRelatedProducts();
    this.getProductsData();
  }
  getRelatedProducts() {
    //ID FOR NOW...ONLY
    let id = 1; 
    Axios.get(`http://18.224.37.110/products/${id}/related`)
    .then((res) => {
      //Updates state with Id's of related Products
      this.setState({relatedProductsIds: res.data}, () => {
        //call getProductsData function
      })
    })
    .catch(() => { console.log('error in Related Ids'); })
  }

  getProductsData(list = [1, 2, 3, 4]) {
    //passes in the list of ids here
    let results = [];
    let totalPromises = list.length;
    let promisesResolved = 0;

    list.forEach((id, index) => {
      let prom = new Promise((res, rej) => {
        Axios.get(`http://18.224.37.110/products/${id}`)
        .then((result) => { res(result.data)} )
        .catch((err) => { rej(err)} )
      })
      prom.then((data) => {
        results.push(data);
        promisesResolved++;
        //Once all promises have returned lets set state!
        if (promisesResolved === totalPromises) {
          this.setState({ relatedProductsData: results});
        }
      })
      .catch((err) => { console.log('Error Getting Products', err)} )
    })
  }
  
  render() {
    return(
      <div className="relatedProducts">
      <CarouselProduct productList={this.state.relatedProductsData}/>
      <br></br>
      <CarouselOutfit />
      </div>
    )
  }
};


export default RelatedProducts;