import React from 'react';
import Stars from './Stars.jsx';

const ProductCard = () => {
  let product = {
    name: 'emm',
    category: 'shoes',
    default_price: 1000,
    id: 27,
  }


  // add to Outfit
  return (
    <div className="card" style={{alignItems: "center"}} >
    <span style={{all: "notset"}}>
    <img className="image" src="https://demo.sirv.com/bag.jpg?scale.width=252&scale.height=265" 
    alt={product.name}/>

    <span className="remove font-weight-bold" onClick={() => {console.log('X clicked')}}
    >x</span>
    </span>
    
    <div className="text">
      <span className="category font-weight-light">{product.category}</span> <br/>
      <span className="font-weight-bold"
      style={{fontSize: "15px"}}>{product.name}</span> <br/>
      <span className="price" >${product.default_price}</span> <br/>
      <Stars id={product.id}/> <br/>
    </div>

    </div>
   
  )
};

export default ProductCard;