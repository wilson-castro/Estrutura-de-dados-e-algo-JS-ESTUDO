const numbers = [1, 2, 3, 4, 5, 6];

// Criar um valor a partir do outro
let numbers2 = Array.from(numbers);
    //Criar um array a partir do outro levando apenas elementos que satisfizerem a condição
let evens = Array.from(nubmers, x => (x % 2 === 0 ));

// Criar um array a parit dos argumetnos
let numbers3 = Array.of(1);
let numbers4 = Array.of(1,2,3,4,5);
  //  codigo igual a: let numbers3 = [1] e let numbers4 = [1,2,3,4,5], respectivamente
  // Tambeém pode ser usado para copiar arrays
let numbersCopy = Array.of(...numbers);


// Preencher o array com os valores, indice inicial e final
numbersCopy.fill(0) // Todos os numeros
numbersCopy.fill(2,1) //Todos os numeros a partir do indice 1
numbersCopy.fill(1,3,5) // Todos os numeros do indice 3 ate o 5

// Copiar sequencia de aray a partir do indice
let copyArray = [1, 2, 3, 4, 5, 6];

// sequencia a parti do indice 3 vai ser colocado do 0 [4,5,6,4,5,6]
copyArray.copyWithin(0, 3);
copyArray = [1, 2, 3, 4, 5, 6];

copyArray.copyWithin(1,3,5)