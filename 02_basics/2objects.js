const tinderUser = new Object();   //declaring as singleton
// const tinderUser = {};   //regular declaration
tinderUser.name = "Sam";
tinderUser.id = "123abc";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email: "bijay@gamil.com",
    fullname: {
        userfullname: {
            firstName: "Bijay",
            lastName: "Rana",
        },
    },
};
// console.log(regularUser.fullname.userfullname?.firstName);   // ? => for asking if present

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj3 = {5: "a", 6: "b"};

const obj4 = {...obj1, ...obj2, ...obj3};
// console.log(obj4);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));  // stores each key, values in an array
console.log(tinderUser.hasOwnProperty("isLoggedIn"));





