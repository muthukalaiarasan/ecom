// console.log('TuesDay');

// let myName = 'Raghul'

// let employeeName:string = "Raghul"

// console.log(employeeName);


// let count:number = 7

// let isPermanent:boolean = true

// let multiply = (num:number) => {
//     return 10 * num
// }

// console.log(multiply(20));


/*Implicit start*/ 

// let numArray = [1,2,3]
// numArray.push(4)

// console.log(numArray); // In push we should push number only.


// let strArray = ["r","a","g","h","u"]
// strArray.push("l")

// console.log(strArray); // In push we shoul push only string.


 /*Explicit start*/
 
//let numArray:number[] = [1,2,3]
//numArray.push(4)
//
//console.log(numArray); // To define data type we have to use :number[].


//let strArray:string[] = ["r","a","g","h","u"]
//strArray.push('l')
//
//console.log(strArray); // To define data type we have to use :string[].
 

 /*Declare and Assign later*/

//let numArray:number[] // Declared
//
//numArray = [] // Array Initialize
//numArray.push(7) 
//console.log(numArray);
//
//
//
//let strArray:string[] = [];// = [] means array initialized
//
//strArray.push("R")
//console.log(strArray);


 /* Read Only */

//let strArray:readonly string[] = ["h", "i"] // Using 'readonly' we cant push values.

 //Object 

 //Implicit Object

// let employee = {
//      empName : "Raghul",
//      age : 21,
//      isPermanent : true
// }

// employee.age = 20
// console.log(employee);

 //Explicit Object

// type Empolyee = {
//     empName : string,
//     age : number,
//     isPermanent : boolean
// }

//  let employee:Empolyee = {
//     empName : "Raghul",
//     age : 21,
//     isPermanent : true
// }

 //Optional Object

// type Empolyee = {
//    empName : string,
//    age? : number,
//    isPermanent : boolean
//} // Usin ? for age we can use the object without age.
//
// let employee:Empolyee = {
//    empName : "Raghul",
//    isPermanent : true
//} // There is no age in this object but there is no error.

 // Union type (Used to declare more than one type for one data. '|' is the symbol called 'or')

// Implicit Union

// let unionArray = [2, "two", true]

// unionArray.push(3)
// unionArray.push("three")
// unionArray.push(false)

// console.log(unionArray);

// Explicit Union

// let errorCode:(string|number)

// errorCode = '401'
// errorCode = 401

// let unionArray:(string|number|boolean)[] = []

// unionArray.push('two')
// unionArray.push(2)
// unionArray.push(false)

// console.log(unionArray);


 // Any type or Dynamic type

//let exName:any = "Raghul"  
//
//console.log(exName);
//
//exName = 5
//console.log(exName);
//
//exName = true
//console.log(exName); // Here using :any we can use any data types in the exName value.

//Any type Array

// let exArray:any[] = []

// exArray.push(2)
// exArray.push("Raghul")
// exArray.push("Raghul7s")
// exArray.push(true)
// console.log(exArray);

