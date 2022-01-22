
// Se ele n for instaciado precisa passar o tipo
let numbersTyped: number[];
let numbersNotTyp = [1,2,3,4];

interface Person {
  name: string;
  age: number;
}

// let friendsTyped: {name: string; age:number}[];
// const friendsTyped: Person[] = [];
const friendsTyped: {name: string; age: number}[] = [
  {name: 'John', age: 30},
  {name: 'Ana', age: 20},
  {name: 'Chris', age: 25},
]
function comparPerson(a: Person, b: Person){
  if(a.age < b.age){
    return -1;
  }
  if(a.age > b.age){
    return 1;
  }
  return 0;
}
