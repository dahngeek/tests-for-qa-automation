//Recordatorio, corer con mocha
//mocha mocha-saucelabs-selenium-webdriver.js


var assert = require('assert'),
test = require('selenium-webdriver/testing'),username = process.env.SAUCE_USERNAME,
accessKey = process.env.SAUCE_ACCESS_KEY,
webdriver = require('selenium-webdriver');
var SauceLabs = require('saucelabs');
var saucelabs = new SauceLabs({
  username: process.env.SAUCE_USERNAME,
  password: process.env.SAUCE_ACCESS_KEY
});

var testtitle = "probando automatizacion";
var etiquetas = ["Hacienda", "Getting Started"];

test.describe('Google Search', function() {
  this.timeout(300000);
  var driver = new webdriver.Builder().
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
  test.it('should display Google', function() {
    driver.get('http://www.google.com');
    var searchBox = driver.findElement(webdriver.By.name('q'));
    searchBox.sendKeys('simple programmer');
    driver.wait(function() {
       return driver.getTitle().then(function(title) {
         return title === 'simple programmer - Google Search';
       });
    }, 200000);
  });
  test.it('should have Hacienda del comendador as title', function() {
    driver.get('http://haciendadelcomendador.com');
    driver.wait(function() {
       return driver.getTitle().then(function(title) {
         return title === 'Hacienda del comendador';
       });
    }, 10000).then(function (){
        saucelabs.updateJob(driver.sessionID, {
                name: testtitle,
                tags: etiquetas,
                passed: true
              }, function (err, res) {
                   var str = res.id + ": Status: " + res.status;
                   if (res.error) {
                     str += "\033[31m Error: " + res.error + " \033[0m";
                   }
                   console.log(str);
                   driver.quit();
          });
        driver.quit();
    });
  })
});
