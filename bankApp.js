var app = angular.module("bankApp", []);
app.controller("balancesController", function($scope) {
	$scope.users = [
  	{"name": "Pricilla Smith", "balance": 1191},
    {"name": "Jimmy Verde", "balance": 1923},
    {"name": "Hugo Chang", "balance":1289}
  ];
});