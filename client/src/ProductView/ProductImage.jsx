import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactImageMagnify from 'react-image-magnify';

const ProductImage = (props) => {
  const [currentImage, setCurrentImage] = useState(0);

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

  return (
    <Col sm={8} className="imageContainer">
      <Row>
        <Col sm={2} className="thumbnails">
          { props.productStyle
            ? props.productStyle.photos.map((photo, index) => {
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
        <Col sm={10} className="mainImage fluid">
          { props.productStyle
            ? <ReactImageMagnify {...{
                smallImage: {
                  isFluidWidth: true,
                  src: props.productStyle.photos[currentImage].url,
                  srcSet: props.productStyle.photos[currentImage].url
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
        </Col>
      </Row>
    </Col>
  );
}

export default ProductImage;