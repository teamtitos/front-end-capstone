import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const StyleSelector = (props) => {

  return (
    <Row className="styleGrid">
      <Col>
        <p className="currentStyle">Style > <b>{props.styleDetails.name}</b></p>
      </Col>
      <Row>
        { props.allStyles && props.allStyles.length
            ? props.allStyles.map((style, index) => {
                return <Col
                  className="style"
                  onClick={() => props.updateStyle(index)}
                  key={index}
                  sm={3}>{style.name}</Col>;
            })
            : ''}
      </Row>
    </Row>
  );
}

export default StyleSelector;