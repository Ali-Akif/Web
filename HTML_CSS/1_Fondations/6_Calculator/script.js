document.addEventListener("DOMContentLoaded", () => {
    const seven = document.getElementById("7");
    const eight= document.getElementById("8");
    const nine = document.getElementById("9");
    const four= document.getElementById("4");
    const five = document.getElementById("5");
    const six = document.getElementById("6");
    const one = document.getElementById("1");
    const two = document.getElementById("2");
    const three = document.getElementById("3");
    const reset = document.getElementById("c");
    const zero = document.getElementById("0");
    const equal = document.getElementById("=");

    const previous = document.getElementById("previous");
    const result = document.getElementById("result");

    let allButton = [seven, eight, nine, four, five, six, one, two, three, reset, zero, equal];

    let operation = "";

    allButton.forEach(item => {
        item.addEventListener("click", () => {
            operation = item;
        })
    })

    function addition(n1, n2) { return Number(n1) + Number(n2) }
    function substract(n1, n2) { return Number(n1) - Number(n2)}
    function multiply(n1, n2) { return Number(n1) * Number(n2)}
    function divide(n1, n2) { return Number(n1) / Number(n2)}
    function operate(n1, operator, n2) {
        switch(operator) {
            case "+":
                return addition(n1, n2);
                break;
            case "-":
                return substract(n1, n2);
                break;
            case "*":
                return multiply(n1, n2);
                break;
            case "/":
                return divide(n1, n2);
                break;
            default:
                return "Wrong operator"
        }
    }
    console.log(operation);
})

