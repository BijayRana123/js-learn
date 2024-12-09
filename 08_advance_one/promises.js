// const promiseOne = new Promise(function (resolve, reject) {
//     //do asynchronus task
//     //db calls, crptography, network
//     setTimeout(function () {
//         console.log("Async task complete!");
//         resolve();
//     },2000);
// })
// promiseOne.then(function () {
//     console.log("promiseOne consumed");
// })
// new Promise(function (resolve, reject) {
//     //do asynchronus task
//     //db calls, crptography, network
//     setTimeout(function () {
//         console.log("Async task 2 complete!");
//         resolve();
//     },1000);
// }).then(function () {
//     console.log("Task2 consumed");
// })

// const promiseThree = new Promise((resolve,reject) => {
//     setTimeout(()=>
//         resolve({username: "Bijay", email:"bj@example.com"})
//     ,1000);
// });
// promiseThree.then((user) => console.log(user));

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         const error = true;
//         if(!error){
//             resolve({username:"Bijay", email:"user@example.com"});
//         }else{
//             reject("Error: Something went wrong");
//         };
//     },1000);
// });
// promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// }).then((username)=> console.log(username))
// .catch((error) =>console.log(error))
// .finally(()=>console.log("The promise is completed either by resolving or rejecting."));

// const promiseFive = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         const error = true;
//         if(!error){
//             resolve({username:"Javascript", email:"javascript@example.com"});
//         }else{
//             reject("Error: Something went wrong");
//         };
//     },1000);
// });
// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     };
// };
// consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     };
// };
// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json();
})
.then((data) => console.log(data))
.catch((err) => console.log(err));