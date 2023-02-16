const calculator = document.querySelector("#calculator");
drawCalc();
let num1 = 0, operator, num2 = 0;
let operating = false, decimalize = false, eq = false;
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
            if (i == 1 && j >= 0 && j < 3) {
                button.style.backgroundColor = "yellow";
                button.style.color = "black";
            }
            else if (j == 3) {
                button.style.backgroundColor = "darkorange";
            }
            else if (i == 5 && j == 0) {
                button.style.backgroundColor = "darkgreen";
            }
            else if (i == 5 && j == 2) {
                button.style.backgroundColor = "darkgreen";
            }
            else {
                button.style.backgroundColor = "darkblue";
            }


            button.onclick = function() {
                selection = this.textContent;
                if (isNaN(selection) == false) {
                    if (display.textContent == "0" || eq == true) {
                        display.textContent = selection;
                        eq = false;
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
                        operating = false;
                        operator = undefined;
                        decimalize = false;
                    }
                    if (selection == "." && decimalize == false) {
                        display.textContent += ".";
                        decimalize = true;
                    }
                    if (selection == "=" && operating == false) {
                        if (eq == false) {
                            num2 = num1;
                            num1 = display.textContent;
                        }
                        else {
                            num2 = display.textContent;
                        }

                        display.textContent = operate(operator, num1, num2);
                        num2 = display.textContent;
                        decimalize = true;
                        eq = true;
                    }
                    if (specials.includes(selection)) {
                        display.textContent = operate(selection, display.textContent);
                        operating = true;
                        decimalize = true;
                    }
                    if (operators.includes(selection) && operating == false){
                        decimalize = true;
                        if (num1 == 0 || eq == true) {  
                            num1 = display.textContent;
                            operator = selection;
                            eq = false;
                        }
                        else {
                            num2 = display.textContent;
                            display.textContent = operate(operator, num1, num2);
                            operator = selection;
                            num2 = display.textContent;
                            
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


function operate (operator, y, x = undefined) {
    let result;
    if (operator == "!") {
        result = factorial (+x);
    }
    else if (operator == "√") {
        result = squareRoot(x);
    }
    else if (operator == "+") {
        result = add(parseInt(x), parseInt(y));
    }
    else if (operator == "-") {
        result = subtract(x, y);
        console.log(x, y)
    }
    else if (operator == "x") {
        result = multiply(parseInt(x), parseInt(y));
    }
    else if (operator == "÷") {
        result = divide(parseInt(x), parseInt(y));
    }
    else if (operator == "x^2") {
        result = squared(+x);
    }
    else {
        if (y == undefined) {
            return x;
        }
        else {
            return y;
        }
    }
    if (result > 9999999999999999 || -result < -9999999999999 || result.toString().length > 10) {
        result = "ERROR";
    }
    decimalize = false;
    console.log(x, operator, y, "= " ,result);
    return result;
}



function add(x, y) {
    return x + y;
};
  
function subtract(x, y) {
    let w = x - y;
    return w;
};

function multiply(x, y) {
    return x * y;
};

function divide (x, y) {
    let result = (x / y);
    return result;
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
    return Math.sqrt(x);
}
  
