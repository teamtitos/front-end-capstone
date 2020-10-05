import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Col from 'react-bootstrap/Col';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

// const marks = [
//   {
//     value: 20,
//     label: '1',
//   },
//   {
//     value: 40,
//     label: '2',
//   },
//   {
//     value: 60,
//     label: '3',
//   },
//   {
//     value: 80,
//     label: '4',
//   },
//   {
//     value: 100,
//     label: '5',
//   },
// ];

// function valuetext(value) {
//   return `${value}°C`;
// }

const CharacteristicsRating = (props) => {
  console.log('CharacteristicsRating props:', props)
  const classes = useStyles();

  // let value =[]
  let characteristics = [];
  for (let key in props.meta.characteristics) {
    console.log('characteristics rating key:', key)
    characteristics.push(key, Math.floor(props.meta.characteristics[key].value))
    // value.push(Math.floor(props.meta.characteristics[key].value))
    // console.log('value:', value)
    console.log('characteristics:', characteristics)
  }

  // for (let i = 0; i < value.length; i++) {
  //   let currentValue = value[i];
  //   console.log(currentValue)
  // }

  const charArray = characteristics.map(characteristic => {
return (
  <Col className={classes.root}>
    <Typography id="discrete-slider-always" gutterBottom>
      {characteristic}
    </Typography>
    <Slider
      aria-labelledby="discrete-slider-always"
      step={20}
    />
  </Col>
)}
)
return (
<div>
  {charArray}
</div>
)
}

export default CharacteristicsRating;