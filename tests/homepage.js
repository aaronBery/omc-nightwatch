var globals = require('../utils/globals.js');
var globalFunctions = require('../utils/global-functions.js');

module.exports = {
    'Test out the OMC in desktop view' : function (browser) {
        browser
            .resizeWindow(globals.screens.full.width, globals.screens.full.height)
            .url(globals.baseUrl)
            .waitForElementVisible('body', 1000)
            .assert.elementPresent('.cbp-spmenu-push', 'Found the expected body class on home page');

        globalFunctions.desktopNavShowing(browser);
        globalFunctions.mobileNavHidden(browser);
        globalFunctions.testCookieBar(browser);

        browser.end();
    },
    'Test out the OMC in tablet view' : function (browser) {
        browser
            .resizeWindow(globals.screens.tablet.width, globals.screens.tablet.height)
            .url(globals.baseUrl)
            .waitForElementVisible('body', 1000)
            .assert.elementPresent('.cbp-spmenu-push', 'Found the expected body class on home page');

        globalFunctions.desktopNavHidden(browser);
        globalFunctions.mobileNavShowing(browser);

        browser.end();
    },
    'Test out the OMC in mobile view' : function (browser) {
        browser
            .resizeWindow(globals.screens.mobile.width, globals.screens.mobile.height)
            .url(globals.baseUrl)
            .waitForElementVisible('body', 1000)
            .assert.elementPresent('.cbp-spmenu-push', 'Found the expected body class on home page');

        globalFunctions.desktopNavHidden(browser);
        globalFunctions.mobileNavShowing(browser);

        browser.click('a.toggle-menu', function() {
            browser
                .pause(3000)
                .assert.visible('.cbp-spmenu-open', 'now I can see a mobile nav item')
                .end();
        });
    }
};
