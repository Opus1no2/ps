'use strict';

module.exports = class Profile {
  constructor($scope, dataservice) {
    dataservice.getProfiles().then((data) => {
      $scope.userData = {
        name: `${data.person['given-name']} ${data.person['family-name']}`,
        addr1: `${data.person.address['house-#']} ${data.person.address['street-name']}`,
        addr2: `${data.person.address.city}, ${data.person.address.st}`,
        zip: data.person.address.zip,
        sex: data.person.sex
      }
    });
  }
};

