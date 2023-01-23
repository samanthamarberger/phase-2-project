import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from './components/App';


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// compatible with REACT 18: IF ISSUES ARISE TRY THIS
// can get rid of document.getElementByID('root")
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(


