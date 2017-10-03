var app = angular.module('e3core', [
    'ui.router',
    'angular.filter',
    'uiKernel',
    'ui.utils',
    'ui.jq'
]);

app.config(function ($stateProvider, $urlRouterProvider, $compileProvider) {

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
        }).state('report', {
            url: '/report',
            params: { 'reportName': null, "DisplayName": null },
            controller: 'SampleController',
            templateUrl: 'partials/report.sample.html'
        }).state('usercreation', {
            url: '/usercreation',
            controller: 'UserAdministration',
            templateUrl: 'partials/app-user-creation.html'
        }).state('allprojects', {
            url: '/allprojects',
            controller: 'JIRAController',
            templateUrl: 'partials/app-jira-projects.html'
        }).state('loginpages', {
            url: '/loginpages',
            params: { 'loginDirectory': null},
            controller: 'LoginPageController',
            templateUrl: 'partials/app-login-pages.html'
        });

}

);