import React from 'react';
import Carousel from 'react-elastic-carousel';
import AddOutfit from './AddOutfit.jsx';
import OutfitCard from './OutfitCard.jsx';

const CarouselOutfit = (props) => {
  const {outfitList, currentId, addOutfitProps, removeOutfit} = props;
  const breakPoints = [
    {width: 275, itemsToShow: 1, itemsToScroll: 1},
    {width: 420, itemsToShow: 2, itemsToScroll: 1},
    {width: 500, itemsToShow: 2.5, itemsToScroll: 1},
    {width: 770, itemsToShow: 3.6, itemsToScroll: 1},
    {width: 1000, itemsToShow: 4, itemsToScroll: 1},
  ]
  const handleClick = () => {
    if (outfitList.find(product => product.id === currentId)) {
    } else {
      addOutfitProps(currentId);
    }
  };
  //we determine what we will render in Outfit Carousel
  let outfits = null;
  let staple = <AddOutfit handleClick={handleClick}/>;
  console.log('outfit list', outfitList.length);
  if (outfitList.length === 0) {
    outfits = [ <AddOutfit key={1} handleClick={handleClick}/>]
  } else  {
    let addAndOutfits = [staple, ...outfitList];
    outfits = addAndOutfits.map((product, index) => {
      if (index === 0) {
        return <AddOutfit key={1000} handleClick={handleClick}/>;
      } else {
        return (<OutfitCard key={product.id} product={product}
        removeOutfit={removeOutfit}/>);
      }
    });
  }

  return (
    <div className="main">
    <h6 className="title font-weight-light">YOUR OUTFIT</h6>
    <Carousel breakPoints={breakPoints} 
    pagination={false} showArrows={true}
    style={{backgroundColor: 'white'}} 
    onChange={() => {console.log('slided')}}  
    >
    {/*Multiple Outfits showing*/}
    {outfits}
    </Carousel>
    </div>
  )
};


export default CarouselOutfit;