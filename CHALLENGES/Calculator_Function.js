function add(n1, n2) {
  return n1 + n2;
}

function substract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}
function divison(n1, n2) {
  return n1 / n2;
}

function calculator(n1, n2, operator) {
    return operator(n1,n2);
}

calculator(10,5,multiply);