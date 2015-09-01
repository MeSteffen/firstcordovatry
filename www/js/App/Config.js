angular.module('sataApp').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.startscreen', {
        url: '/startscreen',
        views: {
            'menuContent': {
                templateUrl: 'templates/startscreen.html',
                controller: 'StartscreenCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/startscreen');
});