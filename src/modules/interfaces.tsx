export  interface Animalinterface {
    animalId: string;
    name:string;
    type:string;
    race:string;
    size:string;
    location:string;
    energy:string;
    age:string;
    booked:boolean;
    picture:string;
    WellWith:string[];
    gender:string;
    desc:string;
  }

export interface Adopted {
  animalName: string;
  animalId: string;
}