import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tracker from './Tracker';

ReactDOM.render(
  React.createElement(Tracker(App)),
  document.getElementById('root')
);
