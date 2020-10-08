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
          quantity: props.quantity,
          price: props.product.original_price,
          salePrice: props.product.sale_price !== '0' ? props.product.sale_price : null
        }
      ]);

      let successMsg = document.querySelector('.addSuccess');
      successMsg.classList.remove('hidden');
      setTimeout(() => successMsg.classList.add('hidden'), 4000);
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
          { item.salePrice
          ? <p>Price: $<span className="strikethrough">{item.salePrice}</span> ${item.price}</p>
          : <p>Price: ${item.price}</p>}
        </div>
      );
    });
  };

  return (

    <React.Fragment>
      <Button variant="primary" size="lg" block onClick={handleSubmit} className="addToBag">Add to bag</Button>
      <span className="addSuccess hidden" onClick={handleShow}>
        <i className="fa fa-check" aria-hidden="true"></i> Successfully added to bag. <span className="view">View bag</span>.
      </span>
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

    </React.Fragment>
  );
};

export default AddToBag;