function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

//sayMyName;

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){

    let result = number1 + number2
    console.log("Divyashi");
    return result
}
const result = addTwoNumbers(3, 4)

//console.log("Result: ",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return 

    }
    return '${username} just logged in'
}

// console.log(loginUserMessage("divyanshi"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,600));

const user = {
    username: "Divyanshi",
    price: 199
}

function handleObject(anyobject){
    console.log('Username is ${anyobject.username} and price is ${anyobject.price}');

}

handleObject(user)



const myNewArray = [200, 400, 100, 600]

function returnSecondaryValue(getArray){
    return getArray[1]
}

console.log(returnSecondaryValue(myNewArray));