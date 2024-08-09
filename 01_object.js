//singleton

//object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Divyanshi",
    Age: 18,
    [mySym] : "mykey1",
    location: "Bhopal",
    email: "divyanshi@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym]);

JsUser.email = "saxena@google.com"
Object.freeze(JsUser)
JsUser.email = "divyanshi@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log('Hello Js User, $(this.name)');
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());