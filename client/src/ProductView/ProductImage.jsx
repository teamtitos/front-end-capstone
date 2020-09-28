import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';

const ProductImage = (props) => {
  const [stylesList, setStyles] = useState([]);
  const [photosList, setPhotos] = useState([]);

  useEffect(() => {
    setStyles(props.styles.results);
    console.log(stylesList)
  })

  return (
    <Col sm={8}>
      { stylesList
        ? stylesList.map(style => {
            return style.photos.map(photo => {
              return <img src={photo.thumbnail_url}></img>
            });
          })
        : 'loading'
      }
    </Col>
  );
}

export default ProductImage;