
import { useState } from 'react';
import './App.css';
import Header from './modules/Header';
import Hero from './modules/Hero';
import Filter from './modules/Filter';
import Animals from './modules/Animals';
import CallToAction from './modules/CallToAction';
import Footer from './modules/Footer';
import {animals} from './context.json'

function App() {

console.log(animals)


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
