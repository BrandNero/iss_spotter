const {fetchMyIp, fetchCoordsByIp, fetchISSFlyOverTimes} = require("./iss");
fetchMyIp((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked! Returned IP:", ip);

  fetchCoordsByIp("142.118.3.251", (error, coordinates) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }
    
    console.log("It worked! Returned coordinates:" , coordinates);
  });
});
fetchISSFlyOverTimes({latitude: 45.5016889, longitude: -73.567256}, (error, passTime) => {
  if (error) {
    console.log("it didnt work");
    return;
  }
  console.log("it worked! Returned coordiantes of ISS:", passTime);
});