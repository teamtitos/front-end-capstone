import React from 'react';
import Stars from './Stars.jsx';

const ProductCard = ({product}) => {

  // <OverlayTrigger trigger="click" placement="bottom" overlay={mypop} show={ver} transition={false} >
  // </OverlayTrigger>
  return (
    <div className="card" style={{alignItems: "center"}} >
    <span style={{all: "notset"}}>
    <img className="image" src="https://demo.sirv.com/bag.jpg?scale.width=252&scale.height=265" alt={product.name}/>

    {/*POP-OVER HERE*/}
    <span className="littlestar" onClick={() => {console.log('star clicked')}} style={{position: "absolute", top: "8px",  right: "16px", fontSize: "19px"}} >&#x2606;</span>
    </span>
    {/* POP-OVER ENDS*/}
    
    <div className="text">
      <span className="category font-weight-light">{product.category}</span> <br/>
      <span className="font-weight-bold" style={{fontSize: "15px"}}>{product.name}</span> <br/>
      <span className="price" >${product.default_price}</span> <br/>
      <Stars id={product.id}/> <br/>
    </div>

    </div>
  )
}

export default ProductCard;