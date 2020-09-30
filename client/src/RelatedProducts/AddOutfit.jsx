import React from 'react';

const AddOutfit = ({handleClick}) => {
  return (
    <div className="card" style={{alignItems: "center", lineHeight: "1"}} 
    onClick={handleClick}>
    <span className="plus" >+</span> 
    <p className="add font-weight-light">ADD TO OUTFIT</p>
    </div>
  )
}

export default AddOutfit;