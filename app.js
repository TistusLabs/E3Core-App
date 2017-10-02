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
        }).state('sampleone', {
            url: '/sampleone',
            controller: 'SampleOneController',
            templateUrl: 'partials/report.sample.one.html'
        }).state('sampletwo', {
            url: '/sampletwo',
            templateUrl: 'partials/report.sample.two.html'
        }).state('apptwo', {
            url: '/apptwo',
            templateUrl: 'partials/sample-app-two.html'
        }).state('usercreation', {
            url: '/usercreation',
            controller: 'UserAdministration',
            templateUrl: 'partials/app-user-creation.html'
        }).state('allprojects', {
            url: '/allprojects',
            controller: 'JIRAController',
            templateUrl: 'partials/app-jira-projects.html'
        }).state('login1', {
            url: '/login1',
            templateUrl: 'partials/app-login-pages.html'
        }).state('login2', {
            url: '/login2',
            templateUrl: 'partials/app-login-pages.html'
        }).state('login3', {
            url: '/login3',
            templateUrl: 'partials/app-login-pages.html'
        }).state('login4', {
            url: '/login4',
            templateUrl: 'partials/app-login-pages.html'
        }).state('login5', {
            url: '/login5',
            templateUrl: 'partials/app-login-pages.html'
        });

}

);