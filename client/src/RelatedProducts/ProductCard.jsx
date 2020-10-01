import React from 'react';
import Stars from './Stars.jsx';

const ProductCard = ({product}) => {
  let image = <div className="placeholder">Loading...</div>;
  if (product.image) {
    //if image property lets update image
    let url = product.image.thumbnail_url;
    image =  (<img className="image" src={url}
    alt={product.name}/>);
  }

  // <OverlayTrigger trigger="click" placement="bottom" overlay={mypop} show={ver} transition={false} >
  // </OverlayTrigger>
  return (
    <div className="card" style={{alignItems: "center"}} >
    <span style={{all: "notset"}}>
    {image}

    {/*POP-OVER HERE*/}
    <span className="littlestar" onClick={() => {console.log('star clicked')}} 
    style={{position: "absolute", top: "8px",  right: "16px", fontSize: "19px"}}
    >&#x2606;</span>
    </span>
    {/* POP-OVER ENDS*/}
    
    <div className="text">
      <span className="category font-weight-light">{product.category}</span> <br/>
      <span className="font-weight-bold" 
      style={{fontSize: "15px"}}>{product.name}</span> <br/>
      <span className="price" >${product.default_price}</span> <br/>
      <Stars id={product.id}/> <br/>
    </div>

    </div>
  )
}

export default ProductCard;