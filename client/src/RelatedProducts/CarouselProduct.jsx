import React from 'react';
import Carousel from 'react-elastic-carousel';
import ProductCard from './ProductCard.jsx';

const CarouselProduct = () => {
  const breakPoints = [
    {width: 275, itemsToShow: 1, itemsToScroll: 1},
    {width: 420, itemsToShow: 2, itemsToScroll: 1},
    {width: 500, itemsToShow: 2.5, itemsToScroll: 2},
    {width: 770, itemsToShow: 3.6, itemsToScroll: 2},
    {width: 1000, itemsToShow: 4, itemsToScroll: 2},
  ]

  return(
    <div className="main">
    <h6 className="title font-weight-light">RELATED PRODUCTS</h6>
    <Carousel breakPoints={breakPoints} pagination={false} showArrows={true}
    style={{backgroundColor: 'white'}} onChange={() => {console.log('slided')}} 
    >

    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />   
    <ProductCard />

    </Carousel>
    <h6 className="title font-weight-light">YOUR OUTFIT</h6>
    </div>
  )
};

export default CarouselProduct;