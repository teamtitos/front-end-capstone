import React from 'react';
import Stars from './Stars.jsx';
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger';
import Pop from './Pop.jsx';

const ProductCard = (props) => {
  let {product, currentProduct, total, index, changeProduct} = props;

  let sideToShowPopOver = 'bottom-start';
  //if last card, then pop over will show on left side
  if (index === total) {
    sideToShowPopOver = 'bottom-end';
  }
  //will not show image if its not there, same for ratings
  let image = (<div className="placeholder font-italic" 
  onClick={() => (changeProduct(product.id))}>Loading...</div>);
  let rating = 0;
  if (product.image) {
    if (product.image.thumbnail_url) {
      let url = product.image.thumbnail_url;
      image =  (<img id="RP" className="image" src={url}
      alt={product.name} onClick={() => (changeProduct(product.id))}/>);
    }
    if (product.rating) {
      rating = product.rating;
    }
  };
  let myPopOver = <Popover><Pop product={product} current={currentProduct}/></Popover>;

  return (
    <div className="card" style={{alignItems: "center"}} >
    <span style={{all: "notset"}}>
    {image}

    <OverlayTrigger
    trigger={["hover", "focus"]}
    placement={sideToShowPopOver}
    overlay={myPopOver}
    transition={false} 
    >
    <span className="littlestar"
    style={{position: "absolute", top: "8px",  right: "16px", fontSize: "19px"}}
    >&#x2606;</span> 
    </OverlayTrigger>

    </span>
    <div className="text">
    <span className="category font-weight-light">{product.category}</span><br/>
    <span className="font-weight-bold" 
    style={{fontSize: "15px"}}>{product.name}</span> <br/>
    <span className="price" >${product.default_price}</span> <br/>
    <Stars rating={rating}/> <br/>
    </div>
    </div>
    )
  }
  
  export default ProductCard;