import { useState } from 'react';
import './App.css';
import Header from '../modules/Header';
import Hero from '../modules/Hero';
import Filter from '../modules/Filter';
import Animals from '../modules/Animals';
import CallToAction from '../modules/CallToAction';
import Footer from '../modules/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Header />

      <Hero />

      <Filter />

      <Animals />

      <CallToAction />

      <Footer />

    </div>
  )
}

export default App
