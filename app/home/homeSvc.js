app.service('homeSvc', function($http) {
	return {
		getImages: function() {
			return $http.get('http://127.0.0.1:8884/api/getimages');
		}
	}
});
