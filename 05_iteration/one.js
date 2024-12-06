//for

// for (let i = 1; i <=10 ; i++) {
//     console.log(`Table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);        
//     };
// };

//break & continue
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("5 is detected");
//         break;
//     };
//     console.log("The value is :", index);
// };
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("5 is detected");
        continue;
    };
    console.log("The value is :", index);
};