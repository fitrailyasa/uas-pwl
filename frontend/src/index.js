import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import 'admin-lte/dist/css/adminlte.min.css';
import 'admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css';
import 'admin-lte/plugins/fontawesome-free/css/all.min.css';
import 'admin-lte/dist/js/adminlte.min.js';
import 'admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';

library.add(fas);

const root = document.getElementById('root');

// Use createRoot to render the app
const reactRoot = ReactDOM.createRoot(root);

// Render your app using the new createRoot API
reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
