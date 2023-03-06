const add = function(num1, num2) {
	return(num1+num2)
};

const subtract = function(num1, num2) {
	return(num1-num2)
};

const sum = function(array) {
	let sum = 0
  for(let i =0; i < array.length; i++)
  {
    sum += array[i]
  }
  return(sum)
};

const multiply = function(array) {
  let mult = 1
  for(let i =0; i < array.length; i++)
  {
    mult *= array[i]
  }
  return(mult)
};

const power = function(num1, num2) {
	return(num1**num2)
};

const factorial = function(num) {
	let mult = 1
  for(let i = 1; i<= num; i++)
  {
    mult *= i
  }
  return(mult)
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
