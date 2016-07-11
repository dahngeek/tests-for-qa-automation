var wd = require('wd'),
username = process.env.SAUCE_USERNAME,
accessKey = process.env.SAUCE_ACCESS_KEY,
    desiredCaps = {
        browserName: 'Safari',
        appiumVersion: '1.5.3',
        deviceName: 'iPhone 6 Plus',
        platformVersion: '9.3',
        platformName: 'iOS',
        name: 'Sample Test',
        app: ''
    },
    driver = wd.remote("ondemand.saucelabs.com", 80, username, accessKey);

driver.init(desiredCaps, function(error) {
    if (error) {
        throw new Error('Session did not start properly. Please make sure you sauce credentials are correct');
    }
      driver.get("http://admc.io/wd/test-pages/guinea-pig.html", function() {
      driver.title(function(err, title) {
        // title.should.include('WD');
        driver.elementById('i am a link', function(err, el) {
          driver.clickElement(el, function() {
            /* jshint evil: true */
            driver.eval("window.location.href", function(err, href) {
              // href.should.include('guinea-pig2');
              driver.quit();
            });
          });
        });
      });
    });
});
