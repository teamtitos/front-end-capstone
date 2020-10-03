import React, { useState, useEffect } from 'react';
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
  const [errorMessage, setError] = useState('');
  const [outOfStock, setOutOfStock] = useState(false);


  const handleSelect = (e) => {
    let sku = e.target.selectedOptions[0].getAttribute("sku");
    setSelectedSku(sku);
    setSize(e.target.value);
    invalidError();
  }

  const handleQtySelect = (e) => {
    setQuantity(e.target.value);
    invalidError();
  }

  const resetProduct = () => {
    setSelectedSku(null);
    setSize(null);
    setQuantity(null);
  }

  const invalidError = (property) => {
    if (property === 'size') {
      setError('Please select a size');
    } else if (property === 'quantity') {
      setError('Please choose quantity');
    } else {
      setError('');
    }
  }

  const checkValid = () => {
    if (!size) {
      invalidError('size');
      return false;
    } else if (!quantity) {
      invalidError('quantity');
      return false;
    } else {
      return true;
    }
  }

  const checkQuantity = () => {

    let skuQuantity = props.styleDetails.skus[selectedSku]
      ? props.styleDetails.skus[selectedSku].quantity
      : 0;
    let max = skuQuantity < 15 && skuQuantity > 0 ? skuQuantity : 15;
    let soldOut = skuQuantity < 1;
    let options = [];

    if (soldOut) {
      let addButton = document.querySelector('.addToBag')
      addButton.classList.add('soldOut');
      addButton.setAttribute('disabled', 'true');
      addButton.innerHTML = 'out of stock';
      return <option disabled>-</option>
    }

    for(let i = 1; i <= max; i++) {
      options.push(i)
    }

    return (
      options.map((item, index) => {
        return <option key={index}>{item}</option>
      })
    )
  }

  return (
    <div>
    <p className="errorContainer">
    { errorMessage !== ''
      ? <span className="errorMessage">{errorMessage}</span>
      : ''
    }
    </p>
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
              { selectedSku && props.styleDetails.skus
                ? checkQuantity()
                : <option disabled>-</option>
              }
            </Form.Control>
          </Col>
        </Form.Row>
      </Form.Group>
    </Form>

    <AddToBag
      // outOfStock={outOfStock}
      size={size}
      quantity={quantity}
      product={props.styleDetails}
      mainProduct={props.mainProduct}
      resetProduct={resetProduct}
      selectedSku={selectedSku}
      checkValid={checkValid}/>
    </div>
  );
}

export default Variants;
