var globals = require('./globals.js');

var globalFunctions = {
  desktopNavShowing: function (test) {
      test.assert.visible(globals.domElements.navigation, 'desktop nav links are visible');
  },

  desktopNavHidden: function (test) {
      test.assert.hidden(globals.domElements.navigation, 'desktop nav links are hidden');
  },

  mobileNavHidden: function (test) {
      test.assert.hidden(globals.domElements.hamburgerMenu, 'mobile header hidden');
  },

  mobileNavShowing: function (test) {
      test.assert.visible(globals.domElements.hamburgerMenu, 'mobile header showing');
  },

  testCookieBar: function (test) {
    test
      .assert.visible(globals.domElements.cookieId, 'Cookie Bar is visible')
      .click(globals.domElements.cookieClose, function () {
        test
          .assert.hidden(globals.domElements.cookieId, 'The cookie bar is now hidden following the close button being clicked');
      });
  }
}

module.exports = globalFunctions;
