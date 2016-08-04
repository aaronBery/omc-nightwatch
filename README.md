This project enables a user to run browser automated tests using the selenium
standalone server which can be downloaded here
http://www.seleniumhq.org/download/
and the jar file placed in the root of the project

The tests are written in nightwatch js
http://nightwatchjs.org/
You will need to install this globally using npm package manager using the
command (you may need to use sudo for mac or linux)

npm install -g nightwatch


To run this you will need to have Java installed on your machine.

For exact requirements please see
http://nightwatchjs.org/guide


For the tests for the sake of speed we are using phantomjs which a headless browser
You can download the installation here http://phantomjs.org/

To test with an actual browser e.g. chrome

run the selenium jar with the following 

java -jar selenium-server-standalone-2.53.0.jar -Dwebdriver.chrome.driver=./drivers/chromedriver
