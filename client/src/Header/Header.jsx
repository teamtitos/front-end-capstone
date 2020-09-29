import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css';


const Header = () => {
  return (
    <div>
    <div className="header">
      <Container>
      <Row>
        <Col>Logo</Col>
        <Col className="align-right"><input type="text" placeholder="Search"></input></Col>
      </Row>
      </Container>
    </div>
      <Container className="announcement">
        <i>Site-wide announcement message!</i> <b>Sale/Discount offer</b> - New Product Highlight
      </Container>
    </div>
  );
}

export default Header;