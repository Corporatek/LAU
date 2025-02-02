import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// styles
import "./assets/css/nucleo-icons.css";

// import "./assets/scss/blk-design-system-pro-react.scss";
import "./assets/demo/demo.css";
import "./assets/demo/react-demo.css";

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
