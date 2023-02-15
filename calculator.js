const calculator = document.querySelector("#calculator");
drawCalc();

function drawCalc() {
    let counter = 0;
    let buttons = ["!", "√", "x^2", "÷", "7", "8", "9", "x", "4", "5", "6", "-", "1", "2", "3", "+", "C", "0", ".", "="]
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("row");
        row.classList.add("row");
        row.style.backgroundColor = "black";
        calculator.appendChild(row);
        if (i > 0) {
            for (let j = 0; j < 4; j++) {
                const button = document.createElement("button");
                button.classList.add("button");
                button.style.color = "white";
                button.style.backgroundColor = "grey";
                button.textContent = buttons[counter];
                row.appendChild(button);
                counter ++;
            }
        }
        else {
            const display = document.createElement("display");
            display.classList.add("display");
            display.style.color = "dark-green";
            display.textContent = 56350;
            row.appendChild(display);
        }
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
  
