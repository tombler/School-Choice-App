app.controller("FirstTimeUserCtrl", ["$scope", "$http", "$location",
function($scope, $http, $location) {

    // Hide questions initially while user enters address.
    $scope.startQuestions = false;

    $scope.userAddress = {
        street: "1704 Charlotte Ave",
        city: "Nashville",
        state: "TN"

    }

    $scope.getStateAbbrevs = function () {
        $http.get('dummyData.json')
        .success(function(response) {
            //console.log(response);
            $scope.stateNames = response.stateNames;
        });
    };

    $scope.skipAddress = function () {
        // Get data for first question and set equal to $scope.thisQuestion.
        $http.get('dummyData.json')
        .success(function(response) {
            //console.log(response);
            $scope.thisQuestion = response.firstTimeUserQuestions[0];
        });
        $scope.startQuestions = true;
    };

    $scope.validateAddress = function () {
        // Goes to next question for mockup purposes.
        $scope.skipAddress();
    };

    $scope.skipQuestion = function () {
        // get data
        $http.get('dummyData.json')
        .success(function(response) { 
            // on success, iterate through each Q and find the one that falls after.
            var questions = response.firstTimeUserQuestions;
            for (var i=0; i < questions.length; i++)
            {
                if (questions[i+1] == null)
                {
                    $location.path("/school-maps");
                }
                if (questions[i].position === $scope.thisQuestion.position)
                {
                    $scope.thisQuestion = questions[i+1];
                    return;
                }
            }
        }); 
    };

    $scope.collectUserInfo = function () {
        // Goes to next question for mockup purposes.
        $scope.skipQuestion();
    };

}]);