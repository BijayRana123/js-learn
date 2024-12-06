const numbers = [1,2,3];
// const myTotal = numbers.reduce(function (acc,currVal) {
//     return acc + currVal;
// },0);

const myTotal = numbers.reduce((acc, currVal) => acc+ currVal, 0);

// console.log(myTotal);

const cart = [
    {
        item: "Javascript",
        price: 299,
    },
    {
        item: "Python",
        price: 1299,
    },
    {
        item: "Artificial Intelligence",
        price: 689,
    },
    {
        item: "Neural Network",
        price: 999,
    },
];

const priceToPay = cart.reduce( (acc, item) => acc + item.price,0);
console.log(priceToPay);

