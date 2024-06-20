"use strict";
// Typescript Functions
//  Function type 
//  let greet = () => {
//     return "Hello"
//  }
// Function Parameters
//  let add = (a:number, b:number) => {
//     return a+b
//  }
// console.log(add(10,20));
// Function With Return
// let add = (a:number, b:number):number => {
//     return a+b
//  }
// console.log(add(10,20));
// Function With Union types
// let add = (a:number, b:number, c:(string | number)):number => {
//     if(typeof c==='number'){
//     return a + b + c
//     }
//     return a + b
//  } 
// console.log(add(10,20,10)); //In this function we should use if because we define the type as number or string
// Function with optional params
// let add = (a:number, b:number, c?:(string | number)):number => {
//     if(typeof c==='number'){
//     return a + b + c
//     }
//     console.log(c);
//     return a + b
//  } 
// console.log(add(10,20,10)); // Using ? to make c as a optional one
// Funtion with default values
// let add = (a:number, b:number=20, c:(string | number)=10):number => {
//     if(typeof c==='number'){
//     return a + b + c
//     }
//     console.log(c);
//     return a + b
//  } 
// console.log(add(10)); // Use = for default values
// Function with Type Alias
// type StrORNum = string | number
// let add = (a:number, b:number=20, c:StrORNum=10):number => {
//     if(typeof c==='number'){
//     return a + b + c
//     }
//     console.log(c);
//     return a + b
//  } 
// console.log(add(10));  // Here we declare string|number in StrOrNum.
// Function rest params
let add = (a, b = 20, c = 20) => {
    if (typeof c === 'number') {
        return a + b + c;
    }
    console.log(c);
    return a + b;
};
console.log(add(10));
