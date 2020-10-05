import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Slider from '@material-ui/core/Slider';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CharacteristicsRating = (props) => {
  console.log('characteristics rating props:', props)

  let characteristicArray = [];
  for (let key in props.meta.characteristics) {
    characteristicArray.push(key)
  }

  let valuesArray = [];
  for (let key in props.meta.characteristics) {
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
         </Row>
      </div>
    )
  })

  const vals = valuesArray.map(val => {
    return (
      <div>
        <Row>
          <Col>
            {val}
          </Col>
        </Row>
      </div>
    )
  })
    return(
      <div>
        <Row>
          <Col>
            {chars}
          </Col>
          <Col>
            {vals}
          </Col>
        </Row>
      </div>
    )
}

export default CharacteristicsRating;