import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Main } from './pages/Main';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { EditCar } from './pages/EditCar';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/edit" component={EditCar} />
        </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
