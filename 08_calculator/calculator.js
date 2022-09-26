const add = function(numOne,numTwo) {
	return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(numArray) {
  let sum = 0;

  for (const num of numArray) {
    sum += num;
  }

  return sum;
};

const multiply = function(numArray) {
  let product = numArray[0];
  numArray.shift();

  for (const num of numArray) {
    product *= num;
  }

  return product;
};

const power = function(numOne,numTwo) {
  return numOne ** numTwo;
	
};

const factorial = function(num) {
  let fact = num;

	if (num == 0 || num == 1) {
    return 1;
  }

  for (let i = num-1; i >= 1; i--) {
    fact = fact * i;
  }

  return fact;
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
