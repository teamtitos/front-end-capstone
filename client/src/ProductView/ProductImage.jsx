import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';

const ProductImage = (props) => {
  const [stylesList, setStyles] = useState([]);
  const [currentStyle, setCurrentStyleId] = useState(2);
  const [photosList, setPhotos] = useState([]);

  useEffect(() => {
    setStyles(props.styles.results);
    if (stylesList && stylesList.length) {
      console.log(stylesList[currentStyle])
    }
  });


  return (
    <Col sm={8}>
      { stylesList && stylesList.length
          ? <div>{stylesList[currentStyle].photos.map(photo => {
              return <img src={photo.thumbnail_url}></img>
            })}</div>
          : <div>Loading...</div>
      }
    </Col>
  );
}

export default ProductImage;