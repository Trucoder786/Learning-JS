let name = "Divyanshu"
let age = 20

// This is the normal method to print the String
console.log(name+" "+age);

// This is String interpolation method to print the String
console.log(`Hello my name is: ${name} and My age is: ${age}`);

const game = "god of war"
console.log(game.toUpperCase());
console.log(game.charAt(2));
console.log(game.indexOf('d'));
console.log(game.italics());


const newGame =  game.substr(0,3)
console.log(newGame);

const  oldGame = "    contra mario "
// Trim function will remove all space in the String 
console.log(oldGame.trim());

const url = "http://divyanshu.com/divy%20kh"
console.log(url.replace('%20','-'));





