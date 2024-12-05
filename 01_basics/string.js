const name = "Bijay";
const age = 31;

// console.log(name + age +"years old");
// console.log(name[0]);
// console.log(name.__proto__);
// console.log(name.length);
// console.log(name.toUpperCase());

console.log(`I am ${name} and my age is ${age}`);

const gameName = new String("Bijays-Game-com");
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('G'));
console.log(gameName);   //since primitive so the original remains same
console.log(gameName.toString());   //since primitive so the original remains same

// const newString = gameName.substring(0,6);
// console.log(newString);
// const anotherString = gameName.slice(-10,4);
// console.log(anotherString);

// const userName = "   hitesh    ";
// console.log(userName);
// console.log(userName.trim());

const url = "https://www.google.com/hitesh%20chaudhary";
console.log(url.replace('%20','-'));
console.log(url.includes('hitesh'));
console.log(`The word hitesh ${url.includes('hitesh') ? 'is' : 'is not '} in the url`);


console.log(gameName.split('-'));







