// function recursivefunction(someParam){
//     recursivefunction(someParam);
// } Diretamente

// function recursivefunction1(someParam){
//   recursivefunction2(someParam);
// }

// function recursivefunction2(someParam){
//   recursivefunction1(someParam);
// } Indiretamente


// function understandRecursiveFunction(doIunderstandRecursiveFunction){
//   const recursiveAnswer = confirm('Do you understand Recursive Function?');
//   if (recursiveAnswer === true) {
//   return true;    
//   }
//   understandRecursiveFunction(recursiveAnswer);
// }

function factorialIterative(number) {
  if( number < 0) return undefined;
  let total = 1;
  for(let n = number; n > 1; n--){
    total += n;
  }
  return total;
}
console.log(factorialIterative(5));

function factorial(n){
  if(n === 1 || n === 0){
    return 1;
  }
  return n * factorial(n -1 );
}
console.log(factorial(5));


function fibonacciIterative(n) {
  if (n < 1) { return 0; }
  let fibNMinus2 = 0;
  let fibNMinus1 = 1;
  let fibN = n;
  for (let i = 2; i <= n; i++) {
    fibN = fibNMinus1 + fibNMinus2;
    fibNMinus2 = fibNMinus1;
    fibNMinus1 = fibN;
  }
  return fibN;
}

function fibonacci(n) {
  if (n < 1) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

