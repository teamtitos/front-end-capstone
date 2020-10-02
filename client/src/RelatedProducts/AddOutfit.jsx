import React from 'react';

// <span className="plus" >+</span> 
const AddOutfit = ({handleClick}) => {
  return (
    <div className="card" id="addOutfitCard" style={{alignItems: "center", lineHeight: "1"}} 
    onClick={handleClick}>
    <i className="plus fa fa-plus" style={{fontSize: "40px"}}></i>
    <p className="add font-weight-light">Add to Outfit</p>
    </div>
  )
}

export default AddOutfit;