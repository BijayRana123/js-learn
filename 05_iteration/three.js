// const arr = [1,2,3,4,5];
// for (const num of arr) {
//     console.log(num);
// };

// const greetings = "Hello Bijay!";;
// for (const greet of greetings) {
//     if (greet == ' ') {
//         continue;
//     };
//     console.log(`The character is ${greet}`);
// };

//Map
// const map = new Map();
// map.set("En", "English");
// map.set("In", "Indian");
// map.set("Fr", "France");
// map.set("Fr", "France");
// // console.log(map);

// for (const [key,value] of map) {
//     console.log(`${key} :- ${value}`);
// };


// const ext = {
//     js: "JavaScript",
//     cpp: "C++",
//     rb: "Ruby",
// };
// for (const key in ext) {
//    console.log(`${key} for the extension of ${ext[key]}`);
// };

const program = ['js', 'python', 'ruby', 'c++'];
// for (const key in program) {
//     console.log(program[key]);
// };

// program.forEach(function(item){
//     console.log(item);
// });
// program.forEach((item)=>{
//     console.log(item);
// });
// function printMe(item) {
//     console.log(item);
// };
// program.forEach(printMe);

// program.forEach((item,index, arr)=>{
//     console.log(item, index, arr);
// });

const myCoding = [
    {
        languageName: "JavaScript",
        extension: "js",
    },
    {
        languageName: "Python",
        extension: "py",
    },
    {
        languageName: "C++",
        extension: "cpp",
    },
];

myCoding.forEach((item) => {
    console.log(item.languageName);
});