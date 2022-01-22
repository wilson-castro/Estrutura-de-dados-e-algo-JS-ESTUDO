const numbers = [1, 2, 3, 4, 5, 6];

// Navegar pelos elementos
for(const n of numbers){
  console.log(n % 2 === 0? 'even' : 'odd');
}

// Criar Iterador para naveganr dentro de estrturas
let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

iterator = numbers[Symbol.iterator]();
for (const n of iterator) {
  console.log('Iterador', n);
}

// Capturando as entradas chave/valor da estrtura
let aEntries = numbers.entries();
console.log(aEntries.next().value);
console.log(aEntries.next().value);
console.log(aEntries.next().value);

aEntries = numbers.entries();

for (const n of aEntries) {
  console.log('Entrie', n);
}

// Pegar as chaves de acesso da estrtura
const aKeys = numbers.keys();
console.log('Keys', aKeys.next());
console.log('Keys', aKeys.next());
console.log('Keys', aKeys.next());

// Pegar os valores da estrtura
const aValues = numbers.values();
console.log('Values', aValues.next());
console.log('Values', aValues.next());
console.log('Values', aValues.next());