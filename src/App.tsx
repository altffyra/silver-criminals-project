
import { useState } from 'react';
import './App.css';
import Header from '../modules/Header';
import Hero from '../modules/Hero';
import Filter from '../modules/Filter';
import Animals from '../modules/Animals';
import CallToAction from '../modules/CallToAction';
import Footer from '../modules/Footer';
import {animals} from './context.json'
import {Animalinterface} from '../modules/interfaces'
function App() {



  
  const [animalsState, setAnimal] = useState([animals])

  console.log(animalsState)

  function timeToUpdate(animal:Animalinterface){ 
    // const ids = animalsState.indexOf(animal)
    // const tempArray = [...animalsState];
    // tempArray.splice(ids,1)
    // tempArray.unshift(animal)
    // setAnimal(tempArray)

  }

  const animalsMap = animals.map((animal, index) => {
    return <Animals info = {animal} update = {timeToUpdate} index= {index} key = {index}/>
  })

  return (
    <div className="App">

      
      <Header />

      <Hero />

      <Filter info = {animalsState} update = {timeToUpdate}/>

      {animalsMap}

      <CallToAction />

      <Footer />


    </div>
  )
}

export default App


