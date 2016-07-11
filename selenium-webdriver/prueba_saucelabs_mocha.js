var webdriver = require('selenium-webdriver'), // muse use selenium-webdriver version <=2.47.0
    username = process.env.SAUCE_USERNAME,
    accessKey = process.env.SAUCE_ACCESS_KEY,
    driver;
var assert = require('assert'),
test = require('selenium-webdriver/testing');
var SauceLabs = require('saucelabs');
var saucelabs = new SauceLabs({
  username: process.env.SAUCE_USERNAME,
  password: process.env.SAUCE_ACCESS_KEY
});

var testtitle = "probando automatizacion";
var etiquetas = ["Hacienda", "Getting Started"];

//probar que busque simple programmer
test.describe('Google Search simple programmer', function() {
  this.timeout(30000);
  driver = new webdriver.Builder().
    withCapabilities({
      'browserName': 'chrome',
      'platform': 'Windows XP',
      'version': '43.0',
      'username': username,
      'accessKey': accessKey
    }).
    usingServer("http://" + username + ":" + accessKey +
                "@ondemand.saucelabs.com:80/wd/hub").
    build();
    driver.getSession().then(function(sessionid) {
            driver.sessionID = sessionid.id_;
        });
  test.it('should work', function() {
    driver.get('http://www.google.com');
    var searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('simple programmer');
    driver.wait(function() {
       return driver.getTitle().then(function(title) {
         console.log(title);
         return title === 'simple programmer - Google Search';
       });
    }, 20000);
    driver.quit();
  });
});
