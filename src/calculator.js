function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a ** b;
}

function dividing(a,b){
  return a/b
}

function byZero(a){
  return a/0
}

module.exports = {
  add,
  subtract,
  multiply,
  dividing,
  byZero
};