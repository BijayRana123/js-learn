let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());

// let createdDate = new Date(2024,11,5);
// console.log(createdDate.toDateString());
// let createdDateTime = new Date(2024,11,5,11,2);
// console.log(createdDateTime.toLocaleString());
let formatDate = new Date("2024-12-05");
// console.log(formatDate.toLocaleString());
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(formatDate.getTime() - myTimeStamp);




