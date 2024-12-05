//singleton
//Object.create

//Object literals
const mySym = Symbol("key1");
const JsObj = {
    name: "Bijay",
    "full name": "Bijay Rana",
    [mySym]: "myKey1",
    age: 31,
    location: "Butwal",
    email: "bijay@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday", "wednesday"],
};

// console.log(JsObj.email);    //traditional ways, cannot be accesed the following data below
// console.log(JsObj["email"]);
// console.log(JsObj["full name"]);
// console.log(JsObj[mySym]);

// JsObj.email = "bijayrana@game.com";
// Object.freeze(JsObj);  // cannot be changed after this
// JsObj.email = "bijay@chatgpt.com";
// console.log(JsObj);

// JsObj.greeting = function(){
//     console.log("Hello Js User");
// };

// JsObj.greetingT = function(){
//     console.log(`Hello ${this["full name"]}`);
// }
// console.log(JsObj.greeting());
// console.log(JsObj.greetingT());


