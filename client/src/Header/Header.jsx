import React from 'react';
import Container from 'react-bootstrap/Container';
import './Header.css';


const Header = () => {
  return (
    <div>
    <div className="header">
      <Container>
        Logo
      </Container>
    </div>
      <Container className="announcement">
        <i>Site-wide announcement message!</i> <b>Sale/Discount offer</b> - New Product Highlight
      </Container>
    </div>
  );
}

export default Header;