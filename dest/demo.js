"use strict";
// TYPE SCRIPT OBJECTS
//IMPLICIT OBJECTS
// let employee = {
//     empname :"test",
//     age:30,
//     isPermannent:true
// }
//   employee.age=31
//   employee = {
//     empname:"testing",
//     age:32,
//     isPermannent:false
//   }
//EXPLICIT OBJECTS
//  type Employee ={
//     empname:string,age:number,isPermanent:boolean
//  }
//  let employee = {
//     empname :"test",
//     age:30,
//     isPermannent:true
// }
//OPTIONAL OBJECTS
//  type Employee ={
//     empname:string,age?:number,isPermanent:boolean
//  }
//  let employee = {
//     empname :"test",
//     isPermannent:true
// }
//TYPESCRIPT UNION TYPES 
//IMPLICIT 
let unionArray = ["one", 1, true];
unionArray.push("two");
console.log(unionArray);
