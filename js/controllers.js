// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
 $scope.city = cityService.city;
										 
 $scope.$watch('city', function() {
		cityService.city = $scope.city;		 
 });

 $scope.submit = function() {
	$location.path("/forecast");
 };
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {

 $scope.city = cityService.city;
 $scope.days = $routeParams.days || '2';

 $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);
 
 $scope.convertToDate = function(dt) {
	return new Date(dt * 1000);
 };
}]);

weatherApp.controller('aboutController', ['$scope', function($scope) {
	
}]);

weatherApp.controller('contactController', ['$scope', function($scope) {
	$scope.name = "";
	$scope.email = "";
	$scope.message = "";
	$scope.confirmation = "";
	
	$scope.submit = function() {
		$scope.confirmation = "Thanks for your interest!! Your questions/suggestions have been sent successfully. We will revert as soon as possible.";
		
		// send the email to admin..
		
		$scope.name = "";
		$scope.email = "";
		$scope.message = "";
		console.log($scope.confirmation);
	}
}]);

weatherApp.controller('tcController', ['$scope', function($scope) {

}]);
