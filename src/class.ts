// Typescript class

// Simple Class

class User {

    id:number

    constructor(x:number) {
        this.id = x
    }
}

let userObject = new User(100)

console.log(userObject.id);



//INTERFACE

interface PersonInterface {
    name:string
    id:number
}

interface AddressInterface{
    city:string
}

// class Implement interface 

  class Person implements PersonInterface,AddressInterface {
    name:string
    id: number
    city:string

    constructor(name:string,id:number,city:string){
        this.name = name
        this.id = id
        this.city = city
       
    }

    getName = () =>{
         return this.name
    }
  }

  let person = new Person("John",24, "Tenkasi")

  console.log(person.name);

  console.log(person.getName());


  //Extends


  class Student extends Person{
    StudentId:number = 105

    print(){
        console.log(`Name is ${this.name}  and StudentId is ${this.StudentId}`);
      
    }
  }

  let student = new Student("Raja",101,"tenkasi")

  student.print()


  
  
  



