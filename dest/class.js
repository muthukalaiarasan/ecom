"use strict";
// Typescript class
// Simple Class
class User {
    constructor(x) {
        this.id = x;
    }
}
let userObject = new User(100);
console.log(userObject.id);
// class Implement interface 
class Person {
    constructor(name, id, city) {
        this.getName = () => {
            return this.name;
        };
        this.name = name;
        this.id = id;
        this.city = city;
    }
}
let person = new Person("John", 24, "Tenkasi");
console.log(person.name);
console.log(person.getName());
//Extends
class Student extends Person {
    constructor() {
        super(...arguments);
        this.StudentId = 105;
    }
    print() {
        console.log(`Name is ${this.name}  and StudentId is ${this.StudentId}`);
    }
}
let student = new Student("Raja", 101, "tenkasi");
student.print();
