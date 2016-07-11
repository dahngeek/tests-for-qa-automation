var assert = require('assert'),
test = require('selenium-webdriver/testing'),until = require('selenium-webdriver/lib/until'),username = process.env.SAUCE_USERNAME,
accessKey = process.env.SAUCE_ACCESS_KEY,
webdriver = require('selenium-webdriver'), fs = require('fs');
// var SauceLabs = require('saucelabs');
// var saucelabs = new SauceLabs({
//   username: process.env.SAUCE_USERNAME,
//   password: process.env.SAUCE_ACCESS_KEY
// });
var count_screenshot = 0;
var testtitle = "probando automatizacion";
var etiquetas = ["Hacienda", "Getting Started"];
function writeScreenshot(data, name) {
    name = name || 'ss.png';
    var screenshotPath = 'C:\\Users\\Jonny-Vilia\\Documents\\danielX\\TestsSelenium\\';
    fs.writeFileSync(screenshotPath + name, data, 'base64');
};

test.describe('Probar seccion contacto', function() {
  this.timeout(300000);
  var driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.chrome())
            .build();
  var timersWeb = driver.manage().timeouts();

  // var driver = new webdriver.Builder().
  //   withCapabilities({
  //     'browserName': 'chrome',
  //     'platform': 'Windows XP',
  //     'version': '43.0',
  //     'username': username,
  //     'accessKey': accessKey
  //   }).
  //   usingServer("http://" + username + ":" + accessKey +
  //               "@ondemand.saucelabs.com:80/wd/hub").
  //   build();
  driver.getSession().then(function(sessionid) {driver.sessionID = sessionid.id_;});

  test.it('should display Google', function() {
      driver.get('http://www.google.com');
      var searchBox = driver.findElement(webdriver.By.name('q'));
      searchBox.sendKeys('simple programmer');
      driver.wait(function() {
         return driver.getTitle().then(function(title) {
           driver.takeScreenshot().then(function(data) {
               writeScreenshot(data, 'out-'+count_screenshot+'.png');
               count_screenshot++;
           });
           return title === 'simple programmer - Buscar con Google';
         });
      }, 200000);
  });
  test.it('should have Hacienda del comendador as title', function() {
      driver.get('http://haciendadelcomendador.com');
      timersWeb.pageLoadTimeout(20000).then(
        function () {
          console.log("finalizo.");
          driver.wait(until.elementLocated({id:'habla_topbar_div'}))
          .then(function () {
            return driver.getTitle().then(function(title) {
             //  saucelabs.updateJob(driver.sessionID, {
             //    name: testtitle,
             //    tags: etiquetas,
             //    passed: true
             //  }, function(err, response){
             //    console.log("SauceOnDemandSessionID=" + driver.sessionID +" finaliza");
             //    console.log("> error: "+err);
             //    console.log("> response: "+response);
             //  });
            driver.takeScreenshot().then(function(data) {
                writeScreenshot(data, 'out-'+count_screenshot+'.png');
                count_screenshot++;
            });
              return title === 'Hacienda del comendador';
            })
          });
        }
      );
              driver.quit();
  })
});
