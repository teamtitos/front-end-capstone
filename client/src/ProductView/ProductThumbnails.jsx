import React from 'react';

const ProductThumbnails = (props) => {
  let thumbnailsArrow = false;

  const handleThumbnailArrowClick = (direction) => {
    let thumbnailContainer = document.querySelector('.thumbnails');
    if (direction === 'down') {
      thumbnailContainer.scrollTo({ top: 600, behavior: 'smooth' });
    }
    if (direction === 'up') {
      thumbnailContainer.scrollTo({ top: -600, behavior: 'smooth' });
    }

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
                index={index}
                className={index === 0 ? "active thumbnail" : "thumbnail"}
                style={{ backgroundImage: `url(${photo.thumbnail_url})` }}
                key={index}
                onClick={(e) => props.handleThumbnailClick(e, index)}
                ></div>
            })
          : <p>Loading...</p>
        }
      </div>
      { thumbnailsArrow
        ? <div className="thumbnail-nav">
            <p className="arrow arrow-up" onClick={() => handleThumbnailArrowClick('up')}>
              <i className="fa fa-angle-up" aria-hidden="true"></i>
            </p>
            <p className="arrow arrow-down" onClick={() => handleThumbnailArrowClick('down')}>
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </p>
          </div>
        : ''
      }
    </div>
  );

};



export default ProductThumbnails;