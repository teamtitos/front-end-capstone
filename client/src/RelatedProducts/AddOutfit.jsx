import React, { useState } from 'react';

const AddOutfit = ({handleClick}) => {
  const [canClick, setClick] = useState(true);

  //prevents addOutfit to be clicked more than once, rapidly 
  const clicked = () => {
    if (canClick) {
      handleClick();
    } else {
      console.log('loading...');
    }
  }

  const dontAllowClick = () => {
    setClick(false);
    if (canClick === false) {
      setTimeout(() => {
        setClick(true);
      }, 1000)
    }
  }

  return (
    <div className="card" id="addOutfitCard" style={{alignItems: "center", lineHeight: "1"}} 
    onClick={() => {clicked(); dontAllowClick()}}>
    <i className="plus fa fa-plus" style={{fontSize: "40px"}}></i>
    <p className="add font-weight-light">Add to Outfit</p>
    </div>
  )
}

export default AddOutfit;