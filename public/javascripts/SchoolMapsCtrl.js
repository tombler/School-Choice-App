app.controller("SchoolMapsCtrl", ["$scope",
function($scope) {

  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( { "address": "1401 Villa Pl, Nashville, TN 37212" }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
          console.log(results);
          var location = results[0].geometry.location;
          $scope.map = { center: { latitude: location.lat(), longitude: location.lng() }, zoom: 12 };
      }
  });

  // Adding markers: http://angular-ui.github.io/angular-google-maps/#!/api/marker
  

}]);