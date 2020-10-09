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
    <React.Fragment>
      <div className="thumbnails">
        { props.productStyle
          ? props.productStyle.photos.map((photo, index) => {
              if (index > 6) {
                thumbnailsArrow = true;
              }
              return <div
                key={index}
                index={index}
                className={index === 0 ? "active thumbnail" : "thumbnail"}
                style={{ backgroundImage: `url(${photo.thumbnail_url})` }}
                onClick={() => props.handleThumbnailClick(index)}
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
    </React.Fragment>
  );
};



export default ProductThumbnails;