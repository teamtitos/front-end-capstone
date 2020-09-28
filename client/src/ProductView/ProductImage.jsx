import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

const ProductImage = (props) => {
  const [stylesList, setStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState(4);
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    setStyles(props.styles.results);
  });

  const handleThumbnailClick = (index) => {
    setCurrentImage(index);
  }


  return (
    <Col sm={8}>
      { stylesList && stylesList.length
        ? <Image src={stylesList[currentStyle].photos[currentImage].url} fluid></Image>
        : <p>Loading...</p>
      }
      { stylesList && stylesList.length
        ? stylesList[currentStyle].photos.map((photo, index) => {
            return <Image
              src={photo.thumbnail_url}
              key={index}
              onClick={() => handleThumbnailClick(index)}></Image>
          })
        : <p>Loading...</p>
      }
    </Col>
  );
}

export default ProductImage;