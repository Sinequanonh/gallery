app.config(function config($urlRouterProvider, $stateProvider, $locationProvider) {
	// Home
	$stateProvider.state("home", {
		url: "/",
		templateUrl: "app/home/home.html",
		controller: 'homeCtrl'
	});
	
	// $locationProvider.html5Mode(true);
	// $locationProvider.hashPrefix('!');
	
	$urlRouterProvider.otherwise('/');
});