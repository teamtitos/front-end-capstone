import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

const ProductImage = (props) => {
  const [stylesList, setStyles] = useState([]);
  const [currentStyle, setCurrentStyleId] = useState(4);

  useEffect(() => {
    setStyles(props.styles.results);
    console.log(stylesList)
  });


  return (
    <Col sm={8}>
      { stylesList && stylesList.length
        ? <div><Image src={stylesList[currentStyle].photos[0].url} fluid></Image></div>
        : <div>Loading...</div>
      }
      { stylesList && stylesList.length
          ? <div>{stylesList[currentStyle].photos.map(photo => {
              return <Image src={photo.thumbnail_url}></Image>
            })}</div>
          : <div>Loading...</div>
      }
    </Col>
  );
}

export default ProductImage;