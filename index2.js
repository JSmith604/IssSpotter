const { fetchMyIp } = require('./iss_promised');
const ipObject = require('./iss_promised');

ipObject.nextISSTimesForMyLocation()
.then((times) => {
console.log(times);
})


.catch((error) => {
  console.log("It didn't work: ", error.message);
});