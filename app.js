angular.module('app', ['ui.router'])
  // .run(function($rootScope, $window) {
  //   $rootScope.$on('$stateChangeSuccess', function() {
  //     $window.scrollTo(0, 0);
  //   });
  // })
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .state('thankyou', {
        url: '/thankyou',
        templateUrl: 'views/thankyou.html'
      })
      .state('report', {
        url: '/marketingreport',
        templateUrl: 'views/report.html'
      })

    $urlRouterProvider
      .otherwise('/');
  });
