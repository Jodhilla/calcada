angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.casa', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/casa.html',
        controller: 'casaCtrl'
      }
    }
  })

  .state('menu.wines', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wines.html',
        controller: 'winesCtrl'
      }
    }
  })

  .state('menu.vinhos', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vinhos.html',
        controller: 'vinhosCtrl'
      }
    }
  })

  .state('menu.history', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/history.html',
        controller: 'historyCtrl'
      }
    }
  })

  .state('menu.histRia', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/histRia.html',
        controller: 'histRiaCtrl'
      }
    }
  })

  .state('menu.vineyards', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vineyards.html',
        controller: 'vineyardsCtrl'
      }
    }
  })

  .state('menu.vineyardsPortuguese', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vineyardsPortuguese.html',
        controller: 'vineyardsPortugueseCtrl'
      }
    }
  })

  .state('menu.regions', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/regions.html',
        controller: 'regionsCtrl'
      }
    }
  })

  .state('menu.regiEs', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/regiEs.html',
        controller: 'regiEsCtrl'
      }
    }
  })

  .state('menu.pos', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pos.html',
        controller: 'posCtrl'
      }
    }
  })

  .state('menu.piontDeVenda', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/piontDeVenda.html',
        controller: 'piontDeVendaCtrl'
      }
    }
  })

  .state('menu.whiteVaretals', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/whiteVaretals.html',
        controller: 'whiteVaretalsCtrl'
      }
    }
  })

  .state('menu.brancoVaretals', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/brancoVaretals.html',
        controller: 'brancoVaretalsCtrl'
      }
    }
  })

  .state('menu.redVaretalsRos', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/redVaretalsRos.html',
        controller: 'redVaretalsRosCtrl'
      }
    }
  })

  .state('menu.vermelhoVaretalsRosa', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vermelhoVaretalsRosa.html',
        controller: 'vermelhoVaretalsRosaCtrl'
      }
    }
  })

  .state('menu.redVaretals', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/redVaretals.html',
        controller: 'redVaretalsCtrl'
      }
    }
  })

  .state('menu.vermelhoVaretals', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vermelhoVaretals.html',
        controller: 'vermelhoVaretalsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })



$urlRouterProvider.otherwise('/side-menu21/page1')



});
