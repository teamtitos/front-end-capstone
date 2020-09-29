import React from 'react';
import Carousel from 'react-elastic-carousel';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <div className="main">
    <h6 className="title font-weight-light">RELATED PRODUCTS</h6>
    <Carousel 
    pagination={false} showArrows={true}
    style={{backgroundColor: 'white'}}
    >

    <div key={1} className="card" 
    style={{height: "300px", borderColor: "white"}}>
    <span className="spinner">
    <Spinner animation="border" role="status" variant="secondary">
    <span className="sr-only">Loading...</span>
    </Spinner>
    </span>
    </div>
    
    {/*divs required here by carousel module*/}
    <div key={2}></div>
    <div key={3}></div>
    </Carousel>
    </div>
  )
}

export default Loading;