// if
// const isUserloggedIn = true

// if (3 == 2){
//     console.log("executed");
// }

// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log('User power: ${power}');
// }

// console.log('User power: ${power}');

// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");


// if (balance<500) {
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle= false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}