const { add, subtract } = require("./calculator");
const logger = require("../utils/logger");

function run() {
  logger.log("Application started");

  const a = 10;
  const b = 4;
  //to musi byc 
  //skoro musi to wrzuc to logow a nie zostawiaj w konsoli
  console.log(`${a} + ${b} = ${add(a, b)}`);
  console.log(`${a} - ${b} = ${subtract(a, b)}`);
  //elo elo 320
  logger.log("Application finished");
}

run();