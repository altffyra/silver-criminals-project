
import { useState } from 'react';
import Header from './modules/Header';
import Hero from './modules/Hero';
import Filter from './modules/Filter';
import Animals from './modules/Animals';
import CallToAction from './modules/CallToAction';
import Footer from './modules/Footer';
import {animals} from './context.json'
import {Animalinterface} from './modules/interfaces'
import LargeInfo from './modules/LargeInfo';

function App() {
  const [animalsState , setAnimal] = useState<Animalinterface[]>(animals)
  const [adopted , setAdopted] = useState()
  const [tempAnimalState , setTempAnimal] = useState<Animalinterface[]>()
  

  function timeToUpdate(filterArguments:Animalinterface){ 
  //   const tempArray = [...animalsState];
  //   // tempArray.filter(filterArguments)
  //   setAnimal(tempArray)
  }
  const [showLarge, flipBoolean] = useState(false)




async function showOverlay(temp:number){
  console.log(temp)
  setTempAnimal(temp)
  await flipBoolean(!showLarge)
}

  const animalsMap = animals.map((animal, index) => {
    return <Animals showOverlay= {showOverlay} info = {animal} update = {timeToUpdate} index= {index} key = {index}/>
  })

  const showLargeItem = showLarge? <LargeInfo showOverlay= {showOverlay} info= {tempAnimalState} />  : "";
  
  
  return (
    <div className="App">
      <Header />
      <Hero />
      <Filter info = {animalsState} update = {timeToUpdate}/>
      <article className='animalGrid'>
      {animalsMap}
      </article>
      <CallToAction />
      <Footer />
      {showLargeItem}
    </div>
  )
}

export default App
