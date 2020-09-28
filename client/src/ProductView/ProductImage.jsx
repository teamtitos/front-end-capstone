import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

const ProductImage = (props) => {
  const [stylesList, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  //TODO: change currentStyle depending on which style is selected by user

  useEffect(() => {
    setStyles(props.styles.results);
  });

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
        <Col sm={10} className="mainImage">
          { stylesList && stylesList.length
            ? <Image src={stylesList[currentStyle].photos[currentImage].url} fluid></Image>
            : <p>Loading...</p>
          }
        </Col>
      </Row>
    </Col>
  );
}

export default ProductImage;