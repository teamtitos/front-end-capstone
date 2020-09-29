import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductThumbnails = (props) => {
  let thumbnailsArrow = false;

  const handleThumbnailArrowClick = () => {
    let thumbnailContainer = document.querySelector('.thumbnails');
    thumbnailContainer.scrollTo({ top: 600, behavior: 'smooth' })
  };

  return (
    <div>
      <div className="thumbnails">
        { props.productStyle
          ? props.productStyle.photos.map((photo, index) => {
              if (index > 6) {
                thumbnailsArrow = true;
              }
              return <div
                className="thumbnail"
                style={{ backgroundImage: `url(${photo.thumbnail_url})` }}
                key={index}
                onClick={(e) => props.handleThumbnailClick(e, index)}
                ></div>
            })
          : <p>Loading...</p>
        }
      </div>

      { thumbnailsArrow
        ? <p className="arrow" onClick={handleThumbnailArrowClick}>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </p>
        : ''
      }
    </div>
  );

};



export default ProductThumbnails;