//      LOOPS ASSIGNMNET

//  1. Creating a Lesson Plan ( Using for loop )

const myWork = [];

for(let i = 1 ; i <= 10 ; i++ ){
    let lessons = {
        name : `lesson ${i}`,
        status : 2 % i !== 0 ? true : false , 
    }
 myWork.push(lessons);
}
 console.log(myWork);

//2. Guessing Game (Using while loop)
let maxiNum =  10; 

const randomNum : any = Math.floor(Math.random()* maxiNum);

let trackGuess : boolean = false ;
let predefinedNum = [4, 6, 7, 8, 3, 2,];

let i= 0;
while(!trackGuess && i < predefinedNum.length){
    const Guess = predefinedNum[i];
    if(Guess === randomNum){
        trackGuess = true;
        console.log(`your guess of ${Guess} is correct!`);
    } else {
        console.log(`your guess of ${Guess} is Incorrect!`);
    }
    i++;
}

//3. Counter Incrementer (Using do while loop )

// Create a variable counter and initialize it to 0
let  counter = 0 ;
let step = 1 ;
// In the loop, print the counter to the console and increment it by the step amount each iteration
do {
console.log(`counter = ${counter}`);
counter += step
} while (counter <= 100)

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
 // Use a for loop to iterate 10 times
 let myArray: any = [];
 for(let i = 1 ; i <= 10; i++){
    myArray.push(i);
 }

// After populating the array, log the myArray into the console
 console.log(myArray);

// Adjust the number of iterations based on the number of values in the array.
//Output each array element along with its index into the console.
for(let i = 0 ; i < myArray.length; i++){
    console.log(`Index${i}: ${myArray[i]}`)
 }

// Use a for...of loop to iterate through the array elements.
// Output each array element directly into the console.
for(let array of myArray){
    console.log(`element ${array}`)
}