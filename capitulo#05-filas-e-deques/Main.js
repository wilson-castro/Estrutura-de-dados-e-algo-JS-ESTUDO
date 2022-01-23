import Queue from "./queue";
import Deque from "./deque";

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue('John');
queue.enqueue('Jack');
console.log(queue.toString());

queue.enqueue('Camila');

console.log(queue.toString());
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
queue.dequeue();
console.log(queue.toString());

const deque = new Deque();
console.log(deque.isEmpty());
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString());
deque.addBack('Camila');
console.log(deque.toString());
console.log(deque.size());
console.log(deque.isEmpty());
deque.removeFront();
console.log(deque.toString());
deque.removeBack();
console.log(deque.toString());
deque.addFront('john');
console.log(deque.toString());

console.log('=-=-=-=-=-=-=-=-= HOT POTATO =-=-=-=-=-=-=-=');

function hotPotato(elementList, num) {
  const queue = new Queue();
  const elimitatedList = [];
  
  for (let i = 0; i < elementList.length; i++){
    queue.enqueue(elementList[i]);
  }
  while( queue.size() > 1){
    for (let i = 0; i < num; i++){
      queue.enqueue(queue.dequeue());
    }
    elimitatedList.push(queue.dequeue());
  }
  return{
    aliminated: elimitatedList,
    winner: queue.dequeue(),
  }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);
result.aliminated.forEach( name => {
  console.log(`${name} was aliminated from the Hot Potato game.`);
});
console.log(`The Winner is: ${result.winner}`);

console.log('=-=-=-=-=-=-=-=-= Palindromo =-=-=-=-=-=-=-=');

function palindromoChecker(aString) {
  if (aString === undefined || aString === null || ( aString !== null && aString.length === 0 )) {
    return false;
  }
  const deque = new Deque();
  const lowerString = aString.toLocaleLowerCase().split(' ').join('');
  let isEqual = true
  let firstChar, lastChar;
  for (let i = 0; i < lowerString.length; i++){
    deque.addBack(lowerString.charAt(i));
  }
  while (deque.size() > 1 && isEqual) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if(firstChar !== lastChar){
      isEqual  = false;
    }
  }
  return isEqual;
}

console.log('a', palindromoChecker('a'));
console.log('aa', palindromoChecker('aa'));
console.log('kayak', palindromoChecker('kayak'));
console.log('level', palindromoChecker('level'));
