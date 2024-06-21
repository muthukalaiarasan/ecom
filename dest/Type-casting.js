"use strict";
//  Type Casting (Used to convert types)
// as and <> are the syntex.  We can only use 'as' in the react.
// Unknown string to string
// let x:unknown = "Hello"
//x.length() // We can't find its length beacause it is unknown type.
// console.log((x as string).length)
// console.log((<string>x).length);
// Unknown number to string
// let y:unknown = 70
// console.log((y as string).length); //The output is undefined because we can't change its data type
//Dom
// let input = document.querySelector('input') as HTMLInputElement
// let inputValue = input.value
