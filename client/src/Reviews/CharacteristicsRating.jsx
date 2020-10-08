import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CharacteristicsRating = (props) => {
  // console.log('characteristics rating props:', props)

  // let sizeChars = ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide']

  // let widthChars = ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide']

  // let comfortChars = ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect']

  // let qualityChars = ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect']

  // let lengthChars = ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long']

  // let fitChars = ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'Runs long']

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