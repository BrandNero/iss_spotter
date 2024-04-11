const {nextISSTimesForMyLocation} = require("./iss_promised");
const request = require('request-promise-native');
const printPassTimes = require("./index");
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
  
