export  interface Animalinterface {
  animalId: string;
    name:string;
    type:string;
    race:string;
    size:string;
    location:string;
    Energy:string;
    age:string;
    booked:boolean;
    picture:string;
    WellWith:string[];
  
  }

export interface Adopted {
  animalName: string;
  animalId: string;
}