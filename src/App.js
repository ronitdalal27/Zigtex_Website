import React from 'react';
import './App.css';
import Header from './componets/Header';
import Hero from './componets/Hero';
import About from './componets/About';
import Features from './componets/Features';
import Sales from './componets/Sales';
import Business from './componets/Business';
import NewSales from './componets/NewSales';
import Footer from './componets/Footer';

function App() {
  return (
    <div className="App">
     <Header />
     <Hero />
     <About />
     <Features />
     <Sales />
     <Business />
     <NewSales />
     <Footer />
    </div>
  );
}

export default App;
