import React, {useState} from 'react';
import Carousel from 'react-elastic-carousel';
import ProductCard from './ProductCard.jsx';
import Loading from './Loading.jsx';

const CarouselProduct = ({productList, currentProduct}) => {
  const [noPop, changeNoPop] = useState(true);
  const [init, changeInit] = useState(null);
  if (productList.length === 0) {
    return <Loading key={1} />
  }

  const changePop = (index) => {
    changeNoPop(!noPop);
    changeInit(index);
  };
  
  let total = productList.length;
  const multipleProductCards = productList.map((product, index) => {
    return (
      <ProductCard key={index} product={product} total={total} index={index+1}
      currentProduct={currentProduct} noPop={noPop} changePop={changePop}
      init={init}/>
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
    <h6 className="title font-weight-lighter">RELATED PRODUCTS</h6>
    <Carousel 
    breakPoints={breakPoints}
    pagination={false} showArrows={true}
    style={{backgroundColor: 'white'}}
    onChange={() => (console.log('slided'))} 
    >

    {/*A list of multiple Product Cards*/}
    {multipleProductCards}

    </Carousel>
    </div>
  )
};

export default CarouselProduct;