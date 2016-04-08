// SERVICES
weatherApp.service('cityService', function() {
	
	this.city = "New York, NY" /* Default value for search box */
});

weatherApp.service('weatherService', ['$resource', function($resource) {
	
	this.getWeather = function(city, days) {
		 var weatherApi = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
  		 return weatherApi.get(
			 {
			  q: city, 
			  appid: '2be8bbab865e318bc88171f1b08a6ade', /* APP Key */
			  units: 'metric', /* Use metric system for results */
			  cnt: days
			 }
		 );
	}
	
 
}]);