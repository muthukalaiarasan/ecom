// Class

class user {
    id: number 

    constructor(x:number){
        this.id=x
    }
}

let userObject = new user(19)
console.log(userObject);

// Interface

interface personInterface {
    id:number,
    name:string
}

// class implemets interfaces

class Person implements personInterface{
    id:number
    name:string

    constructor(id:number, name:string) {
        this.id = id
        this.name = name 
    }

    getName = () =>{
        return this.name
    }
}