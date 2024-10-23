const user = {
    name:"Divyanshu",
    age: 20,
    location:"indore",
    email: "divyanshukhatri@gmail.com",
    isLoggedIn: false,
    loginDays: ["Monday","Tuesday"]
}
console.log(user.name);
console.log(user["name"]);

user.email = "divyanshu@gmail.com"
// if we apply freez after than we can not change any value in object
Object.freeze(user)


const course = {
    name: "Learn Js",
    price: 999,
    description: "This is course is very helpFull for beginners"
}

const {description} = course
console.log(description);

