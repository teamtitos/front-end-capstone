import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import AddToBag from './AddToBag.jsx'

const Variants = (props) => {
  let keys = [];
  if (props.styleDetails) {
    keys = Object.keys(props.styleDetails.skus)
  }

  const [selectedSku, setSelectedSku] = useState(keys[0]);
  const [size, setSize] = useState(null);
  const [quantity, setQuantity] = useState(null);

  const handleSelect = (e) => {
    let sku = e.target.selectedOptions[0].getAttribute("sku");
    setSelectedSku(sku);
    setSize(e.target.value);
  }

  const handleQtySelect = (e) => {
    setQuantity(e.target.value);
  }

  const resetSku = () => {
    setSelectedSku(null);
  }

  const checkQuantity = () => {
    let skuQuantity = props.styleDetails.skus[selectedSku] ? props.styleDetails.skus[selectedSku].quantity : 'out of stock';
    let max = skuQuantity < 15 ? skuQuantity : 15;
    let options = [];

    for(let i = 1; i <= max; i++) {
      options.push(i)
    }

    return (
      options.map((item, index) => {
        return <option key={index}>{item}</option>
      })
    );
  }

  return (
    <div>
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
                : <option disabled>none</option>
              }
            </Form.Control>
          </Col>
          <Col sm={4}>
            <Form.Control as="select" custom onChange={handleQtySelect}>
            <option>Qty</option>
              { selectedSku
                ? checkQuantity()
                : <option disabled>-</option>
              }
            </Form.Control>
          </Col>
        </Form.Row>
      </Form.Group>
    </Form>

    <AddToBag
      size={size}
      quantity={quantity}
      product={props.styleDetails}
      mainProduct={props.mainProduct}
      resetSku={resetSku}/>
    </div>
  );
}

export default Variants;
