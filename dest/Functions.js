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
