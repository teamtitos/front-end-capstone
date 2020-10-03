import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddToBag = (props) => {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    let valid = props.checkValid();

    if (valid === true) {
      setCart([...cart,
        {
          name: props.mainProduct.name,
          style: props.product.name,
          size: props.size,
          quantity: props.quantity
        }
      ]);

      props.resetProduct();
      document.querySelector('.variants').reset();
    }
  };

  const showCart = () => {
    return cart.map((item, index) => {
      return (
        <div className="cartRow" key={index}>
          <h5>{item.name}</h5>
          <p>Style: {item.style}</p>
          <p>Size: {item.size}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      );
    });
  };

  return (

    <div>
      <Button variant="primary" size="lg" block onClick={handleSubmit} className="addToBag">Add to bag</Button>
      { cart.length
        ? <Button variant="secondary" onClick={handleShow} className="viewBag">
            View Bag
          </Button>
        : ''
      }

      <Modal show={show} onHide={handleClose} className="cart">
        <Modal.Header closeButton>
          <Modal.Title>Your bag</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length
            ? showCart()
            : ""
          }

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default AddToBag;