const calculator = docuent.querySelector("#calcultor");
drawCalc();

function drawCalc() {

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
  
function power(x, y) {
  let result = 1;
  for (let i = 0; i < y; i++) {
    result *= x;
  }
  return result;
};
  
function divide(x, y) {
  return x / y;
}