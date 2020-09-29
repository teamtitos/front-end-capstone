import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactImageMagnify from 'react-image-magnify';

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

  return (
    <Col sm={8} className="imageContainer">
      <Row>
        <Col sm={2} className="thumbnails">
          { props.productStyle
            ? <div>
              {props.productStyle.photos.map((photo, index) => {
                if (index > 6) {
                  thumbnailsArrow = true;
                }
                return <div
                  className="thumbnail"
                  style={{ backgroundImage: `url(${photo.thumbnail_url})` }}
                  key={index}
                  onClick={(e) => handleThumbnailClick(e, index)}
                  ></div>
              })}

              </div>
            : <p>Loading...</p>
          }
        </Col>
        { thumbnailsArrow
          ? <p className="arrow"><i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i></p>
          : ''
        }
        <Col sm={10} className="mainImage fluid">
          { props.productStyle
            ? <ReactImageMagnify {...{
                smallImage: {
                  width: 500,
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
        </Col>
      </Row>
    </Col>
  );
}

export default ProductImage;