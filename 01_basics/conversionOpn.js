let age = "33";

console.log(typeof age);
console.log(typeof(age));

let ageInNum = Number(age);
console.log(typeof ageInNum);

//"33" => 33
//"33abc" => Nan
//true => 1

let isLoggedIn = 1;
let boolIsLogIn = Boolean(isLoggedIn);
console.log(boolIsLogIn);

//1=> true
//"" => false
//"bijay" => true


let someNum = 33;
let stringNum = String(someNum);
console.log(typeof stringNum);