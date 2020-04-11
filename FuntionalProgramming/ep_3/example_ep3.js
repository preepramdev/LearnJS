/**
 * EP2
 * Higher-Order Functions 2/2
 */

// Sample Array
const persons = [
    { name: "John", age: 17 },
    { name: "Jane", age: 10 },
    { name: "Jim", age: 15 }
]
// Sample Array


// 1. ForEach
// Example Print every person's name and person's age in persons

console.log('Begins ForEach --> \n');
// // 1.1 Old Style
console.log('ForEach Old Style');
for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    console.log(`Name ${person.name}, age ${person.age}`);
}

// // 1.2 Use ForEach Style
console.log('Use ForEach Style');
persons.forEach((person) => {
    console.log(`Name ${person.name}, age ${person.age}`);
});

// // // 1.2.1 Use ForEach Style Shorter
console.log('Use ForEach Style Shorter');
persons.forEach(person => console.log(`Name ${person.name}, age ${person.age}`));

console.log('\n<-- End ForEach \n');

// 2. Find, FindIndex
// Example Find 'Jane' in persons
// - Find Print Jane's data
// - FindIndex Print Jane's Position in persons 

console.log('Begins Find, FindIndex --> \n');

// // 2.1 Old Style
console.log('Find, FindIndex Old Style');
let janeFindOld;
let janeIndexFindIndexOld;
for(let i =0; i < persons.length; i++) {
    const person = persons[i];
    if(person.name === 'Jane') {
        janeFindOld = person;
        janeIndexFindIndexOld = i;
        break;
    }
}
console.log('Jane :', janeFindOld);
console.log('JaneIndex :', janeIndexFindIndexOld);

// // 2.2 Use Find, FindIndex Style
console.log('Use Find, FindIndex Style');
let janeFindStyle = persons.find((person) => {
    return person.name === 'Jane';
})
let janeFindIndexStyle = persons.findIndex((person) => {
    return person.name === 'Jane';
})
console.log('Jane :', janeFindStyle);
console.log('JaneIndex :', janeFindIndexStyle);

// // // 2.2.1 Use Find, FindIndex Style Shorter
console.log('Use Find, FindIndex Style Shorter');
let janeFindStyleShorter = persons.find(person => person.name === 'Jane');
let janeFindIndexStyleShorter = persons.findIndex(person => person.name === 'Jane');
console.log('Jane :', janeFindStyleShorter);
console.log('JaneIndex :', janeFindIndexStyleShorter);

console.log('\n<-- End Find, FindIndex \n');

// 3. Every, Some
// Example 
// - Every Check is all person in persons are kid?
// - Some Check is some person in persons are kid?

console.log('Begins Every, Some --> \n');
// // 3.1 Old Style
console.log('Every, Some Old Style');
let isKidAllOldStyle = true;
let isKidSomeOldStyle = true;
for(let i =0; i < persons.length; i++) {
    const person = persons[i];
    if(person.age > 15) {
        isKidAllOldStyle = false;
        break;
    }
}
console.log('Is Kid All :', isKidAllOldStyle);
for(let i =0; i < persons.length; i++) {
    const person = persons[i];
    if(person.age <= 15) {
        isKidSomeOldStyle = true;
        break;
    }
}
console.log('Is Kid Some :', isKidSomeOldStyle);

// // 3.2 Use Every, Some Style
console.log('Use Every, Some Style');
let isKidAllEveryStyle = persons.every((person) => {
    return person.age <= 15;
})
console.log('Is Kid All :', isKidAllEveryStyle);
let isKidSomeSomeStyle = persons.some((person) => {
    return person.age <= 15;
})
console.log('Is Kid Some :', isKidSomeSomeStyle);

// // // 3.3 Use Every, Some Style Shorter
console.log('Use Every, Some Style Shorter');
let isKidAllEveryStyleShorter = persons.every(person => person.age <= 15)
console.log('Is Kid All :', isKidAllEveryStyleShorter);
let isKidSomeSomeStyleShorter = persons.some(person => person.age <= 15)
console.log('Is Kid Some :', isKidSomeSomeStyleShorter);

console.log('\n<-- End Every, Some \n');