// lib/counter.js
let counter = 1;

function increment() {
  counter++;
}

function decrement() {
  counter--;
}

export { counter, increment, decrement }; // a list of exported variables
