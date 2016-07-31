'use strict';

const angular = require('angular');
angular.module('userProfile', [])
  .factory('dataservice', require('./components/user-profile.factory'))
  .controller('profiles', require('./components/user-profile.controller'))
