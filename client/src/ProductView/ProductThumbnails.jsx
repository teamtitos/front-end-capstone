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
    <Col sm={2} className="thumbnails">
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
      { thumbnailsArrow
        ? <p className="arrow" onClick={handleThumbnailArrowClick}>
            <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
          </p>
        : ''
      }
    </Col>
  );

};



export default ProductThumbnails;