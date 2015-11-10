app.controller("LoginCtrl", ["$scope", "$location", "$rootScope",
    function($scope, $location, $rootScope) {

        $scope.login = function () {

            // var ref = new Firebase("https://school-choice.firebaseio.com");
            // ref.authWithPassword({
            //   email    : $scope.email,
            //   password : $scope.password
            // }, function(error, authData) {
            //   if (error) {
            //     console.log("Login Failed!", error);
            //   } else {
            //     console.log("Authenticated successfully with payload:", authData);
            //   }
            // });
            $location.path("/first-time-user");
        };

    }]);