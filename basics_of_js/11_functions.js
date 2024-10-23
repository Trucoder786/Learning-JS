function SayMyName(){
    console.log("Divyanshu");
}
SayMyName()

function AddTwoNumber(num1,num2){
    console.log(num1+num2)
}
AddTwoNumber(3,10)

function cal(...num){
    return num
}
console.log(cal(200,300,400));

const user = {
    name:"Divyanshu",
    price:1999
}

function handleObject(anyObject){
    console.log(`The User name is: ${anyObject.name} and the price is: ${anyObject.price}`);   
}
handleObject(user)