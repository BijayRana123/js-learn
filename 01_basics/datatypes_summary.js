// Primitive

//7 types => Number, String, Boolean, null, undefined, BigInt, Symbol
 
const score = 45;
const scoreVal = 100.344;

const isLogIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 123456753423355n;   //became BigInt

const heros = ["batman", "spiderman", "wolverine"];
let myObj = {
    name: "Batman",
    age: 50,
};
const myFunction = function () {
    console.log("Hello World!");
}



//Reference(Non-Primitive)
//Array, Objects, Functions


/************************************ */
//Stack(Primitive)  => gives the copy of the value
//Heap(Reference)   =>gives the actual reference of the data stored

let myName = "Bijay";
let aliasName = myName;
aliasName = "bjane717";

console.log(myName);
console.log(aliasName);  

let userOne = {
    name: "Bijay",
    age: 32,
};
let userTwo = userOne;
userTwo.age = 31;
console.log(userOne.age);
console.log(userTwo.age);





