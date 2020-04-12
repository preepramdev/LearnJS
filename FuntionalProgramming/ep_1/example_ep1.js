/**
 * EP1
 * Functional Programming in JavaScript
 */

//  1. Pure Funtion
function addPure(a, b) {
    return a + b;
}
console.log('Pure Funtion: ', addPure(1, 6));

// 2. Avoid Side Effect
const b = 16;
function addSideEffect(a) {
    return a + b;
}
console.log('Side Effect: ', addSideEffect(1));

// 3. First Class Funtion

// // 3.1 Assigning a funtion to a variable
const addAssigning = function (a, b) {
    return a + b;
}
console.log('Assigning: ', addAssigning(1, 6));

// // 3.2 Returning a funtion
function addReturning(a, b) {
    return function () {
        return a + b;
    }
}
const addTwoNumber = addReturning(1, 6);
console.log('Returning: ', addTwoNumber())

// // 3.3 Accepting a funtion as a argument
function addNumber(a, b) {
    return a + b;
}

function addAccepting(add, a, b) {
    return add(a, b)
}
console.log('Accepting: ', addAccepting(addNumber, 1, 6))
