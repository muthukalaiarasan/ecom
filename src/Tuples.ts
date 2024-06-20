// Tuples

// Array

// let userArray = ["Raghul", 21, true]

// userArray[0]= "V.Raghul"
// console.log(userArray); // This is the method of array and this is how we can change the values.

// Tuples Array

// let userArray:[string, number, boolean] = ["Raghul", 21, true]

// userArray[0] = "V.Raghul"
// userArray[1] = 20;
// userArray[2] = false

// userArray.push(7) // We can push any data type values but can't change the type defined values.

// console.log(userArray) // In tuples we can't change the data as we want. We only change them as their types only.

// Read only   

// let userArray: readonly [string, number, boolean] = ["Raghul", 21, true]

// console.log(userArray) // By using read only we can't change or add values

//Named and accessing array

// let userArray: readonly [userName:string, age:number, isEng:boolean] = ["Raghul", 21, true]

// let [userName, age, isEng] = userArray // We get the values using Array Destructuring.

// console.log(userName, age);