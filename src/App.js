import React, { useState } from 'react';
import './App.css';
import Header from './componets/Header';
import Hero from './componets/Hero';
import ContactModal from './componets/ContactModal';
import About from './componets/About';
import Features from './componets/Features';
import Sales from './componets/Sales';
import Business from './componets/Business';
import NewSales from './componets/NewSales';
import Footer from './componets/Footer';

function App() {
  const [showForm, setShowForm] = useState(false);

  const openModal = () => setShowForm(true);
  const closeModal = () => setShowForm(false);

  return (
    <div className="App">
     <Header openModal={openModal} />
     <Hero openModal={openModal} />
     <ContactModal isOpen={showForm} closeModal={closeModal} />
     <About />
     <Features />
     <Sales />
     <Business />
     <NewSales openModal={openModal}/>
     <Footer />
    </div>
  );
}

export default App;
