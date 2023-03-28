import React from 'react';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Admin_Uma from './admin/admin';
import Home from './home/home';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" exact component={<Home/>}/> */}
        <Route exact path="/"  component={<App/>} />
        <Route path="/admin-uma-2023" component={<Admin_Uma/>} />
        <Route component={App} />
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
