// lib/counter.js
export let counter = 1;

function increment() {
  counter++;
}

function decrement() {
  counter--;
}

export {increment,decrement}; // a list of exported variables
