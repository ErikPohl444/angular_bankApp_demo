var app = angular.module("bankApp", []);
app.controller("balancesController", function($scope) {
	$scope.users = [
  	{"name": "Pricilla Smith", "balance": 1191},
    {"name": "Jimmy Verde", "balance": 1923},
    {"name": "Hugo Chang", "balance":1289}
  ];
  
  $scope.addNew = function() {
  	alert("add new called!")
    $scope.users.push({"name": "Steve Wozniac", "balance": 50000000});
  }
  
  $scope.remove = function(user) {
  	var index = $scope.users.indexOf(user)
  	alert("deleting index " + index)
    $scope.users.splice(index, 1);
  }
});