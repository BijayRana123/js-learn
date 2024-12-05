// function addTwoNum(num1, num2){
//     console.log(num1 + num2);
// };

function addTwoNum(num1, num2){
    // const result = num1 + num2;
    // return result;
    return num2 + num1;
};

const result = addTwoNum(3,4);
// console.log("Result: ", result);

function logInMsg(user){
    if(!user){
        console.log("Please define the username.");
        return;
    };
    return `${user} just logged in.`
};

// console.log(logInMsg('Bijay'));
// console.log(logInMsg());

function handleObj(anyObject){
    console.log(`${anyObject.username} is the user and the price is ${anyObject.price}`);
    return;
};

// const user = {
//     username: "Monika",
//     price: 5000,
// };

// handleObj(user);
handleObj({
    username:"Monika",
    price: 5000
});