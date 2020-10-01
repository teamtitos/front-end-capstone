import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const Variants = (props) => {
  console.log(props.styleDetails)
  return (
    <Form>
      <Form.Group>
        <Form.Row>
          <Col>
            <Form.Label>Select Size</Form.Label>
            <Form.Control as="select" custom>
              { props.styleDetails
                  ? Object.values(props.styleDetails.skus).map((item, index) => {
                    return <option key={index}>{item.size}</option>
                  })
                  : <option>none</option>
              }
            </Form.Control>
          </Col>
          <Col>
            <Form.Label>Quantity</Form.Label>
            <Form.Control as="select" custom>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Col>
        </Form.Row>
      </Form.Group>
    </Form>
  );
}

export default Variants;