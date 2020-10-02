import React from 'react';
import Stars from './Stars.jsx';

const ProductCard = ({product, removeOutfit}) => {
  let image = <div className="placeholder font-italic">Unavailable...</div>;
  let rating = 0;
  if (product.image) {
    if (product.image.thumbnail_url) {
      let url = product.image.thumbnail_url;
      image =  (<img className="image" src={url}
      alt={product.name}/>);
    }
    if (product.rating) {
      rating = product.rating;
    } 
  }

  return (
    <div className="card" style={{alignItems: "center"}} >
    <span style={{all: "notset"}}>
    {image}

    <span className="remove font-weight-light" onClick={()=> removeOutfit(product.id)}
    ><i className="fa fa-times"></i></span>
    </span>
    
    <div className="text">
      <span className="category font-weight-light">{product.category}</span> <br/>
      <span className="font-weight-bold"
      style={{fontSize: "15px"}}>{product.name}</span> <br/>
      <span className="price" >${product.default_price}</span> <br/>
      <Stars rating={rating}/> <br/>
    </div>

    </div>
   
  )
};

export default ProductCard;
