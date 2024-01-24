//arrow function (calculadora )

const calculator = (number1, number2, operation) =>{
    let result


switch (operation) {
    case "+":
        result = number1 + number2
        break;

    case "-":
        result = number1 - number2
        break

    case "*":
        result = number1 * number2
        break

    case "/":
        result = number1 / number2
        break

    default:
        break;
       
}
return result
}


console.log(calculator(15, 10, "+"))
console.log(calculator(35, 10, "-"))
console.log(calculator(5, 5, "*"))
console.log(calculator(50, 2, "/"))
