import React from 'react';
import Carousel from 'react-elastic-carousel';
import ProductCard from './ProductCard.jsx';
import Loading from './Loading.jsx';

const CarouselProduct = ({productList, currentProduct, changeProduct}) => {
  if (productList.length === 0) {
    return <Loading key={1} />
  }
  
  let total = productList.length;
  const multipleProductCards = productList.map((product, index) => {
    return (
      <ProductCard key={index} product={product} total={total} index={index+1}
      currentProduct={currentProduct} changeProduct={changeProduct}/>
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
    >

    {/*A list of multiple Product Cards*/}
    {multipleProductCards}

    </Carousel>
    </div>
  )
};

export default CarouselProduct;