const firstValue = document.querySelector("#first-value");
//const operator = "+";
const secondValue = document.querySelector("#second-value");
const resultText = document.querySelector("#text");

const allButtons = document.querySelectorAll(".btn");


const sum = function (a, b,) {
    return a + b;
};

const substraction = function (a, b,) {
    return a - b;
};

const division = function (a, b,) {
    return a / b;
};

const multiply = function (a, b,) {
    return a * b;
};

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function (event) {

        if (event.target.id === "sum") {
            const Result = sum(Number(firstValue.value), Number(secondValue.value))
            resultText.innerHTML = Result;
        }

        if (event.target.id === "substraction") {
            const Result = substraction(Number(firstValue.value), Number(secondValue.value))
            resultText.innerHTML = Result;
        }
        if (event.target.id === "division") {
            const Result = division(Number(firstValue.value), Number(secondValue.value))
            resultText.innerHTML = Result;
        }
        if (event.target.id === "multiply") {
            const Result = multiply(Number(firstValue.value), Number(secondValue.value))
            resultText.innerHTML = Result;
        }
    })
}






// switch (operator) {
//     case "+":
//         console.log(Number(firstValue) + Number(secondValue));
//         break;
//     case "-":
//         console.log(Number(firstValue) - Number(secondValue));
//         break;
//     case "*":
//         console.log(Number(firstValue) * Number(secondValue));
//         break;
//     case "/":
//         console.log(Number(firstValue) / Number(secondValue));
//         break;
//     default:
//         console.log("Invalid operator");
// }

