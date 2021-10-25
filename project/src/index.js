import React from 'react';
import ReactDOM from 'react-dom';
import '../src/component_Index/index.css';
import App from './App';
import reportWebVitals from '../src/component_Index/reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component_Index/style.scss';
// import 'font-awesome/css/font-awesome.min.css'; 
// import $ from "jquery";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
