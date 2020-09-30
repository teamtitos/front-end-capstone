import React from 'react';
import Carousel from 'react-elastic-carousel';
import ProductCard from './ProductCard.jsx';
import Loading from './Loading.jsx';

const CarouselProduct = ({productList}) => {
  // If no productList passed in then return a Carousel with a spinner
  if (productList.length === 0) {
    return <Loading />
  }

  const multipleProductCards = productList.map((product) => {
    return (
      <ProductCard key={product.id} product={product} />
    );
  });

  const breakPoints = [
    {width: 275, itemsToShow: 1, itemsToScroll: 1},
    {width: 420, itemsToShow: 2, itemsToScroll: 1},
    {width: 500, itemsToShow: 2.5, itemsToScroll: 1},
    {width: 770, itemsToShow: 3.6, itemsToScroll: 1},
    {width: 1000, itemsToShow: 4, itemsToScroll: 1},
  ]

  return(
    <div className="main">
    <h6 className="title font-weight-light">RELATED PRODUCTS</h6>
    <Carousel 
    breakPoints={breakPoints}
    pagination={false} showArrows={true}
    style={{backgroundColor: 'white'}}
    onChange={() => {console.log('slided')}} 
    >

    {/*A list of multile Product Cards*/}
    {multipleProductCards}

    </Carousel>
    </div>
  )
};

export default CarouselProduct;