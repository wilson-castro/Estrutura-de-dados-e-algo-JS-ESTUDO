const numbers = [1,2,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// revertsão
numbers.reverse();
console.log('Reverse', numbers);

// ordenação lexográfico, como se fosse Strings
numbers.sort();
console.log('Sort', numbers);

// caso b maior q a negativo, a maior q b positivo e 0 iguais, sort entende e organiza
numbers.sort((a,b) => a - b);
console.log('Sort Customizado', numbers);

function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }

  return 0;
}
numbers.sort(compare);

const friends = [
  {name: 'John', age: 30},
  {name: 'Ana', age: 20},
  {name: 'Chris', age: 25},
];
function comparePerson(a, b){
  if(a.age < b.age){
    return -1;
  }
  if(a.age > b.age){
    return 1;
  }
  return 0;
}
console.log(friends.sort(comparePerson));

let names = [ 'John', 'Ana', 'john', 'ana'];

// Converte com as posições no ascii
console.log(names.sort());

names = [ 'John', 'Ana', 'john', 'ana'];

// ordena com a posicoes no ascii usando as minuscula na frente
console.log(names.sort((a, b) => {
  if(a.toLocaleLowerCase() < b.toLocaleLowerCase())
    return -1;
  if(a.toLocaleLowerCase() > b.toLocaleLowerCase())
    return 1;
  return 0;
}));

// Prioriza sem acento e leras de minuscula a maiscula
names.sort((a, b) => a.localeCompare(b));

