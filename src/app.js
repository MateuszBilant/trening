const { add, subtract } = require("./calculator");
const logger = require("../utils/logger");

function run() {
  logger.log("Application started");

  const a = 10;
  const b = 4;
  // te konsole logi sa do wyjebania 
  console.log(`${a} + ${b} = ${add(a, b)}`);
  console.log(`${a} - ${b} = ${subtract(a, b)}`);
  // dupa dupa wyjeb loggera
  logger.log("Application finished");
}

run();