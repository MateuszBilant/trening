const { add, subtract } = require("./calculator");
const logger = require("../utils/logger");

function run() {
  logger.log("Application started");

  const a = 10;
  const b = 4;
  //to musi byc
  //no i elo
  console.log(`${a} + ${b} = ${add(a, b)}`);
  console.log(`${a} - ${b} = ${subtract(a, b)}`);
  //elo
  logger.log("Application finished");
}

run();