function calculator(operator, num1, num2) {
  if (operator === "+") {
    return num1 + num2;
  }
  if (operator === "-") {
    return num1 - num2;
  }
  if (operator === "*") {
    return num1 * num2;
  }
  if (operator === "/") {
    return num1 / num2;
  }
  if (operator === "%") {
    return num1 % num2;
  }
}
module.exports = calculator;
