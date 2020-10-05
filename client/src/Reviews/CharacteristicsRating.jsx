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

const marks = [
  {
    value: 20,
    label: '1',
  },
  {
    value: 40,
    label: '2',
  },
  {
    value: 60,
    label: '3',
  },
  {
    value: 80,
    label: '4',
  },
  {
    value: 100,
    label: '5',
  },
];

// function valuetext(value) {
//   return `${value}°C`;
// }

const CharacteristicsRating = (props) => {
  const classes = useStyles();

  let characteristics = [];
  for (let key in props.meta.characteristics) {
    characteristics.push(key)
  }

const charArray = characteristics.map(characteristic => {
return (
  <Col className={classes.root}>
    <Typography id="discrete-slider-always" gutterBottom>
      {characteristic}
    </Typography>
    <Slider
      aria-labelledby="discrete-slider-always"
      step={20}
      // valueLabelDisplay="auto"
      marks={marks}
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