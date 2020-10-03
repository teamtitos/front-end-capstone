import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Rating from '@material-ui/lab/Rating';

const ProductInfo = (props) => {

  return (
    <div className="productDetails">
      <div className="rating">
        <Rating
          name="simple-controlled"
          value={props.rating}
          precision={0.25}
          size="small"
          readOnly
        /> <a href="/"> Read all reviews</a>
      </div>

     { !props.details || !props.styleDetails
        ? <p>Loading...</p>
        : <div>
            <p className="category">{ props.details.category }</p>
            <h2 className="title">{ props.details.name }</h2>
              { props.styleDetails.sale_price !== '0'
                  ? <p className="price">
                      <span className="strikethrough">${ props.styleDetails.original_price }</span>
                      <span className="sale"> ${ props.styleDetails.sale_price }</span>
                    </p>
                  : <p className="price">${ props.styleDetails.original_price }</p>
              }
          </div>
      }
      <Row className="social">
        <FacebookShareButton
          url='/'
          quote='title'
          className="facebook-share"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton
          url='/'
          title='title'
          className="Demo__some-network__share-button"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <PinterestShareButton
          url={String(window.location)}
          media={`${String(window.location)}`}
          className="Demo__some-network__share-button"
        >
          <PinterestIcon size={32} round />
        </PinterestShareButton>
      </Row>
    </div>
  );
}

export default ProductInfo;