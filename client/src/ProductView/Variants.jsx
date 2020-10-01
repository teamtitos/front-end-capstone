import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const Variants = (props) => {
  let keys = [];
  if(props.styleDetails) {
    keys = Object.keys(props.styleDetails.skus)
  }

  const [selectedSku, setSelectedSku] = useState(keys[0]);

  const handleSelect = (e) => {
    let sku = e.target.selectedOptions[0].getAttribute("sku");
    setSelectedSku(sku);
  }

  const checkQuantity = () => {
    let skuQuantity = props.styleDetails.skus[selectedSku] ? props.styleDetails.skus[selectedSku].quantity : 15;
    let max = skuQuantity < 15 ? skuQuantity : 15;
    let options = [];

    for(let i = 1; i <= max; i++) {
      options.push(i)
    }

    return (
      <Form.Control as="select" custom>
        { options.map((item, index) => {
          return <option key={index}>{item}</option>
        }) }
      </Form.Control>
    );
  }

  return (
    <Form className="variants">
      <Form.Group>
        <Form.Row>
          <Col sm={8}>
            <Form.Control as="select" custom onChange={handleSelect}>
              <option>Select Size</option>
              { props.styleDetails
                ?
                  Object.values(props.styleDetails.skus).map((item, index) => {
                    return <option key={index} sku={keys[index]}>{item.size}</option>;
                  })
                : <option>none</option>
              }
            </Form.Control>
          </Col>
          <Col sm={4}>
              { selectedSku
                ? checkQuantity()
                : <Form.Control as="select" custom disabled><option>-</option></Form.Control>
              }
          </Col>
        </Form.Row>
      </Form.Group>
    </Form>

  );
}

export default Variants;
