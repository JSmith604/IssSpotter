const request = require('request-promise-native');

const fetchMyIp = function (){
  return request('https://api.ipify.org?format=json');
  
};

const fetchCoordsByIp = function(body) {
  const ipObject = JSON.parse(body);
  return request (`http://ip-api.com/json/${ipObject.ip}`)
};

const fetchISSFlyOverTimes = function(body) {
  const coords = JSON.parse(body);
  console.log(coords);
  const url = `http://api.open-notify.org/iss-pass.json?lat=${coords.lat}&lon=${coords.lon}`;
  return request (url);
  
}

const nextISSTimesForMyLocation = function () {
  return fetchMyIp()
    .then(fetchCoordsByIp)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const times = JSON.parse(data);
      return times.response;
     
    })  
}

module.exports = {nextISSTimesForMyLocation};