// src/components/index.js
// This file exports all components for cleaner imports
export { default as Navbar } from './Navbar';
export { default as Banner } from './Banner';
export { default as Services } from './Services';
export { default as Places } from './Places';
export { default as About } from './About';
export { default as Footer } from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
