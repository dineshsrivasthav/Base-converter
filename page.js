var page = angular.module('page', []);
page.controller('ctrl', ['$scope', '$filter', function($scope,filter){
	$scope.decimal="";
	$scope.binary="";
	$scope.octal="";
	$scope.hexa="";

	$scope.$watch('decimal', function(newvalue,oldvalue)
	{
		if(newvalue != "")
		{
			$scope.binary = parseInt(newvalue,10).toString(2);
			$scope.octal = parseInt(newvalue,10).toString(8);
		    $scope.hexa = parseInt(newvalue,10).toString(16).toUpperCase();
		}
		else
		{ 
			$scope.binary="";
			$scope.octal="";
			$scope.hexa="";
		}
		
	});

	$scope.$watch('binary', function(newvalue,oldvalue)
	{
		if(newvalue != "")
		{
			$scope.decimal = parseInt(newvalue,2).toString(10);
		}
		else
		{
			$scope.decimal="";
		}
	});

	$scope.$watch('octal', function(newvalue,oldvalue)
	{
		if(newvalue != "")
		{
			$scope.decimal = parseInt(newvalue,8).toString(10);
		}
		else
		{
			$scope.decimal="";
		}
	});

	$scope.$watch('hexa', function(newvalue,oldvalue)
	{
		if(newvalue != "")
		{
			$scope.decimal = parseInt(newvalue,16).toString(10);
		}
		else
		{
			$scope.decimal="";
		}
	});
}]);
