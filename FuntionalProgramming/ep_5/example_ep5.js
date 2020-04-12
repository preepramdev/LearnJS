/**
 * EP5
 * Closures 
 */

// What's Closures?
console.log('Begins What is Closures? --> \n');

function outer() {
    const name = 'Outer';
    return function inner() {
        console.log('Outer name: ', name);
    }
}

const innerFuntion = outer();
innerFuntion();

console.log('\n<-- What is Closures? \n');

// Data Privacy

console.log('Begins Data Privacy --> \n');

function createTimes() {
    let counter = 0;
    return function times() {
        counter += 1;
        console.log('Counter: ', counter);
    }
}

const times = createTimes();
times();
times();

console.log('\n<-- Data Privacy \n');

// Stateful functions

console.log('Begins Stateful functions --> \n');

// function addFive(a) {
//     return a + 5;
// }

// function addTen(a) {
//     return a + 10;
// }

function createAdd(a) {
    return function (b) {
        return a + b;
    }
}

const addFive = createAdd(5);
const addTen = createAdd(10);

console.log('Add Five: ', addFive(10));
console.log('Add Five: ', addTen(10));

console.log('\n<-- Stateful functions \n');


