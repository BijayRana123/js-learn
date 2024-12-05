const user = {
    username : "Bijay",
    age: 32,
    welcomeMsg: function () {
        // console.log(`${this.username}, Welcome to the function`);
        // console.log(this);
    }
};
// user.welcomeMsg();
// user.username = "Simran";
// user.welcomeMsg();

function tea(){
    // const username = "hitesh";
    // console.log(this.username); //undefined
    // console.log(this);
};
// tea();

// const one = function () {
//     console.log(this);
// };
// one();
// const two = () => {
//     console.log(this);
// };
// two();

// const addNum = (num1,num2) => {
//     return num1 + num2;                      //same as below 2
// };
// const addNum = (num1,num2) => num1+num2;
// const addNum = (num1,num2) => (num1 + num2);

// console.log(addNum(4,3));

