// Banca a la mano App, v0.1

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'bancaalamano' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'bancaalamano.services' is found in services.js
// 'bancaalamano.controllers' is found in controllers.js

angular.module('bancaalamano', ['ionic', 'bancaalamano.services', 'bancaalamano.controllers'])
  .config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
   $stateProvider

    .state('signin', {
      url: "/sign-in",
      templateUrl: "templates/sign-in.html",
      controller: 'SignInCtrl'
    })
    
    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    .state('tab.transactions', {
      url: '/transactions',
      views: {
        'transactions-tab': {
          templateUrl: 'templates/transactions.html',
           controller: 'GenericCtrl'
        }
      }
    })

    .state('tab.balance', {
      url: '/balance',
      views: {
        'transactions-tab': {
          templateUrl: 'templates/balance-inquiry.html',
           controller: 'BalanceCtrl'
        }
      }
    })

    .state('tab.send', {
      url: '/send',
      views: {
        'transactions-tab': {
          templateUrl: 'templates/send.html',
          controller: 'GenericCtrl'
        }
      }
    })

    .state('tab.receive', {
      url: '/receive',
      views: {
        'transactions-tab': {
          templateUrl: 'templates/receive.html',
           controller: 'GenericCtrl'
        }
      }
    })

    .state('tab.messages', {
      url: '/messages',
      views: {
        'transactions-tab': {
          templateUrl: 'templates/messages.html',
           controller: 'GenericCtrl'
        }
      }
    })

    .state('tab.notifications', {
      url: '/notifications',
      views: {
        'transactions-tab': {
          templateUrl: 'templates/notifications.html',
           controller: 'GenericCtrl'
        }
      }
    })

    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html',
           controller: 'GenericCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
 // $urlRouterProvider.otherwise('/tab/bancaalamano');
  $urlRouterProvider.otherwise("/sign-in");

});
