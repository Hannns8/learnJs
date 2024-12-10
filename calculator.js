// making variable 1 & 2
const calculating = function(num1, oper, num2){
    if (oper == "*") return num1 * num2;
    if (oper == "/") return num1 / num2;
    if (oper == '+') return num1 + num2;
    if (oper == '-') return num1 - num2;
}

let number1 = prompt("please enter the first number");

let calculate = true;
while (calculate) {
    const operator = prompt("please enter the operator like\n*, /, +, -\n");
    const number2 = prompt("please enter the second number")

    const result = calculating(parseInt(number1), operator, parseInt(number2));
    alert(result)
    number1 = result
    calculate = confirm("do you wanna calculate again?");
    if (!calculate){
        calculate = false;
        alert('Thanks for tryng my calculator\nlast calculate is ' + result);
    }
}