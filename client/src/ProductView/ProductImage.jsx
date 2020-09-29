import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactImageMagnify from 'react-image-magnify';
import ProductThumbnails from './ProductThumbnails.jsx';

const ProductImage = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [firstImage, setFirstImage] = useState(true);
  const [lastImage, setLastImage] = useState(false);

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

  const handleArrowClick = (direction) => {
    let lastImage = props.productStyle.photos.length - 2;

    if (direction === 'right') {
      if(currentImage === lastImage) {
        setLastImage(true);
      }
      if (!!lastImage) {
        setCurrentImage(currentImage + 1);
        setFirstImage(false);
      }
    }
    if (direction === 'left') {
      if(currentImage === 1) {
        setFirstImage(true);
      }
      if (!!firstImage) {
        setCurrentImage(currentImage - 1);
        setLastImage(false);
      }
    };
  };

  return (
    <Col sm={8} className="imageContainer">
      <Row>
        <Col sm={2}>
          <ProductThumbnails
            productStyle={props.productStyle}
            handleThumbnailClick={handleThumbnailClick} />
        </Col>

        <Col sm={10} className="mainImage fluid">
          { firstImage
              ? ''
              : <i
                  className="fa fa-arrow-left"
                  aria-hidden="true"
                  onClick={() => handleArrowClick('left')} ></i>
          }
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
                  height: 1000,
                },
                isHintEnabled: true
              }} />
            : <p>Loading...</p>
          }
          { lastImage
              ? ''
              : <i
                  className="fa fa-arrow-right"
                  aria-hidden="true"
                  onClick={() => handleArrowClick('right')} ></i>
          }
        </Col>
      </Row>
    </Col>
  );
}

export default ProductImage;