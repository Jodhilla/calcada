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
    url: '/casa',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/casa.html',
        controller: 'casaCtrl'
      }
    }
  })

  .state('menu.usa.wines', {
    url: '/wines',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/wines.html',
        controller: 'winesCtrl'
      }
    }
  })

  .state('menu.prt.vinhos', {
    url: '/vinhos',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/vinhos.html',
        controller: 'vinhosCtrl'
      }
    }
  })

  .state('menu.usa.history', {
    url: '/history',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/history.html',
        controller: 'historyCtrl'
      }
    }
  })

  .state('menu.prt.histRia', {
    url: '/histRia',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/histRia.html',
        controller: 'histRiaCtrl'
      }
    }
  })

  .state('menu.usa.vineyards', {
    url: '/vineyards',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/vineyards.html',
        controller: 'vineyardsCtrl'
      }
    }
  })

  .state('menu.prt.vineyardsPortuguese', {
    url: '/vineyardsPortuguese',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/vineyardsPortuguese.html',
        controller: 'vineyardsPortugueseCtrl'
      }
    }
  })

  .state('menu.usa.regions', {
    url: '/regions',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/regions.html',
        controller: 'regionsCtrl'
      }
    }
  })

  .state('menu.prt.regiEs', {
    url: '/regiEs',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/regiEs.html',
        controller: 'regiEsCtrl'
      }
    }
  })

  .state('menu.usa.pos', {
    url: '/pos',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/pos.html',
        controller: 'posCtrl'
      }
    }
  })

  .state('menu.prt.piontDeVenda', {
    url: '/piontDeVenda',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/piontDeVenda.html',
        controller: 'piontDeVendaCtrl'
      }
    }
  })

  .state('menu.usa.whiteVaretals', {
    url: '/whiteVaretals',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/whiteVaretals.html',
        controller: 'whiteVaretalsCtrl'
      }
    }
  })

  .state('menu.prt.brancoVaretals', {
    url: '/brancoVaretals',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/brancoVaretals.html',
        controller: 'brancoVaretalsCtrl'
      }
    }
  })

  .state('menu.usa.redVaretalsRos', {
    url: '/redVaretalsRos',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/redVaretalsRos.html',
        controller: 'redVaretalsRosCtrl'
      }
    }
  })

  .state('menu.prt.vermelhoVaretalsRosa', {
    url: '/vermelhoVaretalsRosa',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/vermelhoVaretalsRosa.html',
        controller: 'vermelhoVaretalsRosaCtrl'
      }
    }
  })

  .state('menu.usa.redVaretals', {
    url: '/redVaretals',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/redVaretals.html',
        controller: 'redVaretalsCtrl'
      }
    }
  })

  .state('menu.prt.vermelhoVaretals', {
    url: '/vermelhoVaretals',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/vermelhoVaretals.html',
        controller: 'vermelhoVaretalsCtrl'
      }
    }
  })




  .state('menu.usa.ourVineyards', {
    url: '/ourVineyards',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/ourVineyards.html',
        controller: 'ourVineyardsCtrl'
      }
    }
  })

  .state('menu.usa.lago', {
    url: '/lago',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/lago.html',
        controller: 'lagoCtrl'
      }
    }
  })

  .state('menu.usa.quinta', {
    url: '/quinta',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/quinta.html',
        controller: 'quintaCtrl'
      }
    }
  })

  .state('menu.usa.portal', {
    url: '/portal',
    views: {
      'menuLanguage': {
        templateUrl: 'templates/portal.html',
        controller: 'portalCtrl'
      }
    }
  })


$urlRouterProvider.otherwise('/side-menu21/usa/home')



});
