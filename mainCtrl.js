angular.module("loginList").controller("mainCtrl", function($scope, mainServ){

$scope.changer = false; 
$scope.goAway = false; 
$scope.listOfThings = mainServ.list;
$scope.fakelogin = function(user, pw){
	$scope.displayName = user;
	$scope.goAway = true;
};



});