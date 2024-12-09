const user = {
    username: "Bijay",
    age: 31,
    signedIn: true,
    getUserDetails: function () {
        console.log(`${this.username}`);
    },
};
// console.log(user);
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function () {
        console.log(`Hello ${this.username}`);
    };
    return this;
};
const userOne = new User("Utsav", 15, true);
const userTwo = new User("Hari", 5, false);
console.log(userOne);
console.log(userTwo.greeting());

