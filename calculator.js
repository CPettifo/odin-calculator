


const add = function(x, y) {
    return x + y;
  };
  
  const subtract = function(x, y) {
      return x - y;
  };
  
  const sum = function(array) {
    let sum = 0;
      for (let x of array) {
      x = +x;
      sum += x;
    }
    return sum;
  };
  
  const multiply = function(array) {
    let result = 1;
    for (let x of array) {
      x = +x;
      result *= x;
    }
    return result;
  };
  
  const power = function(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
      result *= x;
    }
    return result;
  };
  
  const factorial = function(x) {
      let result = 1;
    if (x == 0) {
      return 1;
    }
    for (let i = 1; i < x + 1; i++) {
      result *= i;
    }
    return result;
  };
  
  // Do not edit below this line
  module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
  };
  