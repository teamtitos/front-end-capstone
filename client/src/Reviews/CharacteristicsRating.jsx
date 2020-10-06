import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CharacteristicsRating = (props) => {
  // console.log('characteristics rating props:', props)

  let characteristicArray = [];
  let valuesArray = [];

  for (let key in props.meta.characteristics) {
    characteristicArray.push(key)
    valuesArray.push(props.meta.characteristics[key].value)
  }

  const chars = characteristicArray.map(char => {
    return (
      <div>
        <Row>
          <Col>
            {char}
          </Col>
          <Col>
            <ProgressBar variant='success' now={30}/>
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
          {chars}
        </Col>
      </Row>
    </div>
  )
}

export default CharacteristicsRating;