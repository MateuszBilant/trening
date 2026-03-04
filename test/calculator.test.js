const { add, subtract } = require("../src/calculator");

function testAdd() {
  if (add(2, 3) !== 5) {
    throw new Error("add test failed");
  }
}

function testSubtract() {
  if (subtract(5, 3) !== 2) {
    throw new Error("subtract test failed");
  }
}

function runTests() {
  testAdd();
  testSubtract();
  console.log("All tests passed");
}

runTests();