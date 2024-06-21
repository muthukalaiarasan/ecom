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
//   let unionArray = ["one",1,true]
//   unionArray.push("two")
//   unionArray.push(2)
//   unionArray.push(false)
//   console.log(unionArray);
//EXPLICIT
//  let unionArray:(string|number|boolean)[] = []
//  unionArray.push("king")
//  unionArray.push(18)
//  unionArray.push(true)
//  console.log(unionArray);
// TYPESCRIPT ANYTYPES
// BASIC TYPES
//    let empName:any = "Test"
//    console.log(empName)
//    empName = 30
//    console.log(empName);
//    empName = true
//    console.log(empName);
//ARRAY
// let anyArray:any[] =[]
// anyArray.push("king virat")
// anyArray.push("18")
// anyArray.push(true)
// anyArray.push("Miyan siraj")
// anyArray.push("73")
// anyArray.push(true)
// console.log(anyArray);
// OBJECT
// type Employee = {
//     empname:any,
//     age:any
// }
// let employee:Employee;
// employee  = {
//     empname:"test",
//     age:23
// }
// console.log(employee);
// employee = {
//     empname:22,
//     age:"testing"
// }
// console.log(employee);
