let score = 400
const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 65.56
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(2));

const hundread = 1000000
console.log(hundread.toLocaleString('en-IN'));

// Gives the Minimum and Maximum value
console.log(`The minimum value is: ${Number.MIN_VALUE}`);
console.log(`The Maximum value is: ${Number.MAX_VALUE}`);

// Give the maximum and minimum out of 2 variables
console.log(`The min value is: ${Math.min(2,4)}`);
console.log(`The max value is: ${Math.max(2,4)}`);

// gives the Absolute and round value
console.log(`The absolute value is: ${Math.abs(-3)}`);
console.log(`The round  value is: ${Math.round(4.5)}`);

// To print random value
console.log(Math.random());



