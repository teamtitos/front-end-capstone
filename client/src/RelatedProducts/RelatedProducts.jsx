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
    // this.getRelatedProducts();
    this.getProductsData();
  }
  getRelatedProducts() {
    //ID FOR NOW
    // this.props.currentProductId
    let id = 1; 
    Axios.get(`http://18.224.37.110/products/${id}/related`)
    .then((res) => {
      this.setState({relatedProductsIds: res.data}, () => {
        //call getProductsData function
      })
    })
    .catch(() => { console.log('error in Related Ids'); })
  }

  getProductsData(list = [1, 2, 3, 4]) {
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