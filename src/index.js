import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Offers from './Offers';
import * as serviceWorker from './serviceWorker';
import Suggestions from './Suggestions';
import Task from './Task';

ReactDOM.render(
  <React.StrictMode>
    <Offers />
  </React.StrictMode>,
  document.getElementById('Offers')
);
ReactDOM.render(
  <React.StrictMode>
    <Suggestions />
  </React.StrictMode>,
  document.getElementById('Suggestions')
);
ReactDOM.render(
  <React.StrictMode>
    <Task />
  </React.StrictMode>,
  document.getElementById('Task')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
