import React, { useState, useEffect, useCallback } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddToBag = (props) => {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

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
          price: props.product.original_price * props.quantity,
          salePrice: props.product.sale_price !== 0 * props.quantity
            ? props.product.sale_price * props.quantity
            : null
        }
      ]);

      let successMsg = document.querySelector('.addSuccess');
      successMsg.classList.remove('hidden');
      setTimeout(() => successMsg.classList.add('hidden'), 4000);
      props.resetProduct();
      document.querySelector('.variants').reset();
    }
  };

  const getCartTotal = useCallback (() => {
      let prices = [];
      cart.forEach(item => {
        if(item.salePrice) {
          prices.push(item.salePrice)
        } else {
          prices.push(item.price);
        }
      });

      return prices.reduce((sum, price) => {
        return sum + price
      }, 0);
  }, [cart]);

  const removeCartItem = useCallback((index) => {
    setCart(
      cart.filter((item, i) => {
        return i !== index
      })
    );
  }, [cart]);

  const showCart = useCallback(() => {
    return cart.map((item, index) => {
      return (
        <Row className="cartRow" key={index}>
          <Col xs={12}><h5>{item.name}</h5></Col>
          <Col xs={10}>
            <p>Style: {item.style}</p>
            <p>Size: {item.size}</p>
            <p>Quantity: {item.quantity}</p>
            { item.salePrice
              ? <p>Price: $<span className="strikethrough">{item.price}</span> ${item.salePrice}</p>
              : <p>Price: ${item.price}</p> }
          </Col>
          <Col xs={2}>
            <p onClick={() => removeCartItem(index)} className="removeItem">X</p>
          </Col>
        </Row>
      );
    });
  }, [cart, removeCartItem]);

  useEffect(() => {
    setCartTotal(getCartTotal());
  }, [showCart, getCartTotal])

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
            ? <React.Fragment>{showCart()} <b>Total: ${cartTotal}</b></React.Fragment>
            : "Your bag is empty"
          }
        </Modal.Body>
      </Modal>

    </React.Fragment>
  );
};

export default AddToBag;