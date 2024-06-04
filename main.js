"use strict";
//      LOOPS ASSIGNMNET
Object.defineProperty(exports, "__esModule", { value: true });
//  1. Creating a Lesson Plan ( Using for loop )
const myWork = [];
for (let i = 1; i <= 10; i++) {
    let lessons = {
        name: `lesson ${i}`,
        status: 2 % i !== 0 ? true : false,
    };
    myWork.push(lessons);
}
console.log(myWork);
//2. Guessing Game (Using while loop)
let maxiNum = 10;
const randomNum = Math.floor(Math.random() * maxiNum);
let trackGuess = false;
let predefinedNum = [4, 6, 7, 8, 3, 2,];
let i = 0;
while (!trackGuess && i < predefinedNum.length) {
    const Guess = predefinedNum[i];
    if (Guess === randomNum) {
        trackGuess = true;
        console.log(`your guess of ${Guess} is correct!`);
    }
    else {
        console.log(`your guess of ${Guess} is Incorrect!`);
    }
    i++;
}
// 3. Counter Incrementer (Using do while loop )
// // Create a variable counter and initialize it to 0
// let  counter = 0 ;
// let step = 1 ;
// do {
// console.log(`counter = ${counter}`);
// counter += step
// } while (counter <= 100)
// //4.Exploring Objects with for...in Loop   
//  let myObject : any = {
//     item1 : "Scarf",
//     item2 : "Abaya",
//     item3 : "Pins",
//  }
//  for(let obj in myObject){
//     console.log(`${obj} : ${myObject[obj]}`);
//  }
//5.Exploring Arrays with Loops(Using loop) "for" and "for of"
let myArray = [];
for (let i = 1; i <= 10; i++) {
    myArray.push(i);
}
for (let i = 0; i < myArray.length; i++) {
    console.log(`Index${i}: ${myArray[i]}`);
}
console.log(myArray);
for (let array of myArray) {
    console.log(`element ${array}`);
}
