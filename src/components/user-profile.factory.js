'use strict'

const dataservice = ($http) => {
  return {
    getProfiles() {
      return $http.get('http://localhost:8888/user/profiles')
        .then((data) => {
          return data.data
        })
        .catch((error) => {
          console.log('XHR Failed for.' + error.data);
        });
    }
  }
}

module.exports = dataservice;
