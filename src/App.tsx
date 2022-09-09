
import { SetStateAction, useState } from 'react';
import Header from './modules/Header';
import Hero from './modules/Hero';
import Filter from './modules/Filter';
import Animals from './modules/Animals';
import CallToAction from './modules/CallToAction';
import Footer from './modules/Footer';
import {animals} from './context.json'
import {Animalinterface, Adopted} from './modules/interfaces'
import LargeInfo from './modules/LargeInfo';
import Form from './modules/Form'

function App() {
  const [showLarge, flipBoolean] = useState(false)
  const [showInterest, flipInterest] = useState(false)
  const [animalsState , setAnimal] = useState<Animalinterface[]>(animals)
  const [tempAnimalState , setTempAnimal] = useState<Animalinterface>(animals[0])
  const [adopted , setAdopted] = useState<Adopted[]>()
  // adopted( animalID, Namn ,Telefonnummer, E-post )
 
   function showOverlay(temp: SetStateAction<Animalinterface>){
    setTempAnimal(temp)
    flipBoolean(!showLarge)
  }

  function switchToForm(){
    flipBoolean(!showLarge)
    flipInterest(!showInterest)
  }

   function adoptConfirmed(adoptedAnimal: SetStateAction<Adopted>){
    // let Temparray = [...adopted, adoptedAnimal]
    // setAdopted(Temparray)
    flipBoolean(!showInterest)
  }


  function timeToUpdate(filterArguments:Animalinterface){ 
  //   const tempArray = [...animalsState];
  //   // tempArray.filter(filterArguments)
  //   setAnimal(tempArray)
  }
 






  const animalsMap = animals.map((animal, index) => {
    return <Animals showOverlay= {showOverlay} info = {animal} update = {timeToUpdate} index= {index} key = {index}/>
  })
  const showInterestPage = showInterest? <Form switchToForm= {switchToForm} info= {tempAnimalState} adoptConfirmed = {adoptConfirmed} />  : "";
  const showLargeItem = showLarge? <LargeInfo switchToForm = {switchToForm} showOverlay= {showOverlay} info= {tempAnimalState}  />  : "";
  
  
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
      {showInterestPage}
    </div>
  )
}

export default App
