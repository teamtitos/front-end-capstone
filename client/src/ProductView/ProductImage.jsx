import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactImageMagnify from 'react-image-magnify';

const ProductImage = (props) => {
  const [stylesList, setStyles] = useState([]);
  const [currentStyle] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  //TODO: change currentStyle depending on which style is selected by user

  useEffect(() => {
    setStyles(props.styles.results);
  }, [props.styles.results]);

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
    console.log(stylesList[currentStyle]);
  };

  return (
    <Col sm={8} className="imageContainer">
      <Row>
        <Col sm={2} className="thumbnails">
          { stylesList && stylesList.length
            ? stylesList[currentStyle].photos.map((photo, index) => {
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
          { stylesList && stylesList.length
            ? <ReactImageMagnify {...{
                smallImage: {
                  isFluidWidth: true,
                  src: stylesList[currentStyle].photos[currentImage].url,
                  srcSet: stylesList[currentStyle].photos[currentImage].url
                },
                largeImage: {
                  src: stylesList[currentStyle].photos[currentImage].url,
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