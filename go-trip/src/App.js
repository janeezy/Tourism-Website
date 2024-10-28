// src/App.jsx
import React from 'react';
import { Navbar, Banner, Services, Places, About, Footer } from './components';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Services />
      <Places />
      <About />
      <Footer />
    </div>
  );
}

export default App;