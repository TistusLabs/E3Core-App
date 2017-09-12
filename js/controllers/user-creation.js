app.controller('UserAdministration', ['$scope', '$rootScope', '$state', '$timeout', '$http', '$state', '$helpers', '$systemUrls', userAdministration]);

function userAdministration($scope, $rootScope, $state, $timeout, $http, $state, $helpers, $systemUrls) {
    console.log("User Administration app started");

    $scope.user = {};

    $scope.createNewUser = function (user) {
        var payload = {
            "EMail": user.email,
            "FirstName": user.fname,
            "LastName": user.lname,
            "MobileNo": user.mobile,
            "Password": user.password,
            "UserName": user.username
        };
        $http({
            method: "POST",
            url: $systemUrls.svc_access + "/E3CoreUser/User.svc/SignUpSimple",
            dataType: 'json',
            data: payload,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (response, status) {
            if (response.data.Error == null) {
                alert("User added successfully");
                $scope.user = {};
            } else if (response.data.Error != null) {
                alert("There was an error: " + response.data.Error.ErrorMessage);
            }
            console.log(response, status);
        }, function (response, status) {
            console.log(response, status);
        });
    };
}