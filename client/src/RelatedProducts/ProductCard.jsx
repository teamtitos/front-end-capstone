import React, { useState } from 'react';
import Stars from './Stars.jsx';
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger';
import Pop from './Pop.jsx';

const ProductCard = ({product, popOver}) => {
  const [showing, setShow] = useState(false);

  let image = <div className="placeholder">Loading...</div>;
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
  };
  const showPop = () => {
    setShow(!showing);
  }

  const table = (<Popover><Pop props={'name'}/></Popover>);
  return (
    <div className="card" style={{alignItems: "center"}} >
    <span style={{all: "notset"}}>
    {image}
    
    <span className="littlestar" onClick={showPop}
    style={{position: "absolute", top: "8px",  right: "16px", fontSize: "19px"}}
    >&#x2606;</span>
    </span>

    
    <div className="text">
    <span className="category font-weight-light">{product.category}</span>  <br/>

    <OverlayTrigger trigger="click" 
    placement="right" 
    overlay={table} 
    show={showing} 
    transition={false} >
    <span style={{position: "absolute", top: "150px", right: "0px"}}></span>
    </OverlayTrigger>

    <span className="font-weight-bold" 
    style={{fontSize: "15px"}}>{product.name}</span> <br/>
    <span className="price" >${product.default_price}</span> <br/>
    <Stars rating={rating}/> <br/>
    </div>
    
    </div>
    )
  }
  
  export default ProductCard;