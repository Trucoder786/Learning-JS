const user = {
    name:"Divyanshu",
    price:999,
    
    welcome: function(){
        console.log(`${this.name} welcome to website`);
        console.log(this)
    }
}

function chia(){
    console.log(this);
}
// chia()

// This is explicit method
// In the explicity method we write return statement with curly brackets

const addTwo = (num1,num2) =>{
    return num1+num2
}
console.log(addTwo(2,3));


// Another method which is called implicit method
// In this method we don't write return function 

const sub = (num1,num2) =>  Math.abs(num1-num2)

console.log(sub(4,5));

( (name) =>{
    console.log(`${name} is a good boy`)
})("Divyanshu");