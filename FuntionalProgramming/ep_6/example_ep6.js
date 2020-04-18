/**
 * EP6
 * Recursion  
 */

// What's Recursion ?
console.log('Begins What is Recursion? --> \n');

function countDown(n) {
    if (n < 0) return;
    console.log('Count down: ', n);
    countDown(n - 1);
}
countDown(10);

console.log('\n<-- What is Recursion? \n');

// 1. Why/When should we use Recursion?
// // 1.1 Shorter and more readable
// // 1.2 A problem can be built off of sub-problem

// 2. How to use Recursion?
// // 2.1 Base case
// // 2.2 Recursion case

// Example Find Factorial of 4
console.log('Begins Example Find Factorial 4 --> \n');

// f(1) = 1
// f(2) = 2 * f(1)
// f(3) = 2 * f(2)
// f(4) = 2 * f(3) => 24

function factorial(n) {
    if (n === 1) return 1; // Base case
    return n * factorial(n - 1); // Recursion case
}
console.log('Factorial: ', factorial(4));

console.log('\n<-- Example Find Factorial 4 \n');

// Example Reverse String
console.log('Begins Example Reverse String \'abc\' --> \n');

// c => c
// bc => reverse(c) + b
// abc => reverse(bc) + a => cba

function reverse(str) {
    if (str.length === 1) return str; // Base case
    const [firstCharacter] = str;
    const remainingCharacters = str.substring(1)
    return reverse(remainingCharacters) + firstCharacter; // Recursion case
}
console.log('Reverse: ', reverse('abc'));

console.log('\n<-- Example Reverse String \'abc\' \n');
