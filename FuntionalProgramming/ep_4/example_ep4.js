/**
 * EP4
 * Custom Higher-Order Functions
 */

// Sample Array
const persons = [
    { name: "John", age: 17 },
    { name: "Jane", age: 10 },
    { name: "Jim", age: 15 }
]
// Sample Array


// 1. My Filter
// Example Create Higher-Order Functions Like Filter

console.log('Begins My Filter --> \n');

// // 1.1 Simple Call
console.log('My Filter Simple Call');
function myFilterSimpleCall(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (callback(element)) {
            result.push(element);
        }
    }
    return result;
}

const kidsMyFilterSimpleCall = myFilterSimpleCall(persons, person => person.age <= 15);
console.log('Kids: ', kidsMyFilterSimpleCall)

// // 1.2 Add to Array
/**Dont Use This, Not Recommend */
console.log('My Filter Add to Array');
Array.prototype.myFilter = function myFilterAddtoArray(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        if (callback(element)) {
            result.push(element);
        }
    }
    return result;
}

const kidsMyFilterAddtoArray = persons.myFilter(person => person.age <= 15);
console.log('Kids: ', kidsMyFilterAddtoArray)

console.log('\n<-- My Filter \n');

// 1. My Map
// Example Create Higher-Order Functions Like Map

console.log('Begins My Map --> \n');

// // 1.1 Simple Call
console.log('My Map Simple Call');
function myMapSimpleCall(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        result.push(callback(element));
    }
    return result;
}

const olderMyMapSimpleCall = myMapSimpleCall(persons, person => ({
    ...person,
    age: person.age * 2
}));
console.log('Older persons: ', olderMyMapSimpleCall)

// // 1.2 Add to Array
/**Dont Use This, Not Recommend */
console.log('My Map Add to Array');
Array.prototype.myMap = function myMapAddtoArray(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        result.push(callback(element));
    }
    return result;
}

const olderMyMapAddtoArray = persons.myMap(person => ({
    ...person,
    age: person.age * 2
}));
console.log('Older persons: ', olderMyMapAddtoArray)

console.log('\n<-- My Map \n');


