import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const StyleSelector = (props) => {

  return (
    <Row className="styleGrid">
      <Col xs={12}>
        <p className="currentStyle">Style >
          <b> {props.styleDetails ? props.styleDetails.name : ''}</b>
        </p>
      </Col>
      <Row className="styleRow">
        { props.allStyles && props.allStyles.length
          ? props.allStyles.map((style, index) => {
              return (
                <Col
                  className={index === 0 ? "active style" : "style"}
                  onClick={(e) => props.updateStyle(e, index)}
                  key={index}
                  xl={3} lg={4} md={4} xs={3}>
                    <span className="styleName">{style.name}</span>
                    <div className="styleThumb">
                      <span className="activeStyle"><i class="fa fa-check"></i></span>
                      <img src={style.photos[0].thumbnail_url} alt={style.name}></img>
                    </div>
                </Col>
              );
          })
          : ''}
      </Row>
    </Row>
  );
}

export default StyleSelector;