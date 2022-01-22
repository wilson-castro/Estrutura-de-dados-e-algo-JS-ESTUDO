
// Concat
const zero = 0;
const positiveNumbers = [1, 2, 3, 4, 5, 6];
const negativeNumbers = [-1, -2, -3, -4, -5,-6];
let numbers = negativeNumbers.concat(0, positiveNumbers);

log(numbers);

const isEven = x => x % 2 === 0;

// itera até o primeira valor que der false, nesse caso 1 
numbers.every(isEven);

// itera até que o primeiro true, depois encerra, nesse caso 2 
numbers.some(isEven);

// navega por todos os elementos
numbers.forEach( x => console.log(x % 2 === 0));

// navega por todos os elemntos e retorna um array do mesmo tamanho com o resultado da callback
const myMap = numbers.map(isEven);

// navega por todos os elementos e retorno apenas os correspondentes a função
const evenNumbers = numbers.filter(isEven);

// navage por todos reduzindo o aray inicial seguindo a condição da callback
numbers.reduce((prev, curr) => prev + curr);
