var app = angular.module('e3core', [
    'ui.router',
    'angular.filter',
    'uiKernel',
    'ui.utils',
    'ui.jq'
]);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider

        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'partials/main-dashboard.html'
        }).state('profile', {
            url: '/profile',
            templateUrl: 'partials/main-profile.html'
        }).state('profile.activity', {
            url: '/activity',
            templateUrl: 'partials/profile.activity.html'
        }).state('appone', {
            url: '/appone',
            templateUrl: 'partials/sample-app-one.html'
        }).state('apptwo', {
            url: '/apptwo',
            templateUrl: 'partials/sample-app-two.html'
        }).state('usercreation', {
            url: '/usercreation',
            controller:'UserAdministration',
            templateUrl: 'partials/user-creation.html'
        });

}

);