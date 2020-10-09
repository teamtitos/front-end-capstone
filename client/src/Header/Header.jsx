import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css';


const Header = () => {
  const toggleTheme = () => {
    document.getElementById('root').classList.toggle('dark');
  }
  return (
    <React.Fragment>
      <div className="header">
        <Container>
        <Row>
          <Col>Logo</Col>
          <p onClick={toggleTheme} className="themeToggler">Toggle Theme</p>
          <Col className="align-right search-col">
            <input type="text" placeholder="Search"></input><i className="fa fa-search" aria-hidden="true"></i>
          </Col>
        </Row>
        </Container>
      </div>
      <Container className="announcement">
        <i>Site-wide announcement message!</i> <b>Sale/Discount offer</b> - New Product Highlight
      </Container>
    </React.Fragment>
  );
}

export default Header;