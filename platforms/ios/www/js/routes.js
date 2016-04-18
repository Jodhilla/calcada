angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider


  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.usa', {
    url: '/usa',
    views: {
      'side-menu21': {
      templateUrl: 'templates/usa.html',
      }
    }
  })

  .state('menu.prt', {
    url: '/prt',
    views: {
      'side-menu21': {
      templateUrl: 'templates/prt.html',
      }
    }
  })

  .state('menu.usa.home', {
    url: '/home',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.prt.casa', {
    url: '/page10',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/casa.html',
        controller: 'casaCtrl'
      }
    }
  })

  .state('menu.usa.wines', {
    url: '/page2',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/wines.html',
        controller: 'winesCtrl'
      }
    }
  })

  .state('menu.prt.vinhos', {
    url: '/page11',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/vinhos.html',
        controller: 'vinhosCtrl'
      }
    }
  })

  .state('menu.usa.history', {
    url: '/page4',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/history.html',
        controller: 'historyCtrl'
      }
    }
  })

  .state('menu.prt.histRia', {
    url: '/page12',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/histRia.html',
        controller: 'histRiaCtrl'
      }
    }
  })

  .state('menu.usa.vineyards', {
    url: '/page5',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/vineyards.html',
        controller: 'vineyardsCtrl'
      }
    }
  })

  .state('menu.prt.vineyardsPortuguese', {
    url: '/page13',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/vineyardsPortuguese.html',
        controller: 'vineyardsPortugueseCtrl'
      }
    }
  })

  .state('menu.usa.regions', {
    url: '/page6',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/regions.html',
        controller: 'regionsCtrl'
      }
    }
  })

  .state('menu.prt.regiEs', {
    url: '/page18',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/regiEs.html',
        controller: 'regiEsCtrl'
      }
    }
  })

  .state('menu.usa.pos', {
    url: '/page7',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/pos.html',
        controller: 'posCtrl'
      }
    }
  })

  .state('menu.prt.piontDeVenda', {
    url: '/page14',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/piontDeVenda.html',
        controller: 'piontDeVendaCtrl'
      }
    }
  })

  .state('menu.usa.whiteVaretals', {
    url: '/page3',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/whiteVaretals.html',
        controller: 'whiteVaretalsCtrl'
      }
    }
  })

  .state('menu.prt.brancoVaretals', {
    url: '/page15',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/brancoVaretals.html',
        controller: 'brancoVaretalsCtrl'
      }
    }
  })

  .state('menu.usa.redVaretalsRos', {
    url: '/page8',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/redVaretalsRos.html',
        controller: 'redVaretalsRosCtrl'
      }
    }
  })

  .state('menu.prt.vermelhoVaretalsRosa', {
    url: '/page17',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/vermelhoVaretalsRosa.html',
        controller: 'vermelhoVaretalsRosaCtrl'
      }
    }
  })

  .state('menu.usa.redVaretals', {
    url: '/page9',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/redVaretals.html',
        controller: 'redVaretalsCtrl'
      }
    }
  })

  .state('menu.prt.vermelhoVaretals', {
    url: '/page16',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/vermelhoVaretals.html',
        controller: 'vermelhoVaretalsCtrl'
      }
    }
  })



$urlRouterProvider.otherwise('/side-menu21/usa/home')



});
