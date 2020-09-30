import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductDescription = (props) => {
  return (
    <Row className="productDescription">
      <Col>
        {!props.details
          ? <p>Loading</p>
          : <div>
              <h4>{props.details.slogan}</h4>
              <p>{props.details.description}</p>
            </div>
        }
      </Col>
    </Row>
  );
}

export default ProductDescription;