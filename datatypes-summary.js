// Primitive

// 7 types : String, Boolean, null, Undefined, Symbol, BigInt

const score = 100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
const bigNumber = 34657656745745748374n

//Reference [Non-primitive]

//Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"]

let myObj = {
    name: "divyanshi",
    age: 19,
}

const nyFunction  = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);