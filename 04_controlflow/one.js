const isLoggedIn = true;
const temperature = 44;

// if (temperature < 50){
//     console.log("Temperature is less than 50");
// } else {
//     console.log("Temperature is greater than 50");
// };

//<,>,<=,>=,!=,==,===,!==

// const score =200;
// if (score > 100) {
//     const power = "fly";
//     console.log(`The power is to ${power}`);
// };

// if(isLoggedIn) console.log("User is logged in");

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy courses");
};
if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("direct to homepage");
};
