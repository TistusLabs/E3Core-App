app.controller('LoginPageController', ['$scope', '$rootScope', '$state', '$timeout', '$http', '$state', '$helpers', '$systemUrls', '$stateParams', loginPageController]);

function loginPageController($scope, $rootScope, $state, $timeout, $http, $state, $helpers, $systemUrls, $stateParams) {

    //debugger
    $scope.loginPath = $stateParams.loginDirectory;
    $scope.loginURL = "";
    if ($scope.loginPath == "login1") {
        $scope.loginURL = "temp_logins/Login/";
    } else if ($scope.loginPath == "login2") {
        $scope.loginURL = "temp_logins/Login2/";
    } else if ($scope.loginPath == "login3") {
        $scope.loginURL = "temp_logins/Login3/";
    } else if ($scope.loginPath == "login4") {
        $scope.loginURL = "temp_logins/Login4/";
    } else if ($scope.loginPath == "login5") {
        $scope.loginURL = "temp_logins/Login5/";
    }
}