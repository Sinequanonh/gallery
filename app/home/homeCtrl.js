app.controller('homeCtrl', function($scope, homeSvc, $location, $anchorScroll) {
	console.log("homeCtrl");
	$scope.imgSelected = {};
	$scope.imgSelected.url = '';
	homeSvc.getImages().then(function(res) {
		$scope.images = res.data;
		$scope.setIndex();
	});

	$scope.setIndex = function() {
		for (var i = 0; i < $scope.images.length; i++) {
			$scope.images[i].index = i;
		}
	};

	$scope.selectedImg = false;

	$scope.selectImg = function(img, index) {
		if ($scope.imgSelected.url == img.url && $scope.selectedImg == true)
			return $scope.selectedImg = false;
		$scope.selectedImg = true;
		$scope.imgSelected = img;
		$( "#selected--img" ).insertAfter( $( ".row--wrap" ).eq(Math.floor(index / 5)) );
		// $( ".arrow" ).insertAfter( $( ".img--wrapper" ).eq(index));
		$scope.scrollTo('selected--img');
	};

	$scope.scrollTo = function(anchor) {
		$location.hash(anchor);
		$anchorScroll.yOffset = 134;
		$anchorScroll();
	};

    $('html').keydown(function(e){
    	$scope.$apply(function(){
    	$scope.currentIndex = $scope.imgSelected.index;
      	if (e.keyCode == 39) {
      		for (var i = 0; i < $scope.images.length; i++) {
				if ($scope.images[i].index == $scope.currentIndex + 1) {
					$scope.selectImg($scope.images[i], $scope.images[i].index);
				}
			}
      	}
      	if (e.keyCode == 37) {
      		for (var i = 0; i < $scope.images.length; i++) {
				if ($scope.images[i].index == $scope.currentIndex - 1) {
					$scope.selectImg($scope.images[i], $scope.images[i].index);
				}
			}
      	}
    	});
   });
});