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
import AdoptionForm from "./modules/AdoptionForm";
import { FilterInterface } from "./modules/interfaces";
import ThankYou from "./modules/ThankYou";

function App() {
  //stor info flip
  const [showLarge, flipBoolean] = useState(false);
  //vidare efter stor info
  const [showInterest, flipInterest] = useState(false);
  const [showThankYou, flipThankYou]= useState(false)

  // CTA blocket
  const [callToActionBoolean, callToActionShow] = useState(false);
  //alla djur
  const [animalsState, setAnimal] = useState<Animalinterface[]>(animals);
  // temporära djur som läggs i stor info
  const [tempAnimalState, setTempAnimal] = useState(
    animals[0]
  );
    // adopted( animalID, Namn ,Telefonnummer, E-post )
  const [adopted, setAdopted] = useState<Adopted[]>([]);
   // filter state för filterfunktion
  const [filter, setFilter] = useState<FilterInterface | any>({});
  // utfiltrerade Djur som mappas ut i fyrkanterna
  const [filteredAnimal, setFiltered] = useState<Animalinterface[]>(animals);
  // temporär array som används vid filter


  let tempArray: Animalinterface[] = [];


// visar stor info
  function showOverlay(temp:any) {
    setTempAnimal(temp);
    flipBoolean(!showLarge);
  }
// tar bort stor info och visar boknings sidan
  function switchToForm() {
    flipBoolean(!showLarge);
    flipInterest(!showInterest);
  }

  function showCallToAction(){
    callToActionShow(!callToActionBoolean)
  }

  function showThankYouPage(){
    flipThankYou(!showThankYou);
  }

  function adoptConfirmed(adoptedAnimal: Adopted) {
    let TempAdopted = [];

    for (let index = 0; index < animalsState.length; index++) {
      const singleAnimal = animalsState[index];
      if (singleAnimal.name == adoptedAnimal.animalName) {
        let tempAnimalArray = [...animalsState];
        tempAnimalArray[index].booked = true;
        setAnimal(tempAnimalArray);
      }
    }
    TempAdopted = [...adopted, adoptedAnimal];
    setAdopted(TempAdopted);
    flipInterest(!showInterest);
    showThankYouPage();
  }

  function timeToUpdate(e:any) {
    let filterTemp
    if (e.target.value == "Any") {
      const prop = e.target.name;
      const tempDelete = {...filter} 
      delete tempDelete[prop];
      filterTemp = tempDelete
      // setFilter(tempDelete)
    } else {
      filterTemp={
        ...filter,
        [e.target.name]: e.target.value,
      };
    }
    for (let index = 0; index < animalsState.length; index++) {
      const singleCompareAnimal: Animalinterface = animalsState[index];
      let test = Object.entries(filterTemp).every(
       // @ts-ignore
        ([key, value]) => singleCompareAnimal[key] === value
      );
      if (test === true) {
        tempArray.push(singleCompareAnimal);
      }
    }
    setFilter(filterTemp)
    setFiltered(tempArray);
    console.log(tempArray)
  
  }

  const animalsMap = filteredAnimal.map((animal, index) => {
    return (
      <Animals
        showOverlay={showOverlay}
        info={animal}
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
  ) : (
    ""
  );

  const showThank = showThankYou ? (
    <ThankYou close= {showThankYouPage}/>
  ) : (
    ""
  );

  const showAction = callToActionBoolean ? (<AdoptionForm switchToAdoption = {showCallToAction} showOverlay = {showCallToAction}/>) : "";

  return (
    <div className="App">
      <Header />
      <Hero />
      <Filter
        info={animalsState}
        update={timeToUpdate}
      />
      <article className="animalGrid">{animalsMap}</article>
      <CallToAction
      showCallToAction = {showCallToAction}
      />
      <Footer />
      {showLargeItem}
      {showInterestPage}
      {showAction}
      {showThank}
    </div>
  );
}

export default App;
