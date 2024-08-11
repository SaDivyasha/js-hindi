const user = {
    username: "disha",
    price: 999,

    welcomeMessage: function() {
        // console.log('${this.username} , welcome to website');
        // console.log(this);
    }
}

//user.welcomeMessage()

// const chai = function(){
//     let username = "ddd"
//     console.log(this.username);
// }

// const chai = () => {
//     let username ="ddd"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)
const addTwo = (num1, num2) =>  ({username: "ddd"})
console.log(addTwo(3, 4));