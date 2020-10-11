import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CharacteristicsRating = (props) => {

  let characteristicArray = [];
  let valuesArray = [];

  for (let key in props.meta.characteristics) {
    characteristicArray.push(key)
    valuesArray.push(props.meta.characteristics[key].value)
  }

  const chars = characteristicArray.map(char => {
    return (
      <div key={char}>
        <Row>
          <Col>
            {char}
          </Col>
        </Row>
        <Row>
          <Col>
            <ProgressBar variant='success' now={Math.floor(props.meta.characteristics[char].value * 100 / 10)}/>
          </Col>
          <Col>{Math.floor(props.meta.characteristics[char].value)}</Col>
        </Row>
      </div>
    )
  })

  return(
    <div>
      <p>Product Breakdown</p>
      <Row>
        <Col>
          { props.meta
            ? chars
            : 'Loading...'
          }
        </Col>
      </Row>
    </div>
  )
}

export default CharacteristicsRating;