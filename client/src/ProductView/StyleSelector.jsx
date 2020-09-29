import React from 'react';

const StyleSelector = (props) => {

  return (
    <div>
      <p className="currentStyle">Style > <b>{props.styleDetails.name}</b></p>
      { props.allStyles && props.allStyles.length
          ? props.allStyles.map(style => {
              return <p>{style.name}</p>;
           })
          : ''}
    </div>
  );
}

export default StyleSelector;