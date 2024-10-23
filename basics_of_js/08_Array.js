const myArray = [1,2,3,4,true,"Divyanshu"]
const marvel = ["Iron Man","Thor"]
console.log(myArray[0]);

// Array Methods
myArray.push(5)
console.log(myArray);
myArray.pop()
console.log(myArray);

console.log(myArray.includes(4));
console.log(myArray.indexOf(6));

// Slice and Splice
console.log("A ",myArray);

const myNewArray = myArray.slice(1,3)
console.log(myNewArray);

console.log("B ", myArray);

// Splice 
let AgainArray = myArray.splice(1,3)
console.log(`Spliced Array ${AgainArray}`);
console.log("c ", myArray);




