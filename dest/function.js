"use strict";
// TYPESCRIPT FUNCTIONS
// FUNCTION TYPE
// let greet:Function;
//  let greet = () =>{
//     return "hello";
// }
//FUNCTION WITH PAREMETERS 
// let add = (a:number,b:number) => {
//     return a+b
// }
// console.log(add(10,40));
//FUNCTION WITH UNION TYPES PARAMS
// let add = (a:number,b:number,c:(number|string)): number => {
//       if (typeof c=== "number") {
//         return a+b+c
//       }
//       return a+b
// }
//  console.log(add(10,10,"12"));
//FUNCTION WITH OPTIONAL PARAMS
// let add = (a:number,b:number,c?:(number|string)): number => {
//       if (typeof c=== "number") {
//         return a+b+c
//       }
//       console.log(c);
//       return a+b
// }
//  console.log(add(10,10,));
//FUNCTION WITH DEFAULT VALUES
// let add = (a:number,b:number,c:(number|string)=50): number => {
//     if (typeof c=== "number") {
//       return a+b+c
//     }
//     console.log(c);
//     return a+b 
// }
// console.log(add(10,10,));
// FUNCTION WITH TYPE ALIAS PARAM
// type StrNum = string | number
// let add = (a:number,b:number,c:StrNum=80): number => {
//     if (typeof c=== "number") {
//       return a+b+c
//     }
//     console.log(c);
//     return a+b 
// }
// console.log(add(10,10,));
// type User = {
//   name:string,age:number
// }
// let printObject = (user:User) => {
//   console.log(`name is ${user.name} and age is ${user.age}`);
// }
// printObject({name:"raja",age:23})
//REST PARAMS
// let add = (a:number,b:number,...c:number[]): number => {
//     console.log(c);
//     let d =c.reduce((x,y)=> x+y,0)
//     return a+b+d 
// }
// console.log(add(10,10,1,1,2,3,3));
// FUNCTION SIGNATURE
// let add : (x:number,y:number,...z:number[]) => number;
// add = (a:number,b:number,...c:number[]): number => {
//   console.log(c);
//   let d =c.reduce((x,y)=> x+y,0)
//   return a+b+d 
// }
// console.log(add(10,10,1,1,2,3,3));
