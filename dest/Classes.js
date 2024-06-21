"use strict";
// Class
class user {
    constructor(x) {
        this.id = x;
    }
}
let userObject = new user(19);
console.log(userObject);
// class implemets interfaces
class Person {
    constructor(id, name) {
        this.getName = () => {
            return this.name;
        };
        this.id = id;
        this.name = name;
    }
}
