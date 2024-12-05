//array
const num = [1,2,3,4,5];
const heros = ['batman','spiderman'];
const arr2 = new Array(1,2,3,4,5);
// console.log(heros[1]);

//array methods
// heros.push("wolverine");
// heros.push("iron-man");
// console.log(heros);
// heros.pop();
// console.log(heros);
// console.log(num.unshift(7));
// console.log(num);
// num.shift();
// console.log(num);
// console.log(num.includes(4));
// // console.log(num.indexOf(4));
// const newNum = num.join();  // returns into string
// console.log(num);
// console.log(newNum);
// console.log(typeof newNum);

//slice and splice
// console.log("A ", num);
// const mNa = num.slice(1,3);
// console.log(mNa);
// console.log("B ", num);
// const mNb = num.splice(1,3);
// console.log(mNb);
// console.log("C ", num);

//part2

const marvel_heros = ["spiderman", "thor", "ironman"];
const dc_heros = ["batman", "flash", "aquaman"];
// marvel_heros.push(dc_heros);  //pushes array into another array
// console.log(marvel_heros);
// const all_heros = marvel_heros.concat(dc_heros);
// console.log(all_heros);

// const all_heros = [...marvel_heros, ...dc_heros];  //known as "spread"
// console.log(all_heros);

// const arr =[1,2,3,[4,3,5],6,7,[2,3,[4,5,[6,7,8]]]];
// console.log(arr.flat(Infinity));

console.log(Array.isArray("Bijay"));
console.log(Array.from("Bijay"));
console.log(Array.from({name: "Bijay"}));  //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));


















