const { add, subtract } = require("./calculator");
const logger = require("../utils/logger");

function run() {
  logger.log("Application started");

  const a = 10;
  const b = 4;
  
  logger.log(`${a} + ${b} = ${add(a, b)}`);
  logger.log(`${a} - ${b} = ${subtract(a, b)}`);

  logger.log("Application finished");
}

run();