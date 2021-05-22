import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Crud from './Crud';
import 'bootstrap/dist/css/bootstrap.min.css';
// import StateProps from './ReactJS_Dasar/StatedanProps/StateProps';
// import Map from './ReactJS_Dasar/MapFilterReduce/Map';
// import Lifecycle from './ReactJS_Dasar/Lifecycle/Lifecycle';
// import Coba from './Coba';
// import DarkMode from './DarkMode';
// import Portfolio from './Portfolio';
import App from './App';
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
