import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactImageMagnify from 'react-image-magnify';

// TODO: move thumbnails logic to different component
// TODO: make sure active class is still added to thumbnail when arrows are used to toggle between images

const ProductImage = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  let thumbnailsArrow = false;

  const removeActiveClass = (e) => {
    let thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
      if(thumbnail !== e.target) {
        thumbnail.classList.remove('active');
      };
    });
  };

  const handleThumbnailClick = (e, index) => {
    setCurrentImage(index);
    e.target.classList.add('active');
    removeActiveClass(e);
  };

  const handleThumbnailArrowClick = () => {
    let thumbnailContainer = document.querySelector('.thumbnails');
    thumbnailContainer.scrollTo({ top: 600, behavior: 'smooth' })
  };

  const handleArrowClick = (direction) => {
    if (direction === 'right') {
      setCurrentImage(currentImage + 1)
    } else {
      setCurrentImage(currentImage - 1)
    };
  };

  return (
    <Col sm={8} className="imageContainer">
      <Row>
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
                  onClick={(e) => handleThumbnailClick(e, index)}
                  ></div>
              })
            : <p>Loading...</p>
          }
        </Col>
        { thumbnailsArrow
          ? <p className="arrow" onClick={handleThumbnailArrowClick}>
              <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
            </p>
          : ''
        }
        <Col sm={10} className="mainImage fluid">
          <i className="fa fa-arrow-left"
            aria-hidden="true"
            onClick={() => handleArrowClick('left')} ></i>

          { props.productStyle
            ? <ReactImageMagnify {...{
                smallImage: {
                  width: 600,
                  height: 500,
                  alt: props.productStyle.name,
                  src: props.productStyle.photos[currentImage].url
                },
                largeImage: {
                  src: props.productStyle.photos[currentImage].url,
                  width: 1200,
                  height: 1800,
                },
                isHintEnabled: true
              }} />
            : <p>Loading...</p>
          }

          <i
            className="fa fa-arrow-right"
            aria-hidden="true"
            onClick={() => handleArrowClick('right')} ></i>
        </Col>
      </Row>
    </Col>
  );
}

export default ProductImage;