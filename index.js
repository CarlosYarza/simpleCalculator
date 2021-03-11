const firstValue = 1;
const operator = "+";
const secondValue = 2;

// if (operator === "+") {
//     console.log(Number(firstValue) + Number(secondValue));
// }
// else {
//     console.log(Number(firstValue) - Number(secondValue));
// }

switch (operator) {
    case "+":
        console.log(Number(firstValue) + Number(secondValue));
        break;
    case "-":
        console.log(Number(firstValue) - Number(secondValue));
        break;
    case "*":
        console.log(Number(firstValue) * Number(secondValue));
        break;
    case "/":
        console.log(Number(firstValue) / Number(secondValue));
        break;
    default:
        console.log("Invalid operator");
}

