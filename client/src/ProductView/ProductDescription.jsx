import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductDescription = (props) => {

  return (
    <Row className="productDescription">

      <Col className="description-body" sm={8} >
        {!props.details
          ? <p>Loading</p>
          : <React.Fragment>
              <h4>{props.details.slogan}</h4>
              <p>{props.details.description}</p>
            </React.Fragment>
        }
      </Col>
      <Col sm={4}>
        { !props.details.features
            ? <p>Loading</p>
            : props.details.features.map((item, index) => {
              return (
                <div className="feature" key={index}>
                  <p>
                    <i className="fa fa-check" aria-hidden="true"></i> {item.feature}: {item.value}
                  </p>
                </div>
              );
            })
        }
      </Col>
    </Row>
  );
};

export default ProductDescription;