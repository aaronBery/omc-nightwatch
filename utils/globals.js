function getSiteSpecificGlobals () {
  var siteGlobals = {
    site: 'islingtion',//this should be changed for the current project
    domElements: {
      hamburgerMenu: '.toggle-menu',
      cookieId: '#cookieDiv',
      cookieClose: '.cookie-msg__yes'
    }
  };

  switch(siteGlobals.site) {
    case 'islingtion':
      siteGlobals.baseUrl = 'http://www.islington.media/';
      siteGlobals.domElements.navigation = '.menu--horisontal.main-menu';
    break;
  }

  return siteGlobals;
}


var globals = getSiteSpecificGlobals();

globals.screens = {
  full: {
      width: 1200,
      height: 1200
  },
  tablet: {
      width: 767,
      height: 1200
  },
  mobile: {
      width: 400,
      height: 1200
  }
}

module.exports = globals;
