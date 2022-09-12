import { SetStateAction, useState } from "react";
import Header from "./modules/Header";
import Hero from "./modules/Hero";
import Filter from "./modules/Filter";
import Animals from "./modules/Animals";
import CallToAction from "./modules/CallToAction";
import Footer from "./modules/Footer";
import { animals } from "./context.json";
import { Animalinterface, Adopted } from "./modules/interfaces";
import LargeInfo from "./modules/LargeInfo";
import Form from "./modules/Form";
import AdoptionForm from "./modules/AdoptionForm"
import { FilterInterface } from "./modules/interfaces";

function App() {
  const [showLarge, flipBoolean] = useState(false);
  const [showInterest, flipInterest] = useState(false);
  const [callToActionBoolean, callToActionShow] = useState(false)
  const [animalsState, setAnimal] = useState<Animalinterface[]>(animals);
  const [tempAnimalState, setTempAnimal] = useState<Animalinterface>(
    animals[0]);
  const [adopted, setAdopted] = useState<Adopted[]>([]);
  const [filter, setFilter] = useState<FilterInterface | any>({});
  const [filteredAnimal, setFiltered] = useState<Animalinterface[]>(animals);
  let tempArray: Animalinterface[] = [];

  // adopted( animalID, Namn ,Telefonnummer, E-post )

  function showOverlay(temp: SetStateAction<Animalinterface>) {
    setTempAnimal(temp);
    flipBoolean(!showLarge);
  }

  function switchToForm() {
    flipBoolean(!showLarge);
    flipInterest(!showInterest);
  }

  function adoptConfirmed(adoptedAnimal: Adopted) {
    let TempAdopted = [];

    for (let index = 0; index < animalsState.length; index++) {
      const singleAnimal = animalsState[index];
      if (singleAnimal.name == adoptedAnimal.animalName) {
        let tempAnimalArray = [...animalsState];
        tempAnimalArray[index].booked = true;
        setAnimal(tempAnimalArray);
        console.log(animalsState);
      }
    }
    TempAdopted = [...adopted, adoptedAnimal];
    setAdopted(TempAdopted);
    flipInterest(!showInterest);
    alert("Du är nu bokad för " + adoptedAnimal.animalName);
    console.log(adopted);
  }
  function cancelFilter() {
    setFiltered(animals);
    tempArray = [];
  }
  function timeToUpdate(e: any, filterArguments: Animalinterface) {
    console.log(tempArray);
    if (e.target.value == "Any") {
      const prop = e.target.name;
      delete filter[prop];
      console.log(filter);
    } else {
      setFilter({
        ...filter,
        [e.target.name]: e.target.value,
      });
    }

    for (let index = 0; index < animalsState.length; index++) {
      const singleCompareAnimal: Animalinterface = animalsState[index];
      let test = Object.entries(filter).every(
        ([key, value]) => singleCompareAnimal[key] === value
      );
      if (test === true) {
        tempArray.push(singleCompareAnimal);
      }
    }
    setFiltered(tempArray);
    console.log(tempArray);
  }

  const animalsMap = filteredAnimal.map((animal, index) => {
    return (
      <Animals
        showOverlay={showOverlay}
        info={animal}
        update={timeToUpdate}
        index={index}
        key={index}
      />
    );
  });
  const showInterestPage = showInterest ? (
    <Form
      switchToForm={switchToForm}
      info={tempAnimalState}
      adoptConfirmed={adoptConfirmed}
    />
  ) : (
    ""
  );
  const showLargeItem = showLarge ? (
    <LargeInfo
      switchToForm={switchToForm}
      showOverlay={showOverlay}
      info={tempAnimalState}
    />
  ) : ("");

  const showAction = callToActionBoolean ? (
    <AdoptionForm />) : "";


  return (
    <div className="App">
      <Header />
      <Hero />
      <Filter
        info={animalsState}
        update={timeToUpdate}
        filter={filter}
        setFilter={setFilter}
        cancelFilter={cancelFilter}
      />
      <article className="animalGrid">{animalsMap}</article>
      <CallToAction callToActionShow= {callToActionShow} callToActionBoolean= {callToActionBoolean}/>
      <Footer />
      {showLargeItem}
      {showInterestPage}
      {showAction}
    </div>
  );
}

export default App;
