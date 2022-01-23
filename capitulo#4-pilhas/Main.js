import StackArray from "./stack-array";
import Stack from "./stack";

const stackArray = new StackArray();
console.log(stackArray.isEmpty());

stackArray.push(5);
stackArray.push(8);

console.log(stackArray.peek());

stackArray.push(11);
console.log(stackArray.size());
console.log(stackArray.isEmpty());

stackArray.push(15);

stackArray.pop();
stackArray.pop();
console.log(stackArray.size());

const stack = new Stack();
stack.push(5);
stack.push(8);

// Vulneráveis
console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
console.log(stack.items);