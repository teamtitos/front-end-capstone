import React from 'react';
import Stars from './Stars.jsx';

const ProductCard = () => {

  // Overlay implementation
  // <OverlayTrigger trigger="click" placement="bottom" overlay={mypop} show={ver} transition={false} >
  // </OverlayTrigger>
  return (
    <div className="card" style={{alignItems: "center"}} >
    {/*POP-OVER HERE*/}
    <span style={{all: "notset"}}>
    <img className="image" src="https://demo.sirv.com/bag.jpg?scale.width=252&scale.height=265" alt="Product id etc" onClick={() => {console.log('image clicked')}}/>
    <span className="littlestar" onClick={() => {console.log('star clicked')}} style={{position: "absolute", top: "8px",  right: "16px", fontSize: "19px"}} >&#x2606;</span>
    </span>
    {/* POP-OVER ENDS*/}
  
    <div className="text">
      <span className="category font-weight-light">CATEGORY</span> <br/>
      <span className="font-weight-bold" style={{fontSize: "15px"}}>Product Name That Is Too Long To Fit Somehow</span> <br/>
      <span className="price" >$100</span> <br/>
      <Stars /> <br/>
    </div>

    </div>
  )
}

export default ProductCard;