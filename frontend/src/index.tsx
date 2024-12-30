import App from './App.tsx'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// Remove reportWebVitals if you don't need it
// import reportWebVitals from './reportWebVitals';

// Ensure the root element is present in the HTML
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to measure performance, uncomment the following line
// reportWebVitals();
