import React from 'react';

const AddOutfit = () => {
  // will make a request to top component to add an Outfit

  return (
    <div className="card" style={{alignItems: "center", lineHeight: "1"}} >
    <span className="plus" >+</span> 
    <p className="add font-weight-light">ADD TO OUTFIT</p>
    </div>
  )
}

export default AddOutfit;