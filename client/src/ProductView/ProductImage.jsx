import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactImageMagnify from 'react-image-magnify';
import ProductThumbnails from './ProductThumbnails.jsx';

const ProductImage = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [firstImage, setFirstImage] = useState(true);
  const [lastImage, setLastImage] = useState(false);

  useEffect(() => {
    updateActiveClass(currentImage);
    if (props.productStyle.photos && props.productStyle.photos.length > 0) {
      checkFirstOrLast();
    }
  }, [currentImage, firstImage, lastImage])

  const updateActiveClass = () => {
    let thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
      let thumbnailIndex = thumbnail.getAttribute('index');
      if(Number(thumbnailIndex) === currentImage) {
        thumbnail.classList.add('active');
      } else {
        thumbnail.classList.remove('active');
      }
    })
  };

  // TODO: Fix arrows so that they appear and disappear at the correct times
  const checkFirstOrLast = () => {
    let lastIndex = props.productStyle.photos.length - 1;
    if(currentImage === lastIndex) {
      setLastImage(true);
    } else {
      setLastImage(false);
    }
    if(currentImage === 0) {
      setFirstImage(true);
    } else {
      setFirstImage(false);
    }
  }

  const handleThumbnailClick = (e, index) => {

    setCurrentImage(index);
  };

  const handleArrowClick = (direction) => {
    if (direction === 'right') {
      setCurrentImage(currentImage + 1);

    }
    if (direction === 'left') {
      setCurrentImage(currentImage - 1);

    };
  };

  return (
    <Col md={8} className="imageContainer">
      <Row>
        <Col xs={{span: 12, order:'last'}} md={{span: 2, order:'first'}}>
          <ProductThumbnails
            productStyle={props.productStyle}
            handleThumbnailClick={handleThumbnailClick} />
        </Col>

        <Col xs={12} md={10} className="mainImage fluid">
          { firstImage
              ? ''
              : <i
                  className="fa fa-arrow-left"
                  aria-hidden="true"
                  onClick={() => handleArrowClick('left')} ></i>
          }
          { props.productStyle
            ? <ReactImageMagnify {...{
                enlargedImagePosition: 'over',
                imageClassName: 'smallImg',
                enlargedImageContainerClassName: 'englargedContainer',
                enlargedImageClassName: 'enlargedImg',
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