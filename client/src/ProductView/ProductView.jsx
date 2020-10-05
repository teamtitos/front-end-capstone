import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import './ProductView.css';
import axios from 'axios';

import ProductDetailsColumn from './ProductDetailsColumn.jsx';
import ProductImage from './ProductImage';
import ProductDescription from './ProductDescription';

const ProductView = (props) => {
  const [currentStyle, setStyle] = useState(0);
  const [reviewAverage, setReviewAverage] = useState(0);
  const [reviewsCount, setReviewsCount] = useState(0);

  useEffect(() => {
    getAllReviews(props.productData.id);
  }, [props.productData])

  const getAllReviews = (id) => {
    axios.get(`http://18.224.37.110/reviews/?product_id=${id}`)
      .then(result => {
        let average = 0;
        result.data.results.forEach(review => {
          average += review.rating;
        });
        average = average / result.data.results.length;
        setReviewAverage(average);
        setReviewsCount(result.data.results.length);
      })
      .catch(error => {
        console.error('error getting review data');
      })
  }

  const updateStyle = (e, styleId) => {
    let styles = document.querySelectorAll('.style');
    document.querySelector('.variants').reset();

    setStyle(styleId);

    styles.forEach((style, index) => {
      style.classList.remove('active');
      if(e === null && index === 0) {
        style.classList.add('active')
      } else if (e) {
        e.currentTarget.classList.add('active');
      }
    });
  }

  useEffect(() => {
    updateStyle(null, 0);
  }, [props.productData]);

  let productStyleResult =
    props.productStyles.results !== undefined
      ? props.productStyles.results[currentStyle]
      : '';

  return (
    <Row className="productViewRow">
      <ProductImage productStyle={productStyleResult} productData={props.productData}/>
      <ProductDetailsColumn
        details={props.productData}
        productStyle={productStyleResult}
        allStyles={props.productStyles.results}
        updateStyle={updateStyle}
        reviewsCount={reviewsCount}
        rating={reviewAverage} />
      <ProductDescription details={props.productData} />
    </Row>
  );
}

export default ProductView;