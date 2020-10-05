import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import axios from 'axios';


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

      // const transport = axios.create({
      //   withCredentials: true
      // })

      // transport
      // .post('http://18.224.37.110/cart', {
      //   headers: {
      //     withCredentials: true,
      //   },
      //   sku_id: [props.selectedSku]
      // })
      //   .then(response => {
      //     console.log('Successfully posted to the cart.')
      //   })
      //   .catch(error => {
      //     console.error('There was an error posting to the cart.')
      //   })

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
      <div className="shoppingBag" onClick={handleShow}>
      <i className="fa fa-shopping-bag"></i><span className="bag-qty">{cart.length}</span>
      </div>

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