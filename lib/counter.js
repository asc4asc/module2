// lib/counter.js
export let counter = 1;

function inc() {
  counter++;
}

function dec() {
  counter--;
}

export { inc as increment, dec as decrement }; // a list of exported variables
