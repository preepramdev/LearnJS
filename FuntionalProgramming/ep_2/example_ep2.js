/**
 * EP2
 * Higher-Order Functions 1/2
 */

// Sample Array
const persons = [
    { name: "John", age: 17 },
    { name: "Jane", age: 10 },
    { name: "Jim", age: 15 }
]
// Sample Array


// 1. Filter
// Example Find person who have age less than or equal to 15

console.log('Begins Filter --> \n');
// // 1.1 Old Style
const kidsOldStyle = [];
for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    if (person.age <= 15) {
        kidsOldStyle.push(person);
    }
}
console.log('Filter Old Style');
console.log('Kids: ', kidsOldStyle);

// // 1.2 Use Filter Style
const kidsFilterStyle = persons.filter((person) => {
    return person.age <= 15;
});
console.log('Use Filter Style');
console.log('Kids: ', kidsFilterStyle);

// // // 1.2.1 Use Filter Style Shorter
const kidsFilterStyleShorter = persons.filter(person => person.age <= 15);
console.log('Use Filter Style Shorter');
console.log('Kids: ', kidsFilterStyleShorter);

console.log('\n<-- End Filter \n');

// 2. Map
// Example Multiply age of each person in persons by 2

console.log('Begins Map --> \n');
// // 2.1 Old Style
const oldersOldStyle = [];
for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    oldersOldStyle.push({
        ...person,
        age: person.age * 2
    });
}
console.log('Map Old Style');
console.log('Olders: ', oldersOldStyle);

// // 2.2 Use Map Style
const oldersMapStyle = persons.map((person) => {
    return {
        ...person,
        age: person.age * 2
    }
});
console.log('Use Map Style');
console.log('Olders: ', oldersMapStyle);

// // // 2.2.1 Use Map Style Shorter
const oldersMapStyleShorter = persons.map(person => ({
    ...person,
    age: person.age * 2
}));
console.log('Use Map Style Shorter');
console.log('Olders: ', oldersMapStyleShorter);

console.log('\n<-- End Map \n');

// 3. Reduce
// Example Sum age of each person in persons

console.log('Begins Reduce --> \n');
// // 3.1 Old Style
let totalAgeOldStyle = 0;
for(let i = 0; i < persons.length; i++) {
    const person = persons[i];
    totalAgeOldStyle += person.age;
}
console.log('Reduce Old Style');
console.log('Total age: ', totalAgeOldStyle);


// // 3.2 Use Reduce Style
const totalAgeReduceStyle = persons.reduce((age, person) => {
    return age + person.age;
}, 0);
console.log('Use Reduce Style');
console.log('Total age: ', totalAgeReduceStyle);

// // // 3.3 Use Reduce Style Shorter
const totalAgeReduceStyleShorter = persons.reduce((age, person) => age + person.age, 0);
console.log('Use Reduce Style Shorter');
console.log('Total age: ', totalAgeReduceStyleShorter);

console.log('\n<-- End Reduce \n');