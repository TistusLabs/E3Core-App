/* use strickt */

app.controller('SigninController', ['$scope', '$rootScope', '$state', '$timeout', '$http', '$systemUrls', '$helpers', signinController]);

function signinController($scope, $rootScope, $state, $timeout, $http, $systemUrls, $helpers) {
    console.log("signup page loaded");

    $scope.user = {};

    $scope.loginUser = function (username, password) {
        //debugger
        var userDetails = {
            "UserName": username,
            "Password": password
        }
        window.location.href = "../";
        // $http({
        //     method: "POST",
        //     url: $systemUrls.svc_access + "/E3CoreUser/User.svc/Login",
        //     dataType: 'json',
        //     data: userDetails,
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // }).then(function (response, status) {
        //     //debugger
        //     if (response.data.SecurityToken != null) {
        //         $helpers.setCookie("securityToken", response.data.SecurityToken, 1);
        //         $helpers.setCookie("SessionKey", response.data.SessionKey, 1);
        //         $helpers.setCookie("UserName", username, 1);
        //         window.location.href = "../";
        //     } else if (response.data.Error != null) {
        //         alert("There was an error: " + response.data.Error.ErrorMessage);
        //     }
        //     console.log(response, status);
        // }, function (response, status) {
        //     console.log(response, status);
        // });
    }
}