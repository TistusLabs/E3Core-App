var app = angular.module('e3core', [
    'ui.router',
    'angular.filter',
    'uiKernel',
    'ui.utils',
    'ui.jq'
]);

app.config(function ($stateProvider, $urlRouterProvider,$compileProvider) {

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|ftp|blob):|data:image\//);

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
        }).state('sampleone', {
            url: '/sampleone',
            templateUrl: 'partials/report.sample.one.html'
        }).state('sampletwo', {
            url: '/sampletwo',
            templateUrl: 'partials/report.sample.two.html'
        }).state('apptwo', {
            url: '/apptwo',
            templateUrl: 'partials/sample-app-two.html'
        }).state('usercreation', {
            url: '/usercreation',
            controller:'UserAdministration',
            templateUrl: 'partials/app-user-creation.html'
        }).state('allprojects', {
            url: '/allprojects',
            controller:'JIRAController',
            templateUrl: 'partials/app-jira-projects.html'
        });

}

);