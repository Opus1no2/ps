'use strict'

const dataservice = ($http) => {
  return $http.get('http://applicant.pointsource.us/api/testUser/57981d6ff62a2d8f3c05db76')
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log('XHR Failed for.' + error.data);
  });
}

module.exports = dataservice;
