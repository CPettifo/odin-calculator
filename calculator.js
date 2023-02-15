const calculator = document.querySelector("#calculator");
drawCalc();
let num1 = 0, operator, num2 = 0;
let operating = false;
let operators = ["+", ,"-", "÷", "x"]
let specials = ["!", "√", "x^2"]

function drawCalc() {
    let counter = 0;
    let buttonContent = ["!", "√", "x^2", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "C", "0", ".", "="]
    const row = document.createElement("row");
    row.classList.add("row");
    calculator.appendChild(row);
    const display = document.createElement("display");
    display.classList.add("display");
    display.style.color = "dark-green";
    display.textContent = 0;

    row.appendChild(display);
    for (let i = 1; i < 6; i++) {
        const row = document.createElement("row");
        row.classList.add("row");
        calculator.appendChild(row);
        for (let j = 0; j < 4; j++) {
            const button = document.createElement("button");
            button.classList.add("button");
            button.style.color = "white";
            button.textContent = buttonContent[counter];
            button.onclick = function() {
                selection = this.textContent;
                if (isNumber(selection) || selection == ".") {
                    if (display.textContent == "0") {
                        if (selection == ".") {
                            display.textContent = "0.";
                        }
                        else {
                            display.textContent = selection;
                        }
                        
                    }
                    else if (operating == true) {
                        display.textContent = selection;
                        operating = false;
                    }
                    else {
                        display.textContent += selection;
                    }
                }

                else {
                    if (selection == "C") {
                        display.textContent = 0;
                        num1 = 0;
                    }
                    if (specials.includes(selection)) {
                        display.textContent = operate(selection, display.textContent);
                    }
                    if (operators.includes(selection)){
                        
                        if (num1 == 0) {
                            operator = selection;
                            num1 = display.textContent;
                            console.log("Operator: " + operator + " number: " + num1);
                            
                        }
                        else {
                            display.textContent = operate(operator, num1, display.textContent);
                            num1 = display.textContent;
                        }
                        operating = true;
                    }

                }
            };
            row.appendChild(button);
            counter ++;
        }
    }
}

function operate (operator, x, y = undefined) {
    let result;
    if (operator == "!") {
        result = factorial (+x);
    }
    else if (operator == "+") {
        result = add(+x, +y);
    }
    if (result > 999999999999999999) {
        result = "ERROR";
    }
    return result;
}

function isNumber (x) {
    if (isNaN(x) == false) {
        return true;
    }
}


function add(x, y) {
    return x + y;
};
  
function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide (x, y) {
    return x / y;
}


function factorial(x) {
    let result = 1;
    if (x == 0) {
        return 1;
    }
    for (let i = 1; i < x + 1; i++) {
        result *= i;
    }
    return result;
};
  
function squared(x) {
    return x * x;
};
  
function squareRoot(x) {
    return x / x;
}
  
