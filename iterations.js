// const coding = ["js", "ruby", "java", "python", "cpp"]

// // coding.forEach( function (val){
// //     console.log(val);
// // } )

// // coding.forEach( (item) => {
// //     console.log(item);
// // } )

// // function printMe(item){
// //     console.log(item);
// // }

// // coding.forEach(printMe)

// // coding.forEach( (item, index, arr)=> {
// //     console.log(item, index, arr);
// // } )

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (item) => {

//     console.log(item.languageName);
// } )
//  26 changes: 26 additions & 0 deletions26  
// 05_iterations/four.js
// Original file line number	Diff line number	Diff line change
// @@ -0,0 +1,26 @@
// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
// }

// for (const key in myObject) {
//     //console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     //console.log(programming[key]);
// }

// // const map = new Map()
// // map.set('IN', "India")
// // map.set('USA', "United States of America")
// // map.set('Fr', "France")
// // map.set('IN', "India")

// // for (const key in map) {
// //     console.log(key);
// // }
//  34 changes: 34 additions & 0 deletions34  
// 05_iterations/nine.js
// Original file line number	Diff line number	Diff line change
// @@ -0,0 +1,34 @@
// const myNums = [1, 2, 3]

// // const myTotal = myNums.reduce(function (acc, currval) {
// //     console.log(`acc: ${acc} and currval: ${currval}`);
// //     return acc + currval
// // }, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(myTotal);


// const shoppingCart = [
//     {
//         itemName: "js course",
//         price: 2999
//     },
//     {
//         itemName: "py course",
//         price: 999
//     },
//     {
//         itemName: "mobile dev course",
//         price: 5999
//     },
//     {
//         itemName: "data science course",
//         price: 12999
//     },
// ]

// const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);
//  10 changes: 10 additions & 0 deletions10  
// 05_iterations/seven.js
// Original file line number	Diff line number	Diff line change
// @@ -0,0 +1,10 @@
// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNumers.map( (num) => { return num + 10})

// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)

// console.log(newNums);
//  45 changes: 45 additions & 0 deletions45  
// 05_iterations/six.js
// Original file line number	Diff line number	Diff line change
// @@ -0,0 +1,45 @@
// // const coding = ["js", "ruby", "java", "python", "cpp"]


// // const values = coding.forEach( (item) => {
// //     //console.log(item);
// //     return item
// // } )

// // console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newNums = myNums.filter( (num) => {
// //     return num > 4
// // } )

// // const newNums = []

// // myNums.forEach( (num) => {
// //     if (num > 4) {
// //         newNums.push(num)
// //     }
// // } )

// // console.log(newNums);


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   let userBooks = books.filter( (bk) => bk.genre === 'History')

//   userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })
//   console.log(userBooks);
   
// // 05_iterations/three.js
// // Original file line number	Diff line number	Diff line change
// // @@ -0,0 +1,40 @@
// // for of

// // ["", "", ""]
// // [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     //console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     //console.log(`Each char is ${greet}`)
// }

// // Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// // console.log(map);

// for (const [key, value] of map) {
//     // console.log(key, ':-', value);
// }

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// // for (const [key, value] of myObject) {
// //     console.log(key, ':-', value);

// // }
   
// // 05_iterations/two.js
// // Original file line number	Diff line number	Diff line change
// // @@ -0,0 +1,21 @@

// let index = 0
// // while (index <= 10) {
// //     console.log(`Value of index is ${index}`);
// //     index = index + 2
// // }

// let myArray = ['flash', "batman", "superman"]

// let arr = 0
// while (arr < myArray.length) {
//     //console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }

// let score = 11

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10);