const {fetchMyIp, fetchCoordsByIp} = require("./iss");
fetchMyIp((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned IP:', ip);

  fetchCoordsByIp('142.118.3.251', (error, coordinates) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }
    
    console.log('It worked! Returned coordinates:' , coordinates);
  });
});
