const numbers = [1,2,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// retorna indice do primeiro elemento correspondente ao argumento
console.log(numbers.indexOf(10));
// retorna indice do o ultimo elemento corresponde ao argumento
console.log(numbers.lastIndexOf(100));

// numbers.push(10);
console.log(numbers.indexOf(10));
console.log(numbers.lastIndexOf(6));

function multipleOf13( element, index, array ) {
  return ( element % 13 === 0 );
}
console.log(numbers.find(multipleOf13)); // Devolve o primeiro elemento que satisfaça
console.log(numbers.findIndex(multipleOf13)); // Devolve o indice do primeiro elemento que satisfaça

// Retorna true ou false para a existência do valor passado no array
console.log(numbers.includes(15));
console.log(numbers.includes(20));

// Procura se true ou false a existencia do valor a parti do indice 5
let numbers2 = [7,6,5,4,3,2,1];
console.log(numbers2.includes(4, 5));

// Array convertido em String separado por ','
console.log(numbers.toString());
// Array covertido em String separado por '-'
console.log(numbers.join('-'));