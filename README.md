This project enables a user to run browser automated tests using the selenium
standalone server which can be downloaded here
http://www.seleniumhq.org/download/
and the jar file placed in the root of the project

The tests are written in nightwatch js
http://nightwatchjs.org/

To run this you will need to have Java installed on your machine.

For exact requirements please see
http://nightwatchjs.org/guide


For the tests for the sake of speed we are using phantomjs which a headless browser

To test with an actual browser you can change the 'desiredCapabilities' in the
nightwatch.json to the following:

"browserName" : "chrome",
"javascriptEnabled" : true,
"acceptSslCerts" : true,
"chromeOptions" : {
  "args" : ["start-fullscreen"]
}
