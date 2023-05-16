import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './components/Test';
// import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <App />
    <Test />
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
