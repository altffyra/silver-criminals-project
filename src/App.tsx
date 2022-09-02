
import { useState } from 'react';
import './App.css';
import Header from '../modules/Header';
import Hero from '../modules/Hero';
import Filter from '../modules/Filter';
import Animals from '../modules/Animals';
import CallToAction from '../modules/CallToAction';
import Footer from '../modules/Footer';


function App() {
  const API:string = 'https://getyourpet.com/api/partnerpetsearch'


  const Gender: string = "f"
  const PetType: string = "c"
  const SizeMin:string = "xs"
  const SizeMax:string = "xs"
  const GoodWithChildrenUnder5:string = "t"
  const GoodWithChildren5to10:string  = "t"
  const GoodWithCats:string  = "t"
  const GoodWithDogs: string = "t"



GETDATA(Gender, PetType, SizeMin, SizeMax, GoodWithChildrenUnder5, GoodWithChildren5to10, GoodWithCats, GoodWithDogs)

async function GETDATA(Gender:string, PetType:string, SizeMin:string, SizeMax:string, GoodWithChildrenUnder5:string, 
  GoodWithChildren5to10:string, GoodWithCats:string, GoodWithDogs:string )
{

  const response = await fetch(`${API}`, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "ZipCode": "20015",
      "SearchRadiusInMiles": 500,
      "PageNumber": 1,
      "Gender": Gender,
      "PetType": PetType,
      "SizeMin": SizeMin,
      "SizeMax": SizeMax,
      "GoodWithChildrenUnder5": GoodWithChildrenUnder5,
      "GoodWithChildren5to10": GoodWithChildren5to10,
      "GoodWithCats" : GoodWithCats,
      "GoodWithDogs" : GoodWithDogs
    })
  })
  const data = await response.json()
}



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
