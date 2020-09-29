import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductDescription = (props) => {
  console.log(props.details)
  return (
    <Row className="productDescription">
      <Col sm={7} className="description-body">
        {!props.details
          ? <p>Loading</p>
          : <div>
              <h4>{props.details.slogan}</h4>
              <p>{props.details.description}</p>
            </div>
        }
      </Col>
      <Col sm={3}>
        { !props.details.features
            ? <p>Loading</p>
            : props.details.features.map(item => {
              return (
                <div className="feature">
                  <p>
                    <i class="fa fa-check" aria-hidden="true"></i> {item.feature}: {item.value}
                  </p>
                </div>
              );
            })
        }
      </Col>
    </Row>
  );
}

export default ProductDescription;