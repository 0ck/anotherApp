// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'mainCtrl', 'searchCtrl', 'homeCtrl', 'resultCtrl', 'detailsCtrl', 'resultMapCtrl', 'resultCardCtrl', 'ionic.contrib.ui.tinderCards'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'MainCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })

    .state('app.listproperties', {
      url: "/listproperties",
      views: {
        'menuContent': {
          templateUrl: "templates/listbiens.html",
          controller: 'ListpropertiesCtrl'
        }
      }
    })

  .state('app.siglebien', {
    url: "/listbiens/:bienId",
    views: {
      'menuContent': {
        templateUrl: "templates/listbien.html",
        controller: 'BienCtrl'
      }
    }
  })

  .state('app.home', {
      url: "/home",
      views: {
        'menuContent': {
          templateUrl: "templates/home.html",
          controller: 'HomeCtrl'
        }
      }
  })

  .state('app.recherche', {
      url: "/recherche",
      views: {
        'menuContent': {
          templateUrl: "templates/recherche.html",
          controller: 'SearchCtrl'
        }
      }
  })

      .state('app.mapproperties', {
          url: "/mapproperties",
          views: {
              'menuContent': {
                  templateUrl: "templates/mapproperties.html",
                  controller: 'MapPropertiesCtrl'
              }
          }
      })

          .state('app.cardproperties', {
              url: "/cardproperties",
              views: {
                  'menuContent': {
                      templateUrl: "templates/cardproperties.html",
                      controller: 'CardPropertiesCtrl'
                  }
              }
          })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
